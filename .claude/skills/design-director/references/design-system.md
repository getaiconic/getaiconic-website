# Phase 2 — Synthesizing the design system

Goal: collapse the reference library into a system that produces consistent work.
The system has two halves: **tokens** (the measurable source of truth) and
**principles** (the judgment that tokens can't encode). Both matter — tokens keep
you consistent, principles keep you tasteful.

`tokens.json` is the source of truth. `tokens.css` is generated from it (see the
script at the end). `design-system.md` is the human-readable narrative that ties
tokens to the principles behind them.

## Process

1. **Read the whole library** (`design/references/*.md`) plus any existing design
   language already in the project (CSS variables, Tailwind config, component
   styles). Look for the recurring threads flagged in Phase 1.
2. **Decide the tokens.** Where references disagree, pick a direction and say why
   in `design-system.md` — a system is a set of choices, not an average. Averaging
   ten palettes gives mud.
3. **Write `tokens.json`** to the schema below.
4. **Generate `tokens.css`** with the bundled script.
5. **Write `design-system.md`** — tokens summarized, principles stated, do's and
   don'ts made concrete.

## `tokens.json` schema

Keep it flat and predictable so the generator and downstream code can rely on it.
Every color must be a real value; scales are ordered small→large.

```json
{
  "$meta": { "brand": "Name", "updated": "YYYY-MM-DD" },
  "color": {
    "bg": "#0B0B0F",
    "surface": "#15151C",
    "text": "#F2F2F7",
    "text-muted": "#A0A0B0",
    "primary": "#6E56CF",
    "secondary": "#4C4F69",
    "accent": "#F5A623",
    "neutral": { "50": "#…", "100": "#…", "500": "#…", "900": "#…" },
    "success": "#2FB170", "warning": "#E5A50A", "error": "#E5484D", "info": "#0091FF"
  },
  "font": {
    "sans": "\"Inter\", system-ui, sans-serif",
    "serif": "\"…\", Georgia, serif",
    "mono": "\"…\", ui-monospace, monospace"
  },
  "text": {
    "xs": "0.75rem", "sm": "0.875rem", "base": "1rem", "lg": "1.125rem",
    "xl": "1.25rem", "2xl": "1.5rem", "3xl": "1.875rem", "4xl": "2.25rem",
    "5xl": "3rem", "6xl": "3.75rem"
  },
  "leading": { "tight": "1.1", "snug": "1.3", "normal": "1.5", "relaxed": "1.7" },
  "tracking": { "tight": "-0.02em", "normal": "0", "wide": "0.04em" },
  "space": {
    "0": "0", "1": "0.25rem", "2": "0.5rem", "3": "0.75rem", "4": "1rem",
    "6": "1.5rem", "8": "2rem", "12": "3rem", "16": "4rem", "24": "6rem", "32": "8rem"
  },
  "radius": { "sm": "4px", "md": "8px", "lg": "16px", "full": "9999px" },
  "shadow": {
    "subtle": "0 1px 2px rgba(0,0,0,0.06)",
    "medium": "0 4px 16px rgba(0,0,0,0.12)",
    "strong": "0 16px 48px rgba(0,0,0,0.24)"
  }
}
```

Add or remove keys to fit the brand — a minimalist system might have one font and
three shadows. The schema is a starting point, not a cage. Just keep it flat,
named by role (not by raw value), and internally consistent.

## Generating `tokens.css`

Run the bundled generator instead of hand-writing CSS — it's deterministic and
keeps the two files in sync:

```bash
python .claude/skills/design-director/scripts/tokens_to_css.py \
  design/tokens.json > design/tokens.css
```

It emits `:root { --color-primary: …; --space-6: …; }` style custom properties,
flattening nested groups with hyphens (`color.neutral.500` → `--color-neutral-500`).

## `design-system.md` structure

```markdown
# Design System: [Brand]

_Updated: [date] · Source: N references_

## Tokens
[Brief prose summary + pointer to tokens.json as source of truth. Don't
duplicate every value — describe the character: "cool near-black surfaces, a
single violet primary, warm amber accent used sparingly."]

## Principles
1. [Principle] — [one line on why, ideally traced to references]
2. …
3. …
(Aim for 3–6. More than that and none of them guide anything.)

## Do / Don't
**Do**
- [Concrete pattern to follow, e.g. "lead sections with a single large statement,
  not a wall of text"]

**Don't**
- [Concrete anti-pattern, e.g. "never stack more than two shadows; depth comes
  from one confident elevation"]
```

## Keep principles falsifiable

A principle you can't violate isn't guiding anything. "Be modern" is noise.
"Default to one accent color; a second accent needs a reason" is a rule you can
check a design against. Write principles a reviewer could hold a design up to and
say pass or fail.
