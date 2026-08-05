#!/usr/bin/env python3
"""
bundle-media.py — download the site's remote media and serve it from your own domain.

The site streams its demo photos, hero videos and blog imagery from CloudFront
(d8j0ntlcm91z4.cloudfront.net). That works, but it's a third-party dependency:
if CloudFront is slow or blocked, those assets don't load. This script pulls
every one of them into assets/media/ and rewrites index.html, content-global.js
and src/content.js to point at the local copies instead.

WHY IT ISN'T ALREADY DONE: the environment this repo was assembled in blocks
CloudFront by network policy, so the files couldn't be fetched there. Run this
on a machine (or CI step) with normal internet access.

USAGE
    python3 bundle-media.py --dry-run   # list what would happen, download nothing
    python3 bundle-media.py             # download + rewrite the files
    python3 bundle-media.py --force     # rewrite even if some downloads failed

Safe to re-run: already-downloaded files are skipped, and once the URLs have
been rewritten the prefix is gone so a second run is a no-op. Requires only the
Python 3 standard library — no pip installs.
"""

import os
import re
import sys
import urllib.request

# The one CloudFront prefix every asset hangs off of. Both the literal
# <video src="PREFIX..."> URLs and the `const B = "PREFIX"` + filename
# concatenations in the demo data start with exactly this string, so a single
# global replace localises all of them at once.
PREFIX = "https://d8j0ntlcm91z4.cloudfront.net/user_37WlzFvjNyv4KMsclpKxnBo6d06/"
LOCAL_DIR = "assets/media"           # where files are saved
LOCAL_REF = "./assets/media/"        # what the prefix becomes in the code
FILES = ["index.html", "content-global.js", "src/content.js"]

# Asset filenames look like hf_20260730_232210_63153330-....mp4 / .png
NAME_RE = re.compile(r"hf_\d{8}_\d{6}_[0-9a-f-]+\.[A-Za-z0-9]+")

HERE = os.path.dirname(os.path.abspath(__file__))
DRY = "--dry-run" in sys.argv
FORCE = "--force" in sys.argv


def collect_filenames():
    names = set()
    for rel in FILES:
        path = os.path.join(HERE, rel)
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as fh:
            names.update(NAME_RE.findall(fh.read()))
    return sorted(names)


def download(name):
    dest = os.path.join(HERE, LOCAL_DIR, name)
    if os.path.exists(dest) and os.path.getsize(dest) > 0:
        return "skip", os.path.getsize(dest)
    url = PREFIX + name
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 bundle-media"})
    for attempt in range(3):
        try:
            with urllib.request.urlopen(req, timeout=60) as resp:
                data = resp.read()
            with open(dest, "wb") as out:
                out.write(data)
            return "ok", len(data)
        except Exception as exc:  # noqa: BLE001 - report and move on
            if attempt == 2:
                return "fail:" + str(exc), 0
    return "fail:unknown", 0


def rewrite():
    changed = []
    for rel in FILES:
        path = os.path.join(HERE, rel)
        if not os.path.exists(path):
            continue
        with open(path, "r", encoding="utf-8") as fh:
            text = fh.read()
        if PREFIX in text:
            with open(path, "w", encoding="utf-8") as fh:
                fh.write(text.replace(PREFIX, LOCAL_REF))
            changed.append(rel)
    return changed


def main():
    names = collect_filenames()
    print(f"Found {len(names)} unique media files referenced across {len(FILES)} files.")
    if not names:
        print("Nothing to do (already localised?).")
        return

    if DRY:
        for n in names:
            print("  would fetch:", PREFIX + n)
        print(f"\nDry run. Would save into {LOCAL_DIR}/ and rewrite: {', '.join(FILES)}")
        return

    os.makedirs(os.path.join(HERE, LOCAL_DIR), exist_ok=True)
    ok = skip = fail = 0
    total = 0
    for i, name in enumerate(names, 1):
        status, size = download(name)
        total += size
        if status == "ok":
            ok += 1
            print(f"[{i}/{len(names)}] ok    {name}  ({size//1024} KB)")
        elif status == "skip":
            skip += 1
            print(f"[{i}/{len(names)}] skip  {name}  (already present)")
        else:
            fail += 1
            print(f"[{i}/{len(names)}] FAIL  {name}  -> {status}")

    print(f"\nDownloaded {ok}, skipped {skip}, failed {fail}. "
          f"~{total//1024//1024} MB in {LOCAL_DIR}/.")

    if fail and not FORCE:
        print("\nSome downloads failed, so the source files were NOT rewritten "
              "(rewriting now would point at missing files). Fix connectivity and "
              "re-run, or pass --force to rewrite anyway.")
        sys.exit(1)

    changed = rewrite()
    if changed:
        print("Rewrote to local paths:", ", ".join(changed))
    else:
        print("No prefix left to rewrite — already localised.")
    print("\nDone. Commit assets/media/ and the rewritten files, then redeploy.")


if __name__ == "__main__":
    main()
