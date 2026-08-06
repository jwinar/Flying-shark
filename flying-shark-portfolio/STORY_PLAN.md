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

## Opening / title sequence (not one of the 7 dated chapters)

Original landing scene used the Forbidden City gate photo — striking, but
it's specifically Qing-era imperial architecture, which put chapter-6
iconography in the chapter-1 slot as soon as the lineup became
chronological. Corrected: the landing page needs something grand *and*
dynasty-neutral, since its job is to represent "5000 years" as a whole,
not any one era.

**Decision: the Great Wall.** Unambiguously "China" worldwide, inherently
epic in scale, and — since it was begun under Qin and extended across Han
through Ming — it doesn't belong to a single dynasty the way the
Forbidden City does. Carries the "CHINA / 5000 YEARS / SCROLL TO ENTER"
title card and the zoom-toward-the-vanishing-point treatment (same
technique as the old gate scene: zoom toward where the wall disappears
into misty mountains, instead of zooming through a gap in a door).

The Forbidden City photo isn't discarded — it moves to Chapter 6 (Qing),
recaptioned for a mid-sequence beat instead of a title card. This swap
happens as one atomic change once the Wall asset exists, not before —
pulling the current opening before its replacement is ready would leave
the live site's first impression blank mid-deploy.

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
| 6 | Qing — the gate closes (1644–1911) | Imperial yellow fading to grey | The empire's last light — *(the Forbidden City gate photo relocates here from the old opening slot — see "Opening" below)*. |
| 7 | Modern → today | Cools into the site's living palette | The thread doesn't end. It's still being drawn — by you, scrolling. |

Chapter 7 is the hinge: color drains from cinematic-saturated into whatever
the portfolio's real palette becomes, so the transition into "Justin
Winartha, Data Analyst" reads as the thread arriving in the present, not a
hard cut between two unrelated websites.

**Epilogue — the thread, explained.** Added after Chapter 7, immediately
before the portfolio begins: a dedicated beat that names 红线 directly,
so a viewer who's been watching a red line drift through every chapter
without explanation finally gets told what it is and why it's there. Its
own video/image background (see prompt below), and — unlike the pinned
scroll-jack chapters — plays as a normal, unpinned scroll-through
section: after six-plus heavy cinematic beats, a quieter, calmer moment
reads as intentional pacing rather than more of the same. Replaces/
absorbs the old `PortfolioTransition.jsx` placeholder, which was already
gesturing at this idea ("One continuous thread") without ever explaining
it — being renamed `RedThreadScene.jsx` to match what it actually is.

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

**Status: infrastructure built, not wired in yet.** With Silk Road shipped
(every chapter now has real video, no placeholders left), this is the
right moment to start. Built and committed, not yet mounted on the live
page:
- `useAmbientAudio.js` — a context provider holding the global on/off
  state, persisted to localStorage so the visitor's choice survives a
  reload.
- `AmbientTrack.jsx` — per-scene component: takes a track `src` and the
  scene's existing `inView` state (reusing the same hook chapters
  already use for video lazy-loading), plays only when both the global
  toggle is on *and* the scene is actually in view, with a GSAP volume
  fade rather than an abrupt cut.
- `AudioToggle.jsx` — the floating speaker-icon button.

**Deliberately not wired into `ProjectDetail.jsx` yet**: mounting a
toggle button that controls zero actual tracks would ship a dead
control on the live site. Wiring happens once the first real track
exists, same asset-then-code sequencing as every video chapter.
**Next step**: tool preference confirmed — **Suno/Udio**. Still
proposing to start with the Gate/opening scene to validate the full
pipeline end-to-end (prompt, generation, trim/loop, wiring) before
generating all eight tracks.

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

**Chapter 2 (Qin), Opening (Great Wall), Qing relocation, and the
Epilogue: all four shipped in one batch** — all three video assets
arrived together. Build notes:

- **Applied the crossfade self-loop technique to all four videos,
  including redoing Chapter 1.** Chapter 1's clip happened to have a
  near-static camera, so a hard loop looked fine by luck; the Qin and
  Epilogue clips both have real camera/thread motion and would have
  shown a visible jump on a hard loop. Rather than judging case-by-case,
  built one reusable pipeline (trim → self-crossfade via ffmpeg's xfade,
  same clip fed as both inputs, tail blended into head → re-encode to
  MP4 + WebM + poster) and ran all four videos through it, including
  Chapter 1 retroactively, so every chapter gets the same seam-hiding
  treatment rather than relying on a clip happening to loop cleanly on
  its own. Verified frame-by-frame (extracted the exact loop-boundary
  frames and compared) that the blend is seamless, not just assumed.
- **Qin** (`QinScene.jsx`, rebuilt in place): bronze/lacquer terracotta-
  army video, the 秦 character kept as a faint (16% opacity) overlay
  rather than a bold graphic — reads as background texture, not a
  competing focal point. Thread bumped up from Chapter 1's faint/
  tentative treatment (opacity 0.32) to a more confident 0.5, matching
  the "unification" beat.
- **Opening** (`GateScene.jsx`, rebuilt around the Great Wall clip):
  carries the "CHINA / 5000 YEARS / SCROLL TO ENTER" title card, same
  zoom-toward-vanishing-point treatment as before, retargeted to where
  the wall recedes into the misty mountains.
- **Qing relocation** (new `QingScene.jsx`): the original Forbidden
  City gate photo and door-zoom treatment, moved out of the opening
  slot and recaptioned for its correct chronological beat ("The
  empire's last light. A gate begins to close.", QING · 1644–1911).
  Positioned directly after the still-unbuilt Silk Road scene for now,
  since Chapters 4 (Tang) and 5 (Song–Ming) don't have scene files yet
  — will move to its exact numeric slot once those exist. Thread here
  is toned down again (opacity 0.4) rather than continuing to thicken,
  gesturing at the "fraying through Qing's decline" arc from the plan,
  though a real frayed/broken stroke rendering is still a follow-up,
  not implemented yet.
- **Epilogue** (new `RedThreadScene.jsx`, replaces the old
  `PortfolioTransition.jsx` placeholder): plays unpinned, as planned —
  no scroll-jack, just a normal reveal-on-scroll-into-view. The video
  itself (a glowing red thread turning in darkness) *is* the thread, so
  no decorative Silk overlay on top of it. Copy names 红线 (Red Thread
  of Fate) directly and explicitly ties it back to what the viewer's
  been watching through every prior chapter.

Verified across desktop (1440x900), mobile (390x844), and a dedicated
`prefers-reduced-motion` pass (confirmed 0 `<video>` elements / 4
poster `<img>` fallbacks) — zero console/page/request errors in any
pass, including a route change into a case-study page.

**Known follow-up, not yet done:** all chapter videos currently mount
and start loading/playing on initial page load regardless of scroll
position, rather than lazy-loading as each chapter approaches viewport
(the performance goal stated earlier in this doc). Fine at 4 chapters;
should be addressed before Tang/Song–Ming add more video weight.

Chapters 3 (Han/Silk Road), 4 (Tang), and 5 (Song–Ming) remain — Silk
Road still has its original placeholder CSS content, Tang and Song–Ming
don't have scene files yet.

**Chapter 4 (Tang): shipped.** New `TangScene.jsx`, positioned after
Silk Road and before Qing (its correct chronological slot — unlike
Qing, which is still sitting out of place waiting on Tang/Song–Ming's
siblings). Thread pushed to its boldest yet (opacity 0.65) for the
"world comes to Chang'an" peak.

Two things worth recording from this one:

- **The source clip had a persistent sparkle/watermark icon** fixed in
  the same screen position across every frame (a UI overlay, not scene
  content — confirmed by cropping the same region at multiple
  timestamps and seeing it hadn't moved). Removed with ffmpeg's
  `delogo` filter rather than cropping the frame down, so the full
  composition survived. Worth checking every future clip for this
  before processing, not just Tang.
- **This clip needed a boomerang loop, not a crossfade.** Unlike the
  first three chapters' subtler motion, Tang's clip is one continuous
  ~10s dolly from a wide establishing shot to a close-up at the hall
  entrance — a genuinely different composition at the start vs. the
  end. A crossfade blend at that scale produced a visible double-
  exposure ghost, not a clean dissolve. Solved by playing the clip
  forward then reverse (`reverse` filter + `concat`), which is
  mathematically guaranteed seamless for any camera move since the
  reverse always lands exactly back on frame one — confirmed by
  diffing the actual start/end frames afterward, not just assuming.
  Costs 2x duration (loop is now ~19s instead of ~10s), acceptable for
  an ambient background. **Rule going forward**: check whether a clip's
  motion is subtle (near-static or gentle drift → crossfade loop is
  fine) or a large continuous move (→ needs boomerang) before picking
  a technique, rather than defaulting to crossfade every time.

**Performance note escalating from "known follow-up" to a real
priority**: with 5 videos now mounted simultaneously from page load,
autoplay/pause behavior between chapters got visibly less predictable
in testing (videos scrolled far off-screen sometimes stayed paused at
timestamp 0 until actually scrolled to, confirmed harmless once
verified against the real element rather than a stale scroll-distance
assumption, but the underlying "all videos load immediately regardless
of position" issue is real and will only get noisier at 7-8 chapters).
Should be addressed before adding Song–Ming and rebuilding Silk Road.

## Fixed: lazy-loading + Wall video quality

**Lazy-loading**: shipped. New `useInView` hook (IntersectionObserver,
800px preload margin) — a chapter's `<video>` now only mounts once it's
actually approaching the viewport, otherwise it renders the lightweight
poster `<img>`. One real bug surfaced while building it: passing an
inline `{ rootMargin: '0px' }` object as the hook's argument put a new
object reference in the effect's dependency array every render, which
left GateScene's observer racing its own re-creation and never
resolving — confirmed via direct DOM inspection that the container was
correctly positioned (not a layout bug) before finding the real cause.
Root cause went deeper than the object-identity issue, too: a
scene reached only by scrolling gets many IntersectionObserver
recheck opportunities for free from the scroll events themselves, but
Gate — always visible on load, zero required interaction — has no
guaranteed recheck if a user doesn't move the mouse or scroll right
away. Since eager-loading is simply *correct* for the one scene that's
always the first thing on screen, removed lazy-loading from Gate
entirely rather than fighting the race, and fixed the hook itself
(primitive `rootMargin` string, not an object) for every other scene.
Verified programmatically, not just visually: 1 video / 4 posters at
rest (Gate eager, rest lazy), 5 videos / 0 posters after a full scroll.

**Wall video quality**: user directly flagged the opening scene as
"almost like 480p." Diagnosed properly instead of guessing — diffed a
cropped region of the shipped encode against the original upload at
matching coordinates and found them nearly identical, so compression
wasn't the culprit. Real cause: the source is 1366x768, and Gate zoomed
it 1.4x during scroll (every other chapter uses a gentler 1.15-1.18x);
on a 1920px-wide screen that's the source stretched ~2x past native
resolution. Fixed by dropping Gate's zoom to 1.2x and re-encoding the
source at 2200px wide (lanczos upscale + mild unsharp mask) for real
headroom, not just a quick CRF bump that wouldn't have touched the
actual resolution ceiling.

**Chapter 3 (Han/Silk Road): shipped.** New video in `SilkRoadScene.jsx`
(rebuilt in place, kept the 丝绸之路 / THE SILK ROAD title treatment from
the original placeholder). This was the last scene still on the
original generator script's flat CSS — every chapter is now a real
video. Thread continues its arc (opacity 0.55, between Qin's 0.5 and
Tang's 0.65).

Two things worth recording:

- **Same watermark, same fix.** This clip had the identical sparkle
  icon in almost the identical position as Tang's — same `delogo` box
  coordinates worked with only a marginal check first. Two-for-two
  evidence that Canva's watermark position is consistent enough to
  reuse coordinates as a starting guess, though still worth a quick
  crop-and-check before trusting it blind.
- **Boomerang chosen preemptively this time, and file size needed a
  second pass.** The clip's motion looked like a moderate continuous
  push-in across the full 10s (not Chapter 1's near-static drift, not
  quite Tang's dramatic wide-to-close dolly either) — ambiguous enough
  that, per the rule from the Tang writeup, defaulted to boomerang
  rather than risk a crossfade ghost. That was the right call, but the
  first encode at the by-then-standard 2200px width came out to 11MB —
  this scene's fine sand-texture detail across the *entire* frame
  compresses far less efficiently than Tang's cleaner architectural
  surfaces, so the same width/CRF recipe doesn't transfer uniformly
  across content types. Dropped to 1920px width and a higher CRF
  (27/36 instead of 21/28), landing at a much more reasonable 4.6MB/
  3.5MB without a visible quality loss. **Rule added**: check the
  actual output file size before shipping, not just the visual crop —
  a recipe tuned on one clip's content isn't guaranteed to transfer.

## Fixed: case-study navigation crashing the page ("broken cursor")

User report: clicking into a project from Selected Work left the
cursor broken. Reproduced with a scripted browser session rather than
guessing from the symptom, and the real failure was a React crash, not
a cursor bug: `NotFoundError: Failed to execute 'removeChild' on
'Node'`, thrown when the route switched from the historical-intro
branch to `ProjectCaseStudy`.

Root cause: GSAP ScrollTrigger's `pin:true` wraps every pinned scene
(Gate, Landscape, Qin, Silk Road, Tang, Qing, Modern, plus the
red-thread epilogue) in a synthetic "pin-spacer" wrapper it inserts
into the DOM directly — outside React's tracking. Routing to a case
study unmounts all of those pinned scenes in one shot; React's
recorded parent-child structure no longer matches what GSAP actually
built, and `removeChild` fails partway through, leaving the page torn
down (visually: the custom cursor stops updating, because the app
crashed under it).

**Fix applied, per direction**: removed project navigation entirely
rather than patching the unmount conflict. `PortfolioWork.jsx` no
longer wraps entries in `<Link>` — clicking a project is now inert.
Verified with a scripted click on the Work section: no URL change, no
console errors. The `/projects/:id` route and `ProjectCaseStudy` still
exist and would still crash if reached directly (bookmark, back/
forward, manual URL) — that path is just no longer reachable through
normal site navigation. A real fix for the underlying pin/unmount
conflict is out of scope for now.

**Explicitly deferred, not built yet**: an expandable hover bar on
each Work entry showing a project screenshot, to replace the removed
link as the way to preview a project. Noted here so it isn't lost —
build in a future session, not this one.

## Chapter 7 (Modern): shipped — the last historical chapter is built

`ModernTransition.jsx` rebuilt in place from the original generator
script's flat SVG skyline placeholder to a real video, following the
same mediaRef/vignetteRef/textRef pattern as every other chapter
(useInView lazy-load, `prefers-reduced-motion` poster fallback, GSAP
pin-scrub for scale/text/vignette). Every chapter is now real video —
nothing left on placeholder CSS except the epilogue, which was always
meant to be calmer/unpinned by design.

The clip: a drone descent over a contemporary skyline that drifts from
warm dusk into full blue-grey night as building lights switch on —
which happens to be a near-perfect literal match for the chapter's
color-arc requirement ("cools into the site's living palette") without
needing any grading. Thread continues its arc at opacity 0.5/thickness
2 — steadying again after Qing's fraying, foreshadowing (not yet
literally building) the "thread becomes structural" idea from the red
thread section for a future pass.

Technical notes:
- **Watermark removed at the same coordinates as Tang/Silk Road**
  (`delogo=x=1120:y=548:w=120:h=120`) — third clip in a row where
  Canva's sparkle icon lands in materially the same screen position.
  Confirmed clean via a crop-and-check before trusting it, same as
  always, but this is now a reliable starting guess, not a coincidence.
- **Boomerang loop, correctly predicted from the source motion**: this
  clip isn't just a camera move, it's a full lighting-state change
  (dusk → night), so a crossfade was never going to work — start and
  end frames don't even remotely match in color. Boomerang plays it
  forward then reverses it, landing on a perfect loop point (dusk →
  night → dusk) that also happens to read as an intentional "the city
  never stops" beat rather than an obviously mechanical loop. Verified
  seamless via a difference-blend of the seam frames (see rule from
  Tang/Silk Road) — near-black, i.e. no visible discontinuity.
- **1920px width, CRF 26/34** (mp4/webm) — first pass at CRF 23 for
  the mp4 landed at 6.2MB, too heavy per the file-size rule from Silk
  Road; stepping to CRF 26 dropped it to 3.9MB with no visible quality
  loss on this content (glass/architecture compresses cleanly, closer
  to Tang than to Silk Road's sand). webm landed at 2.9MB.
- Verified end to end with a scripted browser pass: no console errors,
  scene renders correctly at 1440×900 and 390×844, and
  `prefers-reduced-motion` correctly renders zero `<video>` elements
  (poster-only fallback engaged).

Only Chapter 5 (Song–Ming) remains fully unbuilt — no scene file
exists for it yet.
