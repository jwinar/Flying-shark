import { useEffect, useRef } from 'react';
import { gsap } from '../animations/core/gsap';
export const useGSAP = (callback, deps=[]) => {
  const ctxRef = useRef(null);
  useEffect(() => {
    const ctx = gsap.context(callback);
    ctxRef.current = ctx;
    return () => ctx.revert();
  }, deps);
};
