#!/usr/bin/env python3
"""Generate CSS custom properties from a design tokens.json file.

Usage:
    python tokens_to_css.py design/tokens.json > design/tokens.css

Nested groups are flattened with hyphens, so:
    color.neutral.500  ->  --color-neutral-500
    space.6            ->  --space-6
Keys beginning with "$" (e.g. "$meta") are treated as metadata and skipped.
This keeps tokens.json as the single source of truth and tokens.css a
deterministic, regenerable artifact.
"""
import json
import sys


def flatten(obj, prefix=""):
    """Yield (css-var-name, value) pairs from a nested token dict."""
    pairs = []
    for key, value in obj.items():
        if key.startswith("$"):
            continue  # metadata, not a token
        name = f"{prefix}-{key}" if prefix else key
        if isinstance(value, dict):
            pairs.extend(flatten(value, name))
        else:
            pairs.append((name, value))
    return pairs


def main():
    if len(sys.argv) != 2:
        sys.exit("usage: tokens_to_css.py <tokens.json>")
    with open(sys.argv[1], "r", encoding="utf-8") as fh:
        tokens = json.load(fh)

    pairs = flatten(tokens)
    if not pairs:
        sys.exit("no tokens found (is the file empty or all metadata?)")

    lines = ["/* Generated from tokens.json — do not edit by hand. */", ":root {"]
    for name, value in pairs:
        lines.append(f"  --{name}: {value};")
    lines.append("}")
    print("\n".join(lines))


if __name__ == "__main__":
    main()
