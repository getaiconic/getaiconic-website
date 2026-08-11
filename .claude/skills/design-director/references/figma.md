# Integration — Figma

**Read this first:** there is no Figma MCP connected in this environment. Figma
work goes through the **Figma REST API** with a personal access token the user
provides. Be upfront about that — don't imply a one-click "push to Figma" exists.
Tell the user what the token can and can't do so expectations are set.

## What the REST API can and can't do

- **Can read** a file's structure, styles, and components, and **export** frames
  and assets as PNG/SVG/PDF via image URLs. This is genuinely useful for
  understanding an existing file and pulling its styles into a design system.
- **Cannot freely create arbitrary layers** in a file. The REST API is
  read-and-export oriented; programmatic *authoring* of nodes needs the Figma
  Plugin API (runs inside Figma), not the REST API. If the user wants Claude to
  "design directly in Figma", the realistic path is: Claude produces the design
  as code/specs/tokens, and a small Figma plugin or a tool like Figma's "import"
  consumes it — or the user pastes tokens into a plugin such as Tokens Studio.

Set this expectation before starting so the user isn't surprised.

## Getting the token

Ask the user for a Figma personal access token (Figma → Settings → Security →
Personal access tokens). Never hardcode it into the repo. Read it from an env var
(e.g. `FIGMA_TOKEN`) at call time. All requests send it as a header:
`X-Figma-Token: <token>`.

## Reading a file into the design system

Pull an existing Figma file's published styles to seed or reconcile tokens:

```bash
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY/styles"
# and the file itself for structure:
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/files/$FILE_KEY"
```

`FILE_KEY` is the string in the file URL: `figma.com/file/<FILE_KEY>/…`. Map the
returned fill/text/effect styles onto the `tokens.json` schema in
`design-system.md`.

## Exporting assets

```bash
# Get image URLs for specific node ids as SVG (great for icons) or PNG @2x:
curl -s -H "X-Figma-Token: $FIGMA_TOKEN" \
  "https://api.figma.com/v1/images/$FILE_KEY?ids=$NODE_IDS&format=svg"
```

Download the returned URLs to `design/` or the project's asset directory.

## Handing tokens *to* Figma

The clean path for getting a Claude-built system into Figma is the W3C design
token format that plugins like Tokens Studio import. `tokens.json` is already
close; if the user uses such a plugin, offer to emit a compatible file and tell
them to import it there. That keeps one source of truth (this repo) and lets
Figma consume it, rather than pretending the API can paint the file.
