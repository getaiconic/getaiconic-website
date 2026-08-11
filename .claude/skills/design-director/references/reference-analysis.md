# Phase 1 — Analyzing references

Goal: capture *why* something looks good in enough structured detail that you
could later reconstruct the taste without the original in front of you. You are
building evidence, not writing a review — resist grading; describe.

## Process

1. **Take in the reference.** For a URL, fetch it (or the screenshot the user
   gave). For an image, look closely. For a designer/account, look at a spread of
   their work, not one piece.
2. **Name it.** Save the analysis to `design/references/<slug>.md` — one file per
   reference so the library stays browsable.
3. **Fill the template below.** Be specific with values. "Blue" is useless;
   `#0B5FFF` is evidence. "Big headings" is useless; "display type ~64px, tight
   -2% tracking, weight 600" is evidence.
4. **Extract, don't just admire.** The most valuable section is the last one —
   the concrete technique someone could replicate.

## Template

Use this exact structure so the library is consistent and scannable:

```markdown
## Reference: [Name or URL]

_Analyzed: [date] · Source: [link]_

### Visual elements
- **Colors:** [hex values, grouped by role — bg, text, accent]
- **Typography:** [families, notable sizes, weights, tracking, case]
- **Spacing:** [density — tight/airy; approximate rhythm/base unit]
- **Layout:** [grid, columns, alignment, how content is composed]
- **Shape & depth:** [border radius, borders, shadows, blur, elevation]
- **Motion:** [transitions, hovers, scroll behavior, if observable]

### Design principles (what this reference believes)
- [Principle 1 — a stance, e.g. "whitespace is a feature, not waste"]
- [Principle 2]
- [Principle 3]

### Signature elements (what makes it recognizable)
- [The thing you'd point to and say "that's so them"]

### Techniques to extract (replicable)
- [A concrete move — e.g. "gradient text mask on the hero H1 using
  background-clip: text with a 120° accent gradient"]
```

## When analyzing several at once

If the user drops 10 references and says "tell me what I like", analyze each
briefly, then add a short **Common threads** note at the end pointing out what
recurs across them (a palette temperature, a spacing sensibility, a type
attitude). Those recurring threads are the seeds of the design system — flag them
so Phase 2 has a head start. Don't force consensus where there isn't any; genuine
tension between references is useful information too.

## Scale

The original vision imagined a library of 30–50 references. You don't need that
many to start — a system can emerge from 5–8 strong ones. Encourage breadth over
volume: a few references that genuinely disagree teach the system more than
twenty that all look alike.
