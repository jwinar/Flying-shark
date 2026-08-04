import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks/useReducedMotion';
const Cursor = () => {
  const cursorRef = useRef(null);
  const labelRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);
  const prefersReducedMotion = useReducedMotion();
  useEffect(() => {
    if (prefersReducedMotion) { cursorRef.current.style.display = 'none'; return; }
    const onMove = (e) => { if (cursorRef.current) cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`; };
    const onOver = (e) => { if (e.target.closest('a') || e.target.closest('button') || e.target.closest('[data-hover]')) setIsHovering(true); };
    const onOut = () => setIsHovering(false);
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    window.addEventListener('mouseout', onOut);
    return () => { window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseover', onOver); window.removeEventListener('mouseout', onOut); };
  }, [prefersReducedMotion]);
  useEffect(() => {
    if (cursorRef.current) {
      if (isHovering) { cursorRef.current.classList.add('hover'); if (labelRef.current) labelRef.current.textContent = 'VIEW'; }
      else { cursorRef.current.classList.remove('hover'); }
    }
  }, [isHovering]);
  return <div id="cursor" ref={cursorRef}><span className="cursor-label" ref={labelRef}></span></div>;
};
export default Cursor;
