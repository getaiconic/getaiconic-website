# Integration — Canva

Canva is available through connected MCP tools (`mcp__Canva__*`). Use it when the
user wants a design produced or edited *inside Canva* — social graphics, decks,
posters, brand-template instances — rather than as code.

If the tool schemas aren't loaded yet, fetch them with ToolSearch first, e.g.
`ToolSearch("select:mcp__Canva__generate-design,mcp__Canva__export-design")`.

## Useful tools (load schemas before calling)

- `mcp__Canva__generate-design` / `generate-design-structured` — create a new
  design from a prompt. Feed it the brand: name the palette hexes, the type
  attitude, and the mood from `design-system.md` so output lands on-system
  instead of generic.
- `mcp__Canva__list-brand-kits` — pull the user's brand kit; reconcile it against
  `tokens.json` so Canva output and code output share one palette.
- `mcp__Canva__search-brand-templates` / `create-design-from-brand-template` —
  when the user has an established template, instantiate it rather than generating
  from scratch. This is the most on-brand path.
- `mcp__Canva__edit-design` — modify an existing design.
- `mcp__Canva__export-design` / `get-export-formats` — export to PNG/PDF/etc. and
  save into the project's asset directory.
- `mcp__Canva__upload-asset-from-url` — bring generated imagery (e.g. from
  Higgsfield) into Canva.

## How to keep Canva output on-system

The trap with generative design tools is bland, off-brand output. Counter it:
1. Read `design-system.md` and `tokens.json` first.
2. Put the actual palette hexes, font names, and 2–3 principles into the prompt.
3. Prefer brand templates and brand kits over free generation when they exist.
4. After generating, sanity-check the result against the quality gate — if the
   colors or type drifted, regenerate with a tighter prompt rather than shipping
   something almost-right.
