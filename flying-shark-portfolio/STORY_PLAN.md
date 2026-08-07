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

## Audio: first track shipped, pipeline validated end-to-end

First Suno track ("Dawn Over Ancient Stone") delivered and wired into
the Gate scene, validating the full pipeline the earlier infrastructure
was built for. Concretely:

- **Trimmed and looped.** Source was a 4.7-minute full generation, not
  a short loop — sampled a steady 52s window from the mid-section
  (avoided both the busier melodic intro and a loud swell near the
  tail, found by scanning RMS/peak levels across the track rather than
  guessing). Made it loop seamlessly the same way the videos do:
  self-crossfade, blending the tail 3s into the head 3s so the native
  `<audio loop>` restart lands on already-blended material instead of
  a hard cut. Verified by concatenating two copies and inspecting the
  waveform at the seam — continuous, no gap or click.
- **Loudness normalized** (`loudnorm`, -20 LUFS target) and encoded to
  a single 128kbps mp3 (~785KB for 49s) — one file is enough here,
  unlike video's mp4-and-webm requirement, since browser mp3 support
  doesn't have an equivalent codec gap.
- **Wired**: `App.jsx` now wraps the router in `AmbientAudioProvider`;
  `AudioToggle` mounts once in `ProjectDetail`'s historical-scenes
  branch; `GateScene` renders an `AmbientTrack` pointed at the new
  file.

**Real bug found and fixed while wiring this up** — the same failure
mode as the original Gate lazy-loading race, in a new hook. `AmbientTrack`
needs to know when its scene scrolls in and out of view (not just once,
like the video lazy-load hook — audio has to fade back out when you
scroll away), so it needed a new bidirectional hook, `useInViewport`.
First version observed with `IntersectionObserver` and trusted
`entry.isIntersecting` directly — and hit the identical race documented
under the Wall/lazy-loading fix: for a scene that's already on screen
at mount with no scroll having happened yet, the observer's first
callback reported `isIntersecting: false` in this environment, and
nothing ever nudged it to recheck, so the audio toggle looked broken
(enabled state flipped, `aria-pressed` correct, but the `<audio>`
element stayed paused at volume 0 no matter how long you waited).
Confirmed with a scripted reproduction that polled the audio element's
actual `paused`/`volume` state after enabling — stayed stuck, never
once played.

Root cause this time was narrower than "trust the wrong first value":
even seeding state with a synchronous `getBoundingClientRect()` check
before attaching the observer wasn't enough, because the observer's
own first callback fired shortly after and overwrote the correct value
with its incorrect one. **Fix**: stopped trusting `entry.isIntersecting`
from the callback at all — the observer is now used purely as a signal
that something changed (scroll, resize), and the actual boolean is
always derived from a fresh `getBoundingClientRect()` measurement taken
at callback time. Verified with the same scripted approach: audio now
reliably fades in on enable, and fades out + pauses a few chapters
later once scrolled out of the Gate scene's viewport.

**Next step**: six chapters plus the epilogue still have no track.
Same one-clip-at-a-time approach as the videos — generate, hand over,
I trim/loop/wire — rather than committing to all eight up front.

## Chapter 5 (Song–Ming): shipped — every chapter now built

New `SongMingScene.jsx`, wired into `ProjectDetail.jsx` between Tang
and Qing (chronologically correct slot). All seven historical chapters
plus the epilogue are now real, built scenes — nothing left unbuilt.

The clip: a slow lateral pan/push across a celadon-porcelain-and-ink
still life — teal vases, handmade paper, an armillary sphere, a
half-unrolled ink-wash landscape scroll with a red seal. Landed almost
exactly on brief without needing any color grading; the muted
blue-green/black-white palette does the "calm exhale after Tang" job
on its own. Thread continues its arc at opacity 0.58/thickness 2.1 —
just past Tang's 0.65 peak, starting the taper toward Qing's 0.4
fraying, rather than dropping straight from peak to decline.

One new technical wrinkle, worth recording since it'll recur:

- **Watermark removal needed a tighter box than the reused-coordinates
  default for the first time.** The standard `delogo=x=1120:y=548:
  w=120:h=120` box (working unmodified across Tang, Silk Road, Modern)
  left a visible smeared blur patch here — this clip's camera pans
  onto a highly-textured area (a curved rolled scroll edge) right
  where the watermark sits, and `delogo`'s directional-interpolation
  reconstruction can't fake that kind of detailed geometry the way it
  fakes flat sky or glass. **Fix**: measured the actual icon bounds
  directly (cropped candidate boxes from a clean frame and iterated
  until the icon was fully contained with minimal margin) instead of
  reusing the looser default, landing on a much tighter `x=1140:y=565:
  w=100:h=100`. Confirmed clean on the busiest frame before
  committing to the full encode. **Rule added**: the reused watermark
  coordinates are a good starting guess, not a guarantee — always
  crop-check against the busiest frame in the clip (not just frame 0),
  and re-measure a tighter box when the background there isn't flat.
- Same boomerang-loop call as Tang/Modern (large continuous pan, not a
  static drift) — verified seamless via the same seam-diff check.
  1920px width, CRF 25/33, landed at 3.2MB/1.6MB without a second pass
  needed this time.
- Verified end to end with a scripted browser pass at 1440×900 and
  390×844, plus `prefers-reduced-motion` (zero `<video>` elements) —
  zero console errors, and confirmed the chapter lands in the correct
  chronological position between Tang and Qing.

## Consistency pass: one seal-character per chapter, everywhere

User feedback: Chapter 2 (Qin)'s giant faint 秦 character — fading in
from invisible to a soft translucent glyph centered behind the text,
then getting swallowed by the darkening vignette — read as "great,"
and asked for the same treatment on every chapter rather than just
one. Before touching code, actually checked what existed: only Qin had
this pattern (`charRef`, `gsap.set` to opacity 0/scale 0.85, tweened to
opacity 0.16/scale 1 partway through the pinned scroll). Silk Road had
a *different* treatment — a compact two-line title block ("丝绸之路 /
THE SILK ROAD") that only fades out, never in — which is almost
certainly what the user was actually pointing at ("3rd chapter" by
casual scroll-order counting: Gate, Landscape, Qin = 3rd), even though
the underlying code differs from what they described. Rather than
guess further, standardized every chapter on the one pattern that
matches the "appears then disappears" description (Qin's), including
folding Silk Road's old title into it instead of running two systems.

One seal character per scene now, same animation, same position
(`top:46%, left:50%`, `clamp(160px,34vw,460px)`), same fade-in/scale
choreography, colored to each chapter's existing palette:

| Scene | Character | Meaning |
|---|---|---|
| Gate (opening) | 城 | wall / fortress |
| Ch1 Origins | 源 | origin / source |
| Ch2 Qin | 秦 | (unchanged — the original reference) |
| Ch3 Silk Road | 丝 | silk — replaces the old title block |
| Ch4 Tang | 唐 | the dynasty name |
| Ch5 Song–Ming | 墨 | ink |
| Ch6 Qing | 清 | the dynasty name |
| Ch7 Modern | 今 | now / present |

Epilogue (`RedThreadScene`) deliberately excluded — it already names
红线 directly in its own overline, isn't pinned/scrubbed like the other
eight scenes, and doesn't need a third way of saying the same thing.

Verified with a scripted scroll through all eight scenes at the
scroll-fraction where Qin's own glyph is known to read well (confirmed
by screenshotting each one), plus mobile and `prefers-reduced-motion`
passes — zero console errors throughout.

## Second audio track: Tang, and multi-track handoff confirmed working

"Chang'an at Golden Hour" trimmed/looped/wired into `TangScene.jsx`
the same way as the Gate track: scanned RMS/peak levels to find a
steady 52s window (90–142s, avoiding a loud swell around 50s and a
quiet fade tail around 150s), self-crossfaded the loop seam, loudnorm
to -20 LUFS, 128kbps mp3.

This is the first chapter besides Gate to get a track, so it's also
the first real test of **multiple simultaneous `AmbientTrack`s
handing off to each other** rather than just one turning on/off.
Wired the same way: `useInViewport` (the bidirectional hook, not the
one-shot `useInView` already used for the scene's video lazy-load) so
the track can fade both in and out as Tang scrolls in and out of view.
Verified end to end with a scripted pass — enabled audio at Gate,
confirmed Gate's track was the only one playing; scrolled to Tang,
confirmed Gate faded out and Tang faded in; scrolled past Tang to
Qing, confirmed both tracks paused at volume 0. Zero console errors.

Five chapters plus the epilogue still need a track.

## Fixed: three chapters were visibly softer than the rest

User flagged that some chapters looked lower quality than others. Rather
than guess which, checked every shipped video's actual resolution and
bitrate, then cross-referenced against each scene's GSAP zoom to compute
the real on-screen stretch factor (native width vs. a 1920px viewport,
times the zoom scale) — the same root-cause math behind the original
Wall fix. Three chapters were still on their original pre-Wall-fix
encodes, all upscaled well past 1.6x on a typical screen:

- **Origins (ch1)**: native 1366px, zoom 1.18x → ~1.66x stretch.
- **Qin (ch2)**: native 1366px, zoom 1.15x → ~1.62x stretch, plus a
  low original bitrate (~1Mbps) compounding it.
- **Tang (ch4)**: native 1280px, zoom 1.15x → ~1.73x stretch — almost
  exactly the Wall's original ratio.

Confirmed with real-browser screenshots at 1920×1080 (not just raw
frame inspection) before touching anything, comparing fine detail
(water ripples, armor edges, banner embroidery) against an already-fixed
chapter (Silk Road) at the same viewport size. All three were visibly
soft by that comparison; re-verified after the fix the same way.

The original source clips were still available from earlier in this
conversation, so re-ran each through the now-standard pipeline instead
of just re-compressing the already-encoded (lossy) shipped files:
1920px lanczos upscale + light unsharp, same loop technique each
chapter already used (Origins and Qin: self-crossfade — near-static
water/smoke, no watermark on either raw source; Tang: boomerang — a
large continuous push-in, matching its original build notes; also
needed a delogo pass at the standard coordinates). One tuning note:
water/mist and fine-armor texture inflate file size much faster than
architectural content at a given CRF, so Origins and Qin needed a
higher CRF (27–30) than the standard 21–24 to land at a reasonable
size — another instance of the "recipe doesn't transfer across content
types" rule from the Silk Road writeup. Final sizes: Origins 1.6MB/3MB,
Qin 1.9MB/1.2MB, Tang 5MB/6.7MB (mp4/webm).

Verified with real-browser screenshots again post-fix (crisp water
ripples, armor edges, banner embroidery, roof tile detail all
recovered) plus mobile and `prefers-reduced-motion` passes — zero
console errors. Silk Road, Song-Ming, Modern, and the (fixed) Wall
opening were already on the correct standard and untouched.

## Third audio track: Silk Road ("Distant Caravan Bells")

Same pipeline as Gate and Tang: scanned levels across the full track
(fairly consistent throughout, RMS -12 to -16dB), picked the sparsest
52s window to match the brief's "vast and lonely, more negative space"
direction, self-crossfaded the seam, loudnorm to -20 LUFS, 128kbps mp3.
Wired into `SilkRoadScene.jsx` the same way as Tang (`useInViewport`
alongside the existing `useInView` used for video lazy-load). Verified
the three-track handoff works correctly at Silk Road specifically.

Four chapters plus the epilogue still need a track.

## Work section: hover-reveal preview, structure built (content pending)

Started the feature explicitly deferred earlier: hovering a project in
Selected Work now expands an "extended bar" beneath the description,
revealing two placeholder screenshot tiles, instead of the removed
navigation link. New `WorkItem.jsx` component (`PortfolioWork.jsx` now
maps `projects` through it rather than inlining each row).

- **Animation**: GSAP tween on `mouseenter`/`mouseleave` — height
  0 → natural content height, opacity 0 → 1, `marginTop` 0 → 24px, so
  the row visibly grows to make room rather than overlaying anything.
  Reverses on leave. No route change, no DOM the router or GSAP
  ScrollTrigger's pin-spacer mechanism touches — this sidesteps the
  removeChild crash class entirely rather than working around it.
- **Real bug hit and fixed**: the preview tiles use `aspect-ratio` to
  size themselves from width alone (no real screenshots yet), but the
  container is a flex row, and flex's default `align-items: stretch`
  was forcing the tiles to the container's *collapsed* 0px height,
  overriding their aspect-ratio — so `scrollHeight` measured ~2px
  instead of the ~340px the tiles actually need, and the GSAP tween
  animated to that wrong (nearly invisible) height. Confirmed via
  direct computed-style inspection, not guessing. Fixed with
  `alignItems: 'flex-start'` on the container so children size
  themselves independently of the collapsed parent.
- **Touch guard**: gated both handlers behind
  `window.matchMedia('(hover: hover)').matches` so touch devices (no
  real hover concept, and no reliable mouseleave) can't get the panel
  stuck open — mobile keeps the plain text-only row.
- **Placeholders, not broken images**: no project screenshots exist
  yet, so each tile is a styled gradient card reading "Preview coming
  soon" rather than an empty box or a missing-image icon. Swapping in
  real screenshots later is a one-line change once they exist.
- Verified with a scripted pass: hover on multiple rows (not just the
  first), leave-to-collapse, a hover-then-click still doesn't navigate
  anywhere, mobile viewport with touch emulation shows no hover panel
  at all — zero console errors throughout.

**Explicitly not done yet, per direction**: real screenshots and any
copy changes — "we will figure out what to fill in the text after."

## Fourth audio track: Qing ("The Last Light of the Empire")

Same pipeline again. Source had one loud spike (~t=130, peak -2.8dB)
that the level scan caught before picking a window — sampled 60–112s
instead, moderate and fairly consistent (RMS -14 to -22dB). Self-
crossfaded, loudnorm to -20 LUFS, 128kbps mp3. `QingScene.jsx` had no
`useInView`/reduced-motion wiring at all (it's the one chapter still
built on a static background image, not video), so this was the first
track wired into a scene without that existing scaffolding — added
`useInViewport` fresh alongside the existing GSAP timeline. Verified:
enabling audio and scrolling to Qing plays only its track, all three
earlier tracks confirmed paused. Zero console errors.

Four chapters plus the epilogue still need a track (Origins, Qin,
Song-Ming, Modern, and the epilogue itself).

## Fifth audio track: Origins ("Yellow River Dawn")

Same pipeline. Source was consistent throughout its ~6.3 minutes (RMS
roughly -11 to -17dB, no spikes), so picked the quietest/most spacious
window (300–352s) to match the "vast, still, ancient" brief rather
than needing to dodge a loud section this time. Self-crossfaded,
loudnorm to -20 LUFS, 128kbps mp3. Wired into `LandscapeScene.jsx`
with `useInViewport` alongside its existing `useInView` (video
lazy-load). Verified: enabling audio and scrolling to Origins plays
only its track, all four other tracks confirmed paused, zero console
errors.

Three chapters plus the epilogue still need a track (Qin, Song-Ming,
Modern, and the epilogue itself).

## Sixth audio track: Qin ("Bronze Unification")

Same pipeline. The source builds toward its back half (RMS climbing to
~-9dB after t=130), so picked the restrained 60–112s window instead.
Two verification notes worth recording:

- **A seam that looked wrong but wasn't.** The waveform-at-the-seam
  check — the standard visual check used for every track so far —
  showed a clear quiet→active step near the loop point, which reads
  like a discontinuity. Measured it instead of trusting the picture:
  the loop's last second (-24.1dB RMS) and first second (-23.4dB)
  match within 0.7dB, *tighter* than the already-shipped and
  fine-sounding Origins track (3.9dB gap). The step was bell-strike
  dynamics landing shortly *after* the loop point, not a break at it.
  **Rule added**: for percussive/struck-instrument material the seam
  waveform image is a weak signal — compare head/tail RMS numerically
  before re-cutting a window.
- **A "regression" that was a measurement artifact.** A single-point
  check at Silk Road came back all-tracks-paused, which looked like
  the new wiring had broken an existing chapter. Swept the entire
  intro in 600px steps rather than guessing: Silk Road plays correctly
  across 6000–7200: the one-off check had simply landed on a scene
  boundary. **Rule added**: verify audio with a scroll sweep, not a
  single scroll position — scene boundaries produce false negatives.

The sweep also confirmed the overall behavior is right: each chapter's
track plays across its own range, adjacent tracks briefly overlap at
boundaries (that's the intended volume crossfade, not a bug), and the
only silent stretches are exactly the chapters with no track yet.

Two chapters plus the epilogue still need a track (Song-Ming, Modern,
and the epilogue itself).

## Seventh audio track: Song–Ming ("silentink")

Same pipeline, with one new hazard worth recording. This source was
much shorter than the others (123s vs. the usual 150–380s) and — unlike
every previous track — **ends with a fade-out to near-silence**
(last 3s at -48.9dB). Looping a window that included that tail would
have produced an audible dropout every cycle. Caught it by checking
head and tail levels explicitly before choosing a window, which is
now worth doing on every track rather than only scanning the middle.
Used 20–72s: clear of both the soft start and the fade-out.

Wide RMS swings across the track (-13 to -26dB) are intrinsic to the
sparse-guqin brief (struck notes with long silences), not a problem to
engineer around — the same lesson as Qin. Applied the Qin rule and
verified the seam numerically rather than by eye: last second -23.3dB
vs. first second -22.5dB, a 0.8dB match. No clipping (peak -17.3dB).

Wired into `SongMingScene.jsx`. Verified with the full scroll sweep
(also per the Qin rule): Song-Ming now fills what was a silent gap at
~9600px, and ambient audio is continuous from Gate through Qing with
the intended crossfade overlaps at every boundary. Mobile and
`prefers-reduced-motion` clean, zero console errors.

One chapter plus the epilogue still need a track (Modern, and the
epilogue itself).

## Eighth audio track: Modern ("softarrival") — and a loop-seam rule

Same pipeline, but this track exposed a flaw in how windows were being
chosen, and it's the most useful thing recorded in this section.

**Both ends were unusable**: a fade-in (-40.9dB over the first 3s) and
a hard fade to *digital silence* (-97.3dB over the last 3s) — the
Song-Ming lesson repeating, more extreme. Middle was very consistent
(-12 to -18dB from t=10 to ~145), so there was plenty of safe range.

**The real find**: the first attempt (60–112s) passed every check used
up to now except the numeric seam check, which came back **8.7dB
mismatched** (loop tail -23.1dB vs. head -14.4dB) — the loop would
have audibly swelled on every restart. Diagnosing *why* exposed
something true of this recipe all along: because the crossfade blends
the tail into the *head*, the last moment of the loop is head content
at ~3s in, and the restart jumps back to head content at 0s. So what
actually has to be level-flat is **the first ~3 seconds of the chosen
window**, not the window as a whole. A window can sit in a perfectly
consistent stretch and still loop badly if its own opening 3s ramps.

**Fix**: scanned candidate start points across the safe range,
comparing RMS(t..t+1) against RMS(t+2..t+3), and picked the flattest
head (t=84, 0.5dB internal). Reran: seam mismatch dropped 8.7dB → 2.7dB,
tighter than the already-shipped and fine-sounding Origins track
(3.9dB). No clipping (peak -13.2dB).

**Rule added**: choose a window by the flatness of its first 3 seconds,
not just by avoiding loud/quiet sections — and always confirm with the
numeric head/tail RMS check, which is the only check that caught this.

Wired into `ModernTransition.jsx`. Full scroll sweep confirms Modern
fills the last silent stretch: **ambient audio is now continuous across
the entire historical intro**, Gate through Modern, with crossfade
overlaps at every boundary. Mobile and `prefers-reduced-motion` clean,
zero console errors.

Only the epilogue (`RedThreadScene`) still has no track.
