# Integration — Higgsfield

Higgsfield is available through connected MCP tools
(`mcp__https_mcp_higgsfield_ai_mcp__*`). Use it to generate imagery, video, and
audio assets that a design needs — hero imagery, backgrounds, illustrations,
motion, custom graphics — when off-the-shelf stock won't match the brand.

If the schemas aren't loaded, fetch them with ToolSearch first, e.g.
`ToolSearch("select:mcp__https_mcp_higgsfield_ai_mcp__generate_image,mcp__https_mcp_higgsfield_ai_mcp__generate_video")`.

## Core tools

- `generate_image` / `generate_image_batch` — still imagery. The workhorse for
  hero art, textures, illustration.
- `generate_video` / `generate_video_batch` — motion assets and background video.
- `generate_audio` — sound where a design calls for it.
- `models_explore(action:'recommend')` — when unsure which model fits the brief,
  ask for a recommendation before generating.
- Edit-in-place tools — prefer these over regenerating: `upscale_image` /
  `upscale_video` (2K/4K), `outpaint_image` (expand/uncrop), `reframe` (aspect
  ratio), `remove_background` (cutouts), `motion_control`.
- `job_display` / `jobs_wait` — generation is async; wait on jobs then fetch
  results.

## Keep generated assets on-system

1. Read `design-system.md` first and translate the brand into the prompt:
   palette (name the hexes), mood, lighting, and the reference library's visual
   attitude. A prompt that just says "hero image" gets you stock; a prompt that
   says "moody near-black scene, single warm amber light source, generous
   negative space, editorial" gets you the brand.
2. Match existing assets' style so a set reads as one family — same treatment,
   same color temperature, same level of realism/abstraction.
3. Batch related assets in one pass for consistency, then `jobs_wait` and review
   together against the quality gate.
4. Post-process with the edit tools (background removal, reframe) rather than
   regenerating from scratch — it's faster and preserves the look you approved.

## Workflows

For made-to-brief video (explainers, ads, UGC, story videos), the Higgsfield
server exposes structured workflows: call `get_workflow_instructions` (no
argument) to see the catalog, then again with the workflow name to load its
steps. Use these instead of stringing raw `generate_video` calls together for
anything narrative.
