# Phase 3 — Producing designs

Goal: turn a brief into an artifact that provably applies the system. The
difference between amateur and premium output is rarely a single flourish — it's
consistency held across every element. Layered construction is how you get there.

## Before you design — clarify the brief

Don't start pushing pixels until you know:
- **What** — landing page, dashboard, component, email, icon set, mobile screen?
- **Goal** — convert, inform, engage, delight? The goal sets the hierarchy.
- **Content** — real copy and data if it exists; realistic placeholders if not.
  Never design around "lorem ipsum" when the shape of real content would change
  the layout.

If any of these is missing and would change the design meaningfully, ask. If it
wouldn't, pick a sensible default and note it.

## Design in layers

Build in this order. Each layer is only allowed to use the vocabulary of the
system; if you reach for something outside it, that's a Phase 2 decision.

1. **Structure** — the skeleton. Grid, regions, the reading path. Get the
   composition right in grayscale before any color. If it doesn't work in
   grayscale, color won't save it.
2. **Typography** — establish hierarchy with the type scale. A reader should be
   able to rank heading > subhead > body > caption without thinking. Set line
   length (~45–75 characters for body) and leading from the tokens.
3. **Color** — apply the palette by role. Background and surfaces first, then
   text, then the accent *last and sparingly*. Accent earns attention precisely
   because it's rare.
4. **Spacing** — tune rhythm using only the spacing scale. Consistent gaps
   between like things; larger gaps between sections than within them. This is
   where most "it feels off" problems actually live.
5. **Motion & interaction** — add last. Hovers, transitions, and reveals that
   clarify state or guide attention. If an animation doesn't help the user
   understand something, it's decoration — cut it or keep it barely-there.

## Applying tokens in code (the default target)

For web output, reference the generated custom properties so the design stays
tied to the source of truth:

```css
.hero { padding: var(--space-24) var(--space-8); background: var(--color-bg); }
.hero h1 { font: 600 var(--text-6xl)/var(--leading-tight) var(--font-sans);
           letter-spacing: var(--tracking-tight); color: var(--color-text); }
.cta { background: var(--color-primary); border-radius: var(--radius-md);
       box-shadow: var(--shadow-medium); }
```

Hardcoding a hex or a pixel value in a component is the smell to watch for — if
it's not a token, either use one or add one.

## Asset generation within a design

When a design needs custom assets, keep them on-system:
- **Icons** — match the established line weight, corner radius, and grid. A mixed
  icon set (some filled, some line, different weights) reads as broken.
- **Illustrations / imagery** — match the palette and mood. If generating via
  Higgsfield or Canva, feed the palette and style into the prompt (see the
  respective integration guides).
- **Graphics** — inherit the brand's shape language and spacing.

## Deliver for handoff

A design isn't done when it looks right — it's done when someone can build it.
Hand over the artifact plus the specs a developer needs: which tokens were used,
any component states (hover/active/disabled), responsive behavior, and asset
exports. Then run the quality gate in `SKILL.md`.

## "Make it more [adjective]"

When asked to push a design in a direction ("more premium", "more playful",
"more editorial"), translate the adjective into token-level moves rather than
vibes:
- *More premium* → more whitespace, tighter type tracking, fewer colors, one
  confident shadow, slower/subtler motion.
- *More playful* → warmer/brighter accent use, rounder radii, springier motion,
  more size contrast.
- *More editorial* → a serif in the mix, stronger baseline rhythm, generous
  measure, restrained color.
Name the moves you made so the change is legible and repeatable.
