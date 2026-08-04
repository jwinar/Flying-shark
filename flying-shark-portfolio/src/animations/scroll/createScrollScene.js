import { gsap, ScrollTrigger } from '../core/gsap';
export const createScrollScene = (config) => {
  const { trigger, start='top 80%', end='bottom 20%', scrub=true, pin=false, animation, ...extra } = config;
  let tl = typeof animation === 'function' ? animation() : animation;
  if (!tl) return ScrollTrigger.create({ trigger, start, end, scrub, pin, ...extra });
  return ScrollTrigger.create({ trigger, start, end, scrub, pin, animation: tl, ...extra });
};
