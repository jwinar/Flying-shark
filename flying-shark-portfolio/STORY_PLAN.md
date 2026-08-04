# "5000 Years of China" — Cinematic Intro: Story & Elevation Plan

Working plan for turning the current 6-scene placeholder intro into an actual
short scroll-driven film. Not for implementation in one pass — we build it
chapter by chapter, each chapter gated on real imagery before it's coded.

**Tooling**: video assets generated via Canva (Magic Media), free tier —
limited monthly credits, short clips (a few seconds), consumer-grade
control. Prompts are written as plain descriptive language rather than
professional-tool camera jargon, and clips are generated one chapter at a
time so credit usage and quality can be assessed before committing to
video for all seven.

## The big creative shift (as of this doc)

Original direction was minimal/editorial (black background, restrained gold
accent, quiet fades) — a reaction to the site feeling generic. New direction,
per explicit feedback: **rich, saturated, interactive, "feels like a movie."
Not pure black.** These aren't in conflict if we're deliberate about where
each mode lives:

- **The historical intro is the movie.** Bold, saturated, a distinct color
  identity per era — closer to *Hero* (2004, Zhang Yimou) than to a SaaS
  landing page. That film's whole device — each chapter told in one dominant
  color (red, blue, white, green) — is almost exactly the tool we need for
  "5000 years, told in a few major beats." Proposing we borrow it directly:
  **each era gets its own color chapter**, not a shared dark theme with a
  different photo.
- **Pure black stops being the default canvas** and becomes punctuation —
  the beat *between* chapters where the screen holds still and dark for a
  moment before the next color floods in. Contrast, not wallpaper.
- **Open question**, flagged below: does "rich color, not pure black" extend
  into the resume/portfolio half of the site too, or does that half stay
  closer to restrained-and-legible (a recruiter reading your experience
  section benefits from calm; the history section benefits from spectacle)?
  I have a recommendation below but want your call before touching it.

## Draft chapter lineup

Not exhaustive history — major beats only, per your brief. Seven chapters,
each short. Cut/merge/reorder freely; this is a first draft to react to.

| # | Era | Color identity | The beat |
|---|-----|----------------|----------|
| 1 | Origins — Yellow River | Bone white / ochre earth | Out of myth and river silt, the first marks are made. |
| 2 | Qin — unification (221–206 BCE) | Bronze / lacquer black + seal red | One ruler, one script, one wall. China becomes a single word. |
| 3 | Han — the Silk Road opens | Deep amber / gold | The thread leaves China for the first time. |
| 4 | Tang — the golden age (618–907) | Vermillion + jade + gold | The world comes to Chang'an. *(Tang china is famously the most colorful era — literally the "sancai" three-color glaze — strongest chapter for going bold.)* |
| 5 | Song–Ming — ink & invention | Celadon blue-green / ink black-white | Paper, powder, print, porcelain, and a fleet that reaches Africa. |
| 6 | Qing — the gate closes (1644–1911) | Imperial yellow fading to grey | The empire's last light — *(this is where the Forbidden City gate photo already lives)*. |
| 7 | Modern → today | Cools into the site's living palette | The thread doesn't end. It's still being drawn — by you, scrolling. |

Chapter 7 is the hinge: color drains from cinematic-saturated into whatever
the portfolio's real palette becomes, so the transition into "Justin
Winartha, Data Analyst" reads as the thread arriving in the present, not a
hard cut between two unrelated websites.

## The red thread, made to mean something

Right now it's a decorative SVG squiggle with a color, nothing more.
Proposing we make it the film's actual throughline, tied to something real:
**红线 (hóngxiàn), the Red Thread of Fate** — Chinese folklore's invisible
red cord binding two people or events across time to an inevitable meeting.
For a portfolio, that's not just thematically apt, it's *literally the
pitch*: 5000 years of history, one continuous thread, and it leads here, to
a specific person, today.

Concrete ways to earn that instead of just asserting it:
- **The thread persists across every chapter** as the one constant while
  color/imagery around it changes completely — visual proof of continuity.
- **It changes character with the era**: a faint uncertain line in Chapter 1,
  thickens into a confident trade route by Han/Tang, frays and thins through
  Qing's decline, and in Chapter 7 it stops being a decorative path and
  becomes something structural — the underline beneath your name, or the
  line the cursor traces, or the border of the contact form. The metaphor
  completes itself instead of just fading out.
- **Make it reactive, not pre-baked.** There's already an unused
  `useScrollVelocity` hook sitting in the codebase from the very first
  generator script. Wiring the thread's amplitude/speed to actual scroll
  velocity — whip and shudder when you scroll fast, settle and steady when
  you scroll slow — turns it from a decoration into something that responds
  to *you*, which is a real "interactive, not just pretty" upgrade.
- Optionally, the thread's cumulative drawn length doubles as a progress
  indicator for the whole intro — decoration and wayfinding in one element.

## Replacing the flat CSS backgrounds — sourcing workflow

Since I can't generate images myself (no image-gen tool in this
environment — only Bash/code), here's the loop for each chapter:

Matches the three-part production process named directly: **generate the
creative concept → produce the background asset → code the interactive
element.** Split by who owns each part:

1. **Creative concept (me):** the chapter's narrative beat (one or two
   lines, film-caption length) plus a **detailed generation prompt** —
   image or video — matched to that chapter's color identity and mood,
   consistent with the Forbidden City gate's style.
2. **Asset production (you):** generate it with your video/image tool, or
   supply your own footage/photo/art.
3. **Interactive coding (me):** build the scene — compression/looping,
   grading, parallax, thread integration, caption timing, scroll-trigger
   behavior — same rigor as the Gate scene, verified with real scroll
   testing before it ships.
4. Repeat for the next chapter.

This keeps each phase small and reviewable instead of me guessing at seven
images' worth of art direction in one shot.

**Video vs. still images — revised.** Per direction: "high-end,
scroll-driven cinematic" sites, video assets are the default medium, not
a one-chapter exception. Updated approach:

- **Default per chapter: a short looping background video** (drifting
  mist, flickering light, a river's current, dust in the air) rather than
  a static graded photo. The Gate scene's Ken-Burns-on-a-still technique
  becomes the *fallback* for any chapter where video isn't feasible, not
  the default.
- **I still can't generate video** — same constraint as images, just a
  different tool on your end (Runway, Kling, Luma, Pika, Sora, etc.). Same
  workflow as before: I write a chapter's narrative beat + a video-generation
  prompt (motion described explicitly, since video prompts need that —
  camera drift, what moves in-frame, loop-ability), you generate it, I
  build the scene around it.
- **What I own on the technical side once you hand me a clip:**
  compressing/transcoding it (I have ffmpeg available) into a web-safe
  loop, muted + `playsinline` + `autoplay` (required for it to play at all
  on mobile), a poster-frame fallback image for the instant before the
  video loads and for `prefers-reduced-motion` visitors, and lazy-loading
  each chapter's video so we're not shipping seven video files on first
  paint — only the chapter someone's about to scroll into loads.
- **Practical limit**: quality video generation is much more expensive
  (time, generation credits, iteration) than stills. Suggest we don't
  commit to "all 7 in video" as a hard rule up front — generate Chapter 1,
  see how it looks and how much friction it takes, and decide chapter-by-
  chapter from there rather than over-promising now.

## Music: verdict

Not over the top **if** it's ambient texture, not songs, and never
autoplays with sound. Concretely:
- **Off by default**, one small toggle (a speaker icon, roughly where a
  "skip intro" control would live) — browsers block autoplay-with-sound
  anyway, so this isn't optional, it's the only way it can technically work.
- **Texture, not melody** — a low drone/instrument bed per chapter (guqin
  for the ink-and-invention era, a caravan-bell/wind texture for the Silk
  Road, etc.), short and seamlessly loopable, so it doesn't get grating on a
  slow scroll or a repeat visit.
- **Sourcing** has the same problem as the images: I can't generate or
  license audio. Options are royalty-free ambient libraries (Free Music
  Archive, YouTube Audio Library — check license terms per track) or an AI
  music tool (Suno/Udio) the same way you generated the gate photo.
- Treat as a **later phase** — get the visuals and thread working first;
  audio is additive polish, not a blocker for chapters shipping.

## Cinematic-language toolkit ("feel like a movie," concretely)

Techniques that read as "film," not "web page," regardless of the specific
reference video I couldn't watch:
- **Letterboxing** — thin black bars top/bottom during the most cinematic
  beats (already common in scroll-films; instantly reads as "movie" over
  "website").
- **Chapter cards** — a brief held moment between eras: color fades to
  black, a small title card (era name + date range, like a film's on-screen
  location/date caption) holds, then the next chapter floods in. Gives the
  color-chapter structure an actual beat instead of one long scroll-blur.
- **Grain/texture overlay** — a very subtle animated film-grain layer over
  the historical scenes (cheap to do, disproportionately effective at
  killing the "flat digital" feeling).
- **Camera-language easing** — motion that reads as a dolly/pan/rack-focus
  (slow, weighted eases) rather than the uniform "fade + rise 20px" every
  section currently shares.
- **Credits-style type reveals** — titles that stagger in character-by-
  character or word-by-word like film titles, rather than a block fade.
- A persistent, unobtrusive **"skip to portfolio"** control from the first
  frame — keeps the spectacle from costing you the recruiter who's in a
  hurry (this was in the original design critique; still true here).

## Longer idea list (beyond the intro)

- **First-visit-only intro**: play the full film on a visitor's first load
  (remember via localStorage), offer a quick "skip" on repeat visits —
  resolves spectacle-vs-conversion without cutting the spectacle.
- **A living year-counter** ticking through the date range as you scroll,
  making "5000 years" tangible rather than asserted.
- **Parallax depth layers** (fore/mid/background moving at different scroll
  speeds) instead of single flat image planes per scene.
- **Calligraphy-stroke title reveals** — extend the existing SVG stroke-draw
  technique already built for the silk thread to the actual hanzi titles
  (秦, 丝绸之路, etc.), so characters look brush-painted on scroll instead of
  fading in.
- **A morphing dynasty map** — SVG-animated outline of China's changing
  borders across eras as a recurring visual anchor.
- Work section thumbnails/imagery (still open from the earlier punch list,
  unrelated to the intro but worth not losing track of).

## Decisions locked

1. **Color scope**: intro goes fully bold/saturated; portfolio half stays
   warmer-than-black but calm/legible. Confirmed.
2. **Chapter count**: proceeding with the 7-chapter lineup above.
3. **Music**: yes — ambient, off-by-default, built as a later phase after
   visuals/thread are working.
4. **Reference video**: unresolved — couldn't fetch/watch it (blocked +
   no video capability). Not blocking Phase 1; revisit if a specific
   technique from it still needs to be nailed once we're building.

## Status

**Chapter 1 — Origins / Yellow River: shipped.** Canva-generated video
(5.7s, trimmed/compressed to MP4 + WebM, poster-frame fallback) now
plays as LandscapeScene's background, replacing the placeholder CSS
mountains. Scroll-tied zoom + vignette + title fade, matching the Gate
scene's treatment. Faint red thread present per the "tentative in
Chapter 1" arc.

Build notes for future chapters:
- **Ship both MP4 (H.264) and WebM (VP9) sources, always.** Discovered
  the hard way — some Chromium builds (including the one in this test
  environment) can't decode H.264 at all and silently report
  `NETWORK_NO_SOURCE` with no error event, so the video just never
  plays. A `<source>` fallback isn't optional polish here, it's load-
  bearing.
- Canva's free-tier output (1366x768, ~5.7s, ~3MB H.264) held up well —
  no upscaling needed; re-encoding at native resolution kept quality
  while cutting the shipped MP4 to ~1.7MB.
- Straight hard loop (no crossfade) was fine for this clip because the
  first/last frames were already near-identical (camera essentially
  static, only water/mist texture animates). Won't assume this holds
  for every future clip — check frame 1 vs. last frame each time before
  deciding a crossfade is unnecessary.
- Text legibility over video can't rely on a fixed text color choice —
  a gold overline that read fine over the Gate's dark photo was
  invisible against this chapter's bright golden sky. Fix used: a soft
  radial dark backdrop behind the text block itself, so contrast holds
  regardless of which part of the looping video is behind it at any
  moment. Apply this pattern by default for future chapters rather than
  re-diagnosing per chapter.

Chapter 2 (Qin) next — waiting on the video asset.
