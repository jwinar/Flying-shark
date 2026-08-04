import { useRef, useEffect } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
const GateScene = () => {
  const containerRef = useRef(null);
  useGSAP(() => {
    // Minimal gate animation
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });
    // ... (full gate animation would go here, but for brevity we'll make it simple)
    gsap.from(containerRef.current, { opacity: 0, duration: 1 });
  }, []);
  return <div ref={containerRef} style={{ height:'100vh', background:'var(--color-bg)', display:'flex', alignItems:'center', justifyContent:'center' }}><h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(48px,10vw,100px)', color:'var(--color-text-primary)' }}>CHINA / 5000 YEARS</h1></div>;
};
export default GateScene;
