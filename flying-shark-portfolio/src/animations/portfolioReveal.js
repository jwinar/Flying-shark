import { gsap } from './core/gsap';

const DURATION = 0.7;
const STAGGER = 0.06;
const EASE = 'expo.out';

/**
 * The portfolio-world's one authored motion moment: a board-tile flip-in,
 * reused consistently across every section instead of a per-section entrance.
 * Reduced-motion gets a short opacity cross-fade, no rotation.
 */
export const flipInReveal = (targets, { trigger, start = 'top 85%', stagger = STAGGER } = {}) => {
  const els = gsap.utils.toArray(targets).filter(Boolean);
  if (!els.length) return;

  const reduced = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (!reduced) gsap.set(els, { transformPerspective: 800, transformOrigin: '50% 0%' });

  gsap.from(els, {
    opacity: 0,
    ...(reduced ? {} : { rotateX: -14 }),
    duration: reduced ? 0.35 : DURATION,
    ease: reduced ? 'power1.out' : EASE,
    stagger: reduced ? 0 : stagger,
    scrollTrigger: {
      trigger: trigger || els[0],
      start,
      toggleActions: 'play none none none',
    },
  });
};
