# "5000 Years of China" — Cinematic Intro: Story & Elevation Plan

Working plan for turning the current 6-scene placeholder intro into an actual
short scroll-driven film. Not for implementation in one pass — we build it
chapter by chapter, each chapter gated on real imagery before it's coded.

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

1. I write the chapter's narrative beat (one or two lines, film-caption
   length, not an essay) and a **detailed image-generation prompt** matched
   to that chapter's color identity and mood, styled to sit next to the
   Forbidden City gate photo without clashing.
2. You either generate it (same tool you used for the gate/portrait) or
   supply your own photo/art.
3. I build the scene: grading, parallax, motion, thread integration, caption
   timing — same treatment as the Gate scene, verified with real scroll
   testing before it ships.
4. Repeat for the next chapter.

This keeps each phase small and reviewable instead of me guessing at seven
images' worth of art direction in one shot.

**Video vs. still images**: video (subtle looping motion — drifting mist,
flickering light, a river's current) reads more alive than a static photo,
but costs real complexity — file size, mobile autoplay policy (must be
muted + inline), and it's much harder to generate/source well than stills.
Recommend: **stills with Ken-Burns/parallax treatment for most chapters**
(the Gate scene proves this can look excellent), and reserve actual video
for at most one "hero moment" — Tang's Chang'an marketplace, or the Silk
Road caravan, are the strongest candidates if we want to spend that budget
on exactly one chapter.

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

## Open questions to lock before Phase 1

1. Does "rich color, not pure black" apply to the whole site, or just the
   historical intro? (My recommendation: intro goes bold/saturated;
   portfolio half stays closer to restrained-but-warmer — not pure black,
   but still calm enough that your Experience section reads easily. Open to
   being overruled.)
2. Is the 7-chapter lineup above roughly right, or too many/too few for
   "not very long"?
3. Music: proceed on the plan above (off-by-default, ambient, later phase),
   or do you want it dropped entirely?
4. For the reference video — can you describe what specifically stood out
   (a transition, the titles, the grading), or send a still/two? I want to
   build toward something specific, not my own guess at "cinematic."
