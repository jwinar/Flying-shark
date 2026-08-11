import { useEffect, useState } from 'react';
import { gsap } from '../animations/core/gsap';

// Polls on gsap's ticker (the same per-frame clock driving Lenis + ScrollTrigger)
// instead of IntersectionObserver. A pinned scene toggles `position: fixed` on
// entry/exit outside React's render cycle, and IntersectionObserver's coalesced,
// threshold-crossing callbacks can miss that transition depending on scroll
// direction/speed; a fresh getBoundingClientRect() every frame can't.
export const useInViewport = (ref, { persistPastBottom = false } = {}) => {
  const [inViewport, setInViewport] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let current = null;
    const check = () => {
      const rect = el.getBoundingClientRect();
      const next = persistPastBottom
        ? rect.top < window.innerHeight
        : rect.bottom > 0 && rect.top < window.innerHeight;
      if (next !== current) {
        current = next;
        setInViewport(next);
      }
    };

    check();
    gsap.ticker.add(check);
    return () => gsap.ticker.remove(check);
  }, [ref, persistPastBottom]);

  return inViewport;
};
