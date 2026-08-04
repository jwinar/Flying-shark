import { useEffect, useRef } from 'react';
export const useScrollVelocity = () => {
  const velocityRef = useRef(0);
  const lastY = useRef(window.scrollY || 0);
  const lastTime = useRef(Date.now());
  useEffect(() => {
    const handler = () => {
      const now = Date.now();
      const dt = Math.max(16, now - lastTime.current);
      const dy = (window.scrollY || 0) - lastY.current;
      velocityRef.current = dy / dt;
      lastY.current = window.scrollY || 0;
      lastTime.current = now;
    };
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);
  return velocityRef;
};
