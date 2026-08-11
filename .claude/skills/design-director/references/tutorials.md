# Learning from tutorials

Goal: when the user shares a design tutorial (a YouTube transcript, an article, a
walkthrough), don't apply its ideas once and forget them — distill the reusable
techniques into `design/knowledge-base.md` so they compound. A technique captured
well is available to every future design; a technique used once is lost.

## Process

1. **Read the source** for concrete, transferable moves — not general vibes.
   "Use good contrast" is not a technique; "layer a 1px inset light-top /
   dark-bottom border to fake bevel on dark UI" is.
2. **Append an entry** to `design/knowledge-base.md` using the template below.
   Append, don't overwrite — the file is a growing library.
3. **Tag it** with searchable keywords and, crucially, *when to reach for it*, so
   future-you can find it by problem rather than by remembering the tutorial.

## Entry template

```markdown
## [Technique name]

_Source: [title / link] · Tool: [Figma / CSS / Framer / Canva / Higgsfield / …]_

**What it does:** [one line]

**How:** [the actual steps, shortcuts, or code — enough to execute without the
video]

**When to use:** [the problem this solves, e.g. "flat dark cards look dead —
this adds believable depth without a heavy shadow"]

**Keywords:** [searchable terms]
```

## Applying the knowledge base

When you're in Phase 3 and a design needs a particular effect, grep
`knowledge-base.md` by the problem you're facing before inventing something.
Prefer a technique the user has explicitly endorsed (by feeding you the tutorial)
over a fresh guess — it's a signal about their taste, not just a method.

## Staying current

If the user asks "what's trending in [area]", you can search the web for recent
technique roundups, but funnel anything worth keeping back into
`knowledge-base.md` through the same template. The point is always to convert
fleeting input into durable, reusable capability.
