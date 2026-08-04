import { useRef, useEffect } from 'react';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const Silk = ({ path, color = '#b31b1b', thickness = 2, opacity = 0.85, length = 1, wind = 0.3, evolution = 'physical' }) => {
  const pathRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Animate silk drawing
    gsap.fromTo(pathRef.current, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });
  }, [prefersReducedMotion]);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        opacity={opacity}
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ filter: 'drop-shadow(0 0 4px rgba(179,27,27,0.3))', vectorEffect: 'non-scaling-stroke' }}
      />
    </svg>
  );
};
export default Silk;
