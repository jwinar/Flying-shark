# Portfolio-half redesign — "The Arrivals Board"

Resume point for the redesign requested 2026-08-10. The historical intro
(Gate → Modern → RedThreadScene) is explicitly **out of scope** — untouched.
Everything below applies only to the post-intro portfolio: Navigation, Hero,
Work, About, Experience, Capabilities, Contact, Footer.

## Already done this session

- **Bug fix — Tang/Silk Road audio only playing in one scroll direction**:
  `useInViewport.js` polled via `IntersectionObserver`, whose threshold-crossing
  callbacks can miss a transition when GSAP flips a pinned scene between
  `position: fixed` and normal flow outside React's render cycle (this exact
  class of bug already bit this codebase once, per `STORY_PLAN.md`). Replaced
  with a per-frame `gsap.ticker` poll — same clock already driving
  Lenis/ScrollTrigger, direction-agnostic by construction.
- **Feature — ambient audio now continues past the epilogue**: `RedThreadScene`
  passes `useInViewport(containerRef, { persistPastBottom: true })`, so once
  scrolled into, its track keeps playing through the rest of the portfolio
  instead of cutting to silence when the epilogue scrolls out of view.
- **`PRODUCT.md`** written at `flying-shark-portfolio/PRODUCT.md` (durable
  product truth: audience, positioning, constraints, brand commitments).
- **Direction chosen and locked** (see below) via the impeccable skill's
  direction-roll process, confirmed with the user.
- **Google Fonts loaded** in `index.html`: Big Shoulders (600–900) and Work
  Sans (400–700), preconnected. Not yet used by anything — safe no-op until
  the portfolio tokens reference them.

## The committed direction

**THESIS**: the portfolio reads as a live arrivals/exchange board, not a resume
template — status and dates over paragraphs, refusing both the sterile-SaaS-
dashboard default and the neon-dark/glassmorphism "creative portfolio" default.

**OWN-WORLD**: pale stone/plaster ground, warm charcoal ink, three enamel
accent roles (amber = most-recent/highlighted, teal = settled, crimson =
contact/alert). Condensed Big Shoulders for display headlines, Work Sans for
body/labels/tabular data. Light, not dark — deliberately breaks clean from the
intro's dark/gold/red-thread world; the only thread connecting the two halves
is the continuous ambient audio, not a shared visual motif (confirmed with
user).

**STORY**: a recruiter or business contact reads Justin's career as a sequence
of real arrivals — hospitality rigor applied to data, proven by a board that
ties out, not asserted in prose.

**FIRST VIEWPORT**: hero renders as the board's header row — name, title,
location as tag chips (not a kicker line — see constraint below), portrait
reframed as a boarding-pass-style ID card.

**Mode**: Persuade. Bar: "bold but credible" — a recruiter skimming must still
read competence in seconds. Scope: **visuals only** — no copy, content,
section order, or functional changes (contact form mechanics, hover-reveal
work items, etc. all stay exactly as they behave today).

## Design constraints to hold while building (from craft-floor.md)

- **No kicker/eyebrow above a heading** — this is a hard ban, not a "brief can
  earn it back" default. Current `PortfolioHero.jsx` has exactly this pattern
  (role · location caption sitting above the `<h1>`) and current
  `PortfolioExperience.jsx` repeats it per-row (period caption above the role
  `<h3>`). Both need restructuring, not just restyling: hero's role/location
  become tag chips beside/under the name, not a caption above it; experience
  rows become a grid (code | role+company+description | period | tag) so the
  date sits *beside* the row, board-column style, never stacked above it.
- **No fabricated "currently employed" claim.** `personal.js` experience dates
  don't cleanly resolve to a safe "active now" computation (the top three
  entries all list an end date of Apr 2026, which is already past today's date
  of Aug 2026 — likely just stale data, not something to silently "fix").
  Do not compute an ACTIVE/CURRENT badge from date math. The only status claim
  allowed is "most recent" on the topmost entry, which is true by list order
  alone, not a guess about present employment.
- Sequence/route codes (per PRODUCT.md's factual-only rule) should derive from
  real data — e.g. company initials + year — not decorative 01/02/03 indices,
  unless the order itself is the information being conveyed (chronology is,
  so numbering by recency is fine — just don't make it an arbitrary label).
- No `border-left`/`border-right` above 1px as a device (kills the current
  gold 2px left-border on the About pull-quote and the muted 2px left-border
  on each Experience row — both need a different treatment, e.g. the panel/
  row-grid system below instead of a colored rule).
- No backdrop-blur-as-decoration on the redesigned nav (fine to keep
  `AudioToggle` and `Cursor` exactly as they are — they're persistent chrome
  spanning both halves of the site, not part of "the portfolio part").
- Display type capped at 6rem/96px, body measure 65–75ch, one authored motion
  moment (a board-tile flip-in reveal, GSAP `rotateX` + opacity, reused
  consistently across sections — not a different entrance animation per
  section).

## Scoping the new tokens (important: do not touch shared root tokens)

`tokens.css`'s `:root` block (`--color-bg`, `--color-gold`, `--font-display`,
etc.) is read by the intro scenes directly (e.g. `TangScene` uses
`var(--font-display)` for its 唐 glyph). **Do not edit those.** Add a new
scoped block instead:

```css
.portfolio-world {
  --pf-ground: #e9e3d5;
  --pf-panel: #f4efe4;
  --pf-ink: #221d17;
  --pf-ink-soft: #6b6152;
  --pf-line: #cdc3ad;
  --pf-amber: #c97a1f;   /* most-recent / highlighted */
  --pf-teal: #12695a;    /* settled */
  --pf-crimson: #a92c26; /* contact / alert */
  --pf-display: 'Big Shoulders', 'Arial Narrow', sans-serif;
  --pf-body: 'Work Sans', var(--font-ui);
}
```

Wrap `PortfolioNavigation` through `PortfolioFooter` in
`ProjectDetail.jsx` with `<div className="portfolio-world">…</div>` so only
that subtree sees the new palette; the intro scenes (siblings, not
descendants) are unaffected.

## Build order for next session

1. `tokens.css` / `global.css` — add the `.portfolio-world` scope, the shared
   `.pf-row` / `.pf-tag` / `.pf-panel` layout classes (grid-based rows, tag
   chips in three accent colors, panel surface with soft offset+blur shadow —
   no hard neobrutalist shadows, no heavy rounding).
2. `ProjectDetail.jsx` — add the `.portfolio-world` wrapper + the direction
   contract as a JS comment above it (React strips JSX comments from output,
   so this is a source-level record for future edits, not a DOM-inspectable
   one).
3. `PortfolioNavigation.jsx` — restyle as a light board-tab strip, same fixed
   position and anchor links as today.
4. `PortfolioHero.jsx` — board header-row layout; portrait as a boarding-pass
   card; role/location as tag chips, not a kicker.
5. `PortfolioWork.jsx` + `WorkItem.jsx` — projects as board listings (code,
   title, category/year, description, hover-reveal preview restyled to the
   light palette); "Coming Soon" as a standby list.
6. `PortfolioAbout.jsx` — tagline as a stamped/ticket pull-quote panel (no
   colored border-left), about paragraph at 65–75ch measure.
7. `PortfolioExperience.jsx` — the centerpiece: grid-based arrivals rows per
   the constraint above.
8. `PortfolioCapabilities.jsx` — skills as tag chips, certifications as a
   numbered manifest, education as a closing record block.
9. `PortfolioContact.jsx` + `ContactForm.jsx` — "final call" panel; inputs and
   submit button restyled against the light palette (currently hardcoded to
   the dark tokens).
10. `PortfolioFooter.jsx` — light restyle, same content.

## After the build (per the skill's finish process)

- One batched desktop+mobile screenshot inspection round, fix what it finds,
  one confirmation round — two rounds is the ceiling.
- Run the mechanical design detector on the changed files.
- Spawn the finish-reviewer and documenter subagents; the documenter writes
  `DESIGN.md` from the *built* result, not from this plan.
