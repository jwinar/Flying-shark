# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: hiring managers/recruiters evaluating Justin for Data Analyst roles, arriving via a resume link, LinkedIn, or a job application. Secondary (confirmed, not incidental): broader professional/business contacts — potential collaborators or partners for Justin's side ventures (Amazon FBA, Southeast Asia e-commerce/Shopee, iOS app development). The site is explicitly meant to serve both audiences, not job-search alone.

## Product Purpose

A personal portfolio that opens with a cinematic, scroll-driven "5000 Years of China" historical journey before transitioning into a standard data-analyst portfolio (About / Experience / Work / Contact). Purpose: differentiate Justin from templated resume sites, demonstrate technical and creative range (custom React/GSAP scroll-film with a full video/audio production pipeline) while presenting his professional data-analyst background and credentials, and route interested visitors to contact him. Success is a visitor who remembers the site, understands both his data-analyst credentials and his broader range, and reaches out via the contact form or LinkedIn.

## Positioning

No competing data-analyst candidate's portfolio can truthfully claim the same mechanism: a history-to-personal narrative device (红线, the Red Thread of Fate) built as a fully custom scroll-driven film — eight hand-produced video chapters with era-specific color identities and ambient audio, wired with production-grade scroll/lazy-load/accessibility engineering — landing on his actual resume. It stands as evidence of the same rigor he names from his night-audit background (reconciling hotel revenue to the dollar) applied to an entirely different medium.

## Operating Context

Visitors typically arrive first-time via a resume link, LinkedIn, or a job application — often in a recruiter's hurry, which is why a persistent "skip to portfolio" affordance and a first-visit-only intro are part of the design intent. The site is a single-page React app (`react-router` routes for `/` and `/projects/:id`). Case-study navigation into individual projects is currently disabled site-wide after a GSAP pin-spacer/React unmount crash (`PortfolioWork.jsx` no longer links out); the route and `ProjectCaseStudy` component still exist and would still crash if reached directly. Contact happens through a Web3Forms-backed contact form (`ContactForm.jsx`, requires `VITE_WEB3FORMS_ACCESS_KEY`, currently unset per `.env.example`) or the linked LinkedIn profile.

## Capabilities and Constraints

- Full cinematic intro: Great Wall opening + 7 historical chapters (Origins, Qin, Silk Road/Han, Tang, Song–Ming, Qing, Modern) + Red Thread epilogue, each with produced video (mp4+webm+poster) and ambient audio, GSAP ScrollTrigger pin-scrub, crossfade audio handoff between chapters, and `prefers-reduced-motion` poster fallback throughout.
- The intro is functionally complete (per `STORY_PLAN.md`'s status log) but **confirmed still open to structural or creative change** — it is not to be treated as a locked deliverable that future work must route around.
- Case-study navigation (`/projects/:id`) is intentionally disabled after a real crash (`removeChild` failure from GSAP's pin-spacer DOM conflicting with React's unmount). A real fix for the underlying pin/unmount conflict is out of scope until revisited.
- Work section has a hover-reveal preview bar (desktop/hover-capable only, `WorkItem.jsx`) with placeholder "Preview coming soon" tiles — real project screenshots don't exist yet.
- Contact form fails gracefully (points to LinkedIn) when `VITE_WEB3FORMS_ACCESS_KEY` is unset.
- Only 3 portfolio entries exist today: China / 5000 Years (the intro itself), JustTalk (2014 Android/Firebase app), TravelBiz (2014 WordPress site).
- `personal.js` content is real, confirmed professional history — not to be fabricated, embellished, or extended without the user's input.

## Brand Commitments

- Name: Justin Winartha. Professional headline: Data Analyst. Tagline: "Grounded in critical thinking. Guided by integrity."
- Portfolio half: dark/warm-black canvas with a gold accent. Intro half: fully saturated, one dominant color identity per era (e.g. bronze/lacquer black + seal red for Qin, vermillion + jade + gold for Tang — full chapter-color table in `flying-shark-portfolio/STORY_PLAN.md`).
- Established conventions: 秦-glyph favicon; one faint seal-character overlay per intro chapter (full character list in `STORY_PLAN.md`).
- Voice: first-person, understated, ties his hospitality/night-audit background to the data-analyst identity rather than generic resume language.

## Evidence on Hand

- `flying-shark-portfolio/src/data/personal.js`: confirmed work history, education, certifications, skills, LinkedIn.
- `flying-shark-portfolio/public/assets/images/justin-portrait.jpg`: real portrait photo.
- `flying-shark-portfolio/public/assets/videos/*` and `/audio/*`: all 8 intro chapters' video and ambient audio already produced and wired.
- No project screenshots exist yet for Work section entries — must not be faked; placeholders explicitly read "Preview coming soon."
- `flying-shark-portfolio/STORY_PLAN.md`: a detailed running build log and decision record for the intro's creative direction and production history — treat as authoritative context before proposing changes to it.

## Product Principles

1. Prove range through craft, not claims — the intro's production rigor (verified seamless loops, accessibility passes, real scripted QA) is itself part of the pitch, not just its visuals.
2. The in-a-hurry recruiter and the spectacle-seeking visitor are both real users; never let one path block the other.
3. Never fabricate evidence — no invented testimonials, screenshots, or metrics; placeholders stay honest until real assets exist.
4. Ship dual codec sources and accessibility fallbacks by default for any new media (mp4+webm, poster frames, `prefers-reduced-motion`), matching the pattern already proven across all 8 chapters.
5. Preserve confirmed personal/professional facts exactly; only Justin can change his own history, titles, or dates.

## Accessibility & Inclusion

`prefers-reduced-motion` is a confirmed, verified commitment across every intro scene (video replaced by poster `<img>`, checked per chapter's build notes). No other formal accessibility standard has been confirmed as a requirement.
