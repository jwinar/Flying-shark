---
name: Justin Winartha — Portfolio (The Arrivals Board)
description: The light "arrivals board" world for the post-intro portfolio half — pale stone ground, warm ink, three enamel status accents.
colors:
  ground: "#e9e3d5"
  panel: "#f4efe4"
  panel-raised: "#faf7ef"
  ink: "#221d17"
  ink-soft: "#5f5647"
  line: "#cdc3ad"
  amber: "#c97a1f"
  amber-ink: "#8f570f"
  teal: "#12695a"
  teal-ink: "#0c4a3f"
  crimson: "#a92c26"
  crimson-ink: "#7c1f1b"
  shadow-ink: "rgb(34,20,10)"
  sheen-white: "#ffffff"
typography:
  display:
    fontFamily: "'Big Shoulders', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2.5rem, 7vw, 6rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "'Big Shoulders', 'Arial Narrow', sans-serif"
    fontSize: "clamp(2rem, 4vw, 3rem)"
    fontWeight: 800
    lineHeight: 0.98
    letterSpacing: "-0.02em"
  title:
    fontFamily: "'Big Shoulders', 'Arial Narrow', sans-serif"
    fontSize: "clamp(1.375rem, 2.5vw, 2rem)"
    fontWeight: 800
    lineHeight: 1.1
    letterSpacing: "-0.01em"
  body:
    fontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "'Work Sans', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
    fontSize: "12px"
    fontWeight: 700
    letterSpacing: "0.1em"
  scale:
    caption: "11px"
    label: "12px"
    meta: "13px"
    row-body: "14px"
    body-tight: "15px"
    body-default: "16px"
    body-wide: "18px"
    body-wide-alt: "19px"
    body-large: "20px"
    stamp-quote: "21px"
rounded:
  focus-ring: "3px"
  tile: "10px"
  stamp: "12px"
  panel: "14px"
  id-card-inset: "8px"
  id-card: "16px"
  pill: "999px"
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "40px"
  xl: "72px"
  section: "112px"
components:
  button-solid:
    backgroundColor: "{colors.ink}"
    textColor: "{colors.panel}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  button-outline:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    rounded: "{rounded.pill}"
    padding: "14px 28px"
  tag-amber:
    backgroundColor: "color-mix(in srgb, {colors.amber} 16%, {colors.panel})"
    textColor: "{colors.amber-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  tag-teal:
    backgroundColor: "color-mix(in srgb, {colors.teal} 16%, {colors.panel})"
    textColor: "{colors.teal-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  tag-crimson:
    backgroundColor: "color-mix(in srgb, {colors.crimson} 16%, {colors.panel})"
    textColor: "{colors.crimson-ink}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  tag-neutral:
    backgroundColor: "{colors.panel}"
    textColor: "{colors.ink-soft}"
    rounded: "{rounded.pill}"
    padding: "5px 12px"
  panel:
    backgroundColor: "{colors.panel}"
    rounded: "{rounded.panel}"
  id-card:
    backgroundColor: "{colors.panel-raised}"
    rounded: "{rounded.id-card}"
    padding: "14px"
---

# Design System: The Arrivals Board

## Overview

**Creative North Star: "The Arrivals Board"**

This is the light world beneath a dark, saturated cinematic intro (a separate, untouched world outside this document's scope) — the moment the site stops being a film and becomes a record. It reads as a live arrivals/exchange board, not a resume template: status and dates over paragraphs, a pale stone-and-plaster ground instead of paper-white, warm charcoal ink instead of pure black, and three enamel accent colors that each carry exactly one status meaning rather than decorating at will. Every section is built from the same small set of parts — panel, row, tag, stamp — the way a real departure board is built from the same tile repeated down the hall.

The system deliberately breaks clean from the intro's dark/gold register; the only thread connecting the two halves is the continuous ambient audio, not a shared visual motif. Within the portfolio half itself, identity and status data (a role, a location, a date, a "most recent" claim) are never set as a caption stacked above a heading — they are tag chips beside it or grid columns next to it, the way a board places the gate number beside the flight, not above it.

**Key Characteristics:**
- Pale stone/plaster ground (`#e9e3d5`) with warm charcoal ink (`#221d17`), never pure black or pure white.
- Three enamel accents with fixed status meanings: amber (most recent/featured), teal (settled/steady), crimson (contact/alert) — never interchangeable.
- Condensed Big Shoulders (800 weight) for every headline; Work Sans for everything read as running text or data.
- One authored motion moment — a board-tile flip-in (`rotateX` + opacity) — reused across every section instead of a different entrance per section.
- Soft, ink-tinted shadows only; no hard offset shadows, no colored border-left/right rules, no kickers.

## Colors

A warm, low-saturation stone palette carries the surfaces; three enamel accents carry all status meaning.

### Primary
- **Departures Amber** (`#c97a1f`, text-safe ink at `#8f570f`): the most-recent/featured marker — the hero's professional-headline chip, the topmost ("Most Recent") experience row, and the newest work entry all carry it. It is the only accent that means "this one, first."

### Secondary
- **Settled Teal** (`#12695a`, text-safe ink at `#0c4a3f`): the steady/secondary marker — every experience row below the most recent one, and the technical-skills chip group in Capabilities. It reads as calm and resolved next to amber's urgency.

### Tertiary
- **Alert Crimson** (`#a92c26`, text-safe ink at `#7c1f1b`): reserved for contact and error states — the small stamped dot on the Contact panel (`.pf-panel--alert`) and the form's error-message text. It never appears as a status tag on Experience or Work rows.

### Neutral
- **Pale Stone** (`#e9e3d5`): the page ground (`--pf-ground`), applied once at the `.portfolio-world` root.
- **Warm Chalk** (`#f4efe4`): the base panel surface (`--pf-panel`) — rows, tag backdrops, the Work/Experience/Capabilities containers.
- **Bone White** (`#faf7ef`): the raised-panel surface (`--pf-panel-raised`) — the bottom nav dock, the ID card, and stamp panels; one step lighter than a resting panel, signaling "this sits above the board."
- **Warm Charcoal Ink** (`#221d17`): primary text, headings, and the solid button fill.
- **Soft Umber** (`#5f5647`): secondary text — body copy, row periods, labels, captions.
- **Weathered Line** (`#cdc3ad`): every hairline border and divider.
- **Shadow Ink** (`rgb(34,20,10)`): the tint underlying every entry in the Shadow Vocabulary below — deliberately darker/warmer than text Ink, never used for text or fills.
- **Sheen White** (`#ffffff`, used only at 40–50% alpha): the enamel gloss highlight layered into `.pf-tag` (`background-image` top-light gradient + inset top highlight) — never a fill on its own.

### Named Rules
**The Three-Enamel Rule.** Amber, teal, and crimson each carry exactly one status meaning across the whole board — most-recent, settled, and contact/alert respectively. A color is never reused for a different status just because it "looks good" in a new spot.

## Typography

**Display Font:** Big Shoulders (with Arial Narrow, sans-serif fallback)
**Body Font:** Work Sans (with the site's system-UI stack as fallback)

**Character:** A condensed, heavyweight display face paired with a plain, highly legible grotesque — the pairing of a departure board's tile typeface and its printed schedule sheet. The display face never appears below 800 weight; the body face never appears above 700.

### Hierarchy
- **Display** (800, `clamp(2.5rem, 7vw, 6rem)`, line-height 0.98): the hero name only — the single largest mark on the board, capped at 96px/6rem per the world's own constraint.
- **Headline** (800, `clamp(2rem, 4vw, 3rem)`, line-height 0.98): section titles (Selected Work, About, Experience, Capabilities, Contact).
- **Title** (800, `clamp(1.375rem, 2.5vw, 2rem)`): row-level headings inside a section — a work item's title, the "Coming Soon" sub-heading.
- **Body** (400, 1.7 line-height, 65–75ch measure via `.pf-prose` at `max-width: 70ch`): running copy — the hero summary, About paragraph, row descriptions. Size flexes by context across the documented `scale` (13–21px: `meta`/`row-body`/`body-tight`/`body-default`/`body-wide`/`body-large`/`stamp-quote`) but the measure and line-height stay fixed.
- **Label** (700, 12px, `0.1em`–`0.15em` tracking, uppercase): row codes, tag text, nav tabs, form field labels, the footer line — anything read as metadata rather than prose. Captions (the ID card's "[initials] · Boarding" line) drop one step to the `scale.caption` step (11px).

### Named Rules
**The Condensed/Body Split Rule.** Big Shoulders is exclusively for headings and short stamped statements (the About pull-quote, the Education line); Work Sans carries every paragraph, label, tag, and form field. The two fonts never swap roles.

## Layout

The board lives inside `.portfolio-world`, a single scoped wrapper around Navigation through Footer that carries its own token set without touching the shared `:root` tokens the dark intro scenes read directly.

Sections (`.pf-section`) use consistent vertical rhythm: 112px top/bottom padding on desktop, dropping to 72px at the 860px breakpoint — the system's one responsive breakpoint, used uniformly across hero grid, about grid, and row grids. Section content centers in a `.pf-section-inner` container, most commonly capped at 900px (About, Experience, Capabilities, Contact) or left at the section default of 1100px (Work).

The signature layout device is the **row grid** (`.pf-row`): a horizontal grid of `code | content | period | tag`-style columns (`.pf-row-experience`: `56px 1fr auto auto`; `.pf-row-work`: `56px 1fr auto`) with a 1px bottom hairline between rows and no divider after the last one. Below 860px every row grid collapses to a single column, with the period column explicitly reordered (`order: 3`) so the date reads after the content instead of stranded mid-row. The hero (`.hero-grid`, 0.85fr/1.15fr) and about (`.about-grid`, auto/1fr) layouts follow the same collapse-to-single-column pattern at the same breakpoint.

## Elevation & Depth

Depth comes entirely from soft, ink-tinted shadows layered on a flat, light ground — never from borders standing in for shadows, and never a shadow without both offset and blur together.

### Shadow Vocabulary
- **Chip** (`box-shadow: 0 1px 2px rgba(34,20,10,0.10)`): tags and small pill elements — barely lifted.
- **Row** (`box-shadow: 0 1px 2px rgba(34,20,10,0.05), 0 6px 16px -8px rgba(34,20,10,0.14)`): stamp panels and solid buttons — a medium lift.
- **Panel** (`box-shadow: 0 2px 4px rgba(34,20,10,0.06), 0 16px 40px -16px rgba(34,20,10,0.20)`): panels, the ID card, and the bottom nav dock — the deepest, softest lift on the board.

### Named Rules
**The Ink-Tinted Depth Rule.** Every shadow pairs a tight offset+blur with a longer, softer, more diffuse one, both tinted with the ink color rather than neutral black — never a zero-offset halo. Larger surfaces read thicker: panels carry more blur and reach further than chips, matching their visual weight.

## Shapes

Two radius registers, assigned by whether the element is interactive/status-bearing or a static container. Nothing in the system uses a hard, unrounded corner or an offset-without-blur "neobrutalist" shadow.

- **Fully rounded (999px / pill):** anything clickable or acting as a status marker — buttons, tags, the nav dock and its tabs.
- **Soft fixed radii, scaled to surface size:** static containers — preview tiles (10px), the stamp panel (12px), the general panel (14px), the boarding-pass ID card (16px, with its inset photo one step tighter at 8px — a nested element always steps down from its parent's radius, never matches or exceeds it).
- **Utility radius:** the keyboard focus-visible outline uses a small 3px radius of its own — a UI mechanic, not a content surface, so it sits outside the container scale above.
- **Signature detail:** the ID card carries a 1px dashed inset border (`inset: 14px`) evoking a boarding-pass perforation; the stamp panel carries a small crimson-tinted ring in its top-right corner evoking a customs stamp. Both are drawn with CSS pseudo-elements, not icon assets.

### Named Rules
**The Interactive-Pill Rule.** If it can be clicked, pressed, or read as a status tag, its corners go fully round (999px). If it only contains content, its corners take a smaller fixed radius proportional to its size. The two registers never mix on the same element.

## Components

### Buttons
- **Shape:** fully rounded (999px), `14px 28px` padding, 12px uppercase label text at `0.1em` tracking.
- **Solid** (`.pf-btn--solid`): ink background, panel-colored text, Row-tier shadow; hover mixes 12% amber into the ink fill. This is the board's primary call to action (hero "View Work", contact form submit).
- **Outline** (`.pf-btn--outline`): transparent fill, ink text, 1px line border; hover darkens the border to full ink. Used for secondary actions (hero "LinkedIn").
- **Disabled:** 55% opacity, press animation suppressed.
- **Press feedback:** every interactive element tagged `.pf-pressable` scales to 0.97 on `:active` (160ms ease-out) — the system's shared tactile response, independent of the section-entrance motion.

### Chips (Tags)
- **Style:** fully rounded, 12px/600-weight label text, `5px 12px` padding, Chip-tier shadow.
- **Accent variants:** amber/teal/crimson each tint the panel color at 16% via `color-mix`, paired with their own darker "-ink" text color for contrast. The **neutral** variant drops the shadow and tint entirely, using a flat panel background with a 1px line border instead — visually quieter, for secondary metadata (location, "coming soon" timelines, soft skills).

### Panels / Rows (signature)
- **Panel:** the base container for Work, Experience, and Capabilities lists — Warm Chalk background, 14px radius, Panel-tier shadow.
- **Row:** the panel's repeating unit — a grid of code/content/period/tag columns with a 1px bottom hairline, no divider after the last row. This is the board's core visual grammar; nearly every section resolves to a stack of rows inside a panel.

### Inputs / Fields (ContactForm)
- **Style:** borderless, transparent background, single 1px bottom hairline (`--pf-line`) — no boxed input anywhere in the system.
- **Focus:** the hairline shifts to amber (`200ms`, the system's shared ease-out curve); no glow or ring.
- **Error:** inline text in Crimson Ink below the field stack, not an inline field-level treatment.

### Navigation
- **Style:** a fixed, bottom-centered pill dock (`.pf-nav`, Panel-tier shadow, 1px line border) holding uppercase label-tier tabs. Tabs tint toward amber and darken to full ink on hover (desktop/hover-capable only); press scales to 0.96. No distinct "current section" state exists today — every tab renders identically regardless of scroll position.

### ID Card (signature)
Boarding-pass styling for the hero portrait: Bone White raised panel, 16px radius, a 3:4 object-fit photo, and a 1px dashed inset border standing in for a ticket perforation. Paired with a small uppercase caption below it ("[initials] · Boarding").

### Stamp (signature)
A raised panel (Row-tier shadow, 12px radius) with a customs-stamp ring drawn in the top-right corner via a crimson-tinted circle outline. Used twice: the About section's pull-quote (set in Display type at 21px/700) and the Capabilities Education block — both short, editorial statements rather than paragraphs.

## Do's and Don'ts

### Do:
- **Do** keep identity/status data (role, location, date, "most recent") as a tag chip beside a heading or a grid column next to it — never a caption stacked above.
- **Do** pair every shadow with both offset and blur, tinted with the ink color, scaled to the surface's size (chip < row < panel).
- **Do** use `flipInReveal()` (rotateX −14°, opacity 0→1, `expo.out`, 0.7s, 0.06s stagger) as the only section-entrance animation; keep hover/press micro-interactions (the WorkItem preview expand, `.pf-pressable` scale) as separate, local motion rather than a competing entrance style.
- **Do** cap display type at 96px/6rem and hold body measure to 65–75ch (`.pf-prose { max-width: 70ch }`).
- **Do** gate hover-only treatments behind `(hover: hover) and (pointer: fine)` so touch devices see a clean default state instead of a stuck hover.
- **Do** respect `prefers-reduced-motion`: `flipInReveal` drops to a 0.35s opacity-only cross-fade with no rotation and no stagger.

### Don't:
- **Don't** use a border-left or border-right heavier than 1px as a decorative device; dividers and rules are always a 1px hairline in Weathered Line.
- **Don't** compute or imply an "active/current" employment badge from date math; "Most Recent" is the only status claim, and it is true by list order alone, not by inference.
- **Don't** apply backdrop-blur as decoration anywhere inside `.portfolio-world`.
- **Don't** let the three enamel accents swap roles — amber never marks "settled," teal never marks "alert/contact," crimson never marks "most recent/featured."
- **Don't** stack a kicker or eyebrow caption above a heading; restructure the data into a tag chip or an adjacent grid column instead.
