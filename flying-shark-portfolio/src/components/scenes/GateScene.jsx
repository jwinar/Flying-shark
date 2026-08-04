import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const GateScene = () => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const lightRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP((ctx) => {
    // Initial state: doors closed, light off
    gsap.set(leftDoorRef.current, { transformOrigin: 'left center', rotateY: 0 });
    gsap.set(rightDoorRef.current, { transformOrigin: 'right center', rotateY: 0 });
    gsap.set(lightRef.current, { opacity: 0 });

    // Scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(leftDoorRef.current, { rotateY: -80, duration: 1, ease: 'power4.inOut' })
      .to(rightDoorRef.current, { rotateY: 80, duration: 1, ease: 'power4.inOut' }, 0)
      .to(lightRef.current, { opacity: 0.8, duration: 1.5, ease: 'power2.out' }, 0.2)
      .to(titleRef.current, { opacity: 0, y: -30, duration: 0.8, ease: 'power2.out' }, 0.3);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden', position: 'relative', perspective: '1200px', background: '#0a0a0a' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />

      {/* Light behind gate */}
      <div ref={lightRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,200,150,0.4) 0%, rgba(255,150,100,0.1) 50%, transparent 80%)', opacity: 0 }} />

      {/* Left Door */}
      <div ref={leftDoorRef} style={{ position: 'absolute', top: '10%', left: '5%', width: '40%', height: '80%', background: 'linear-gradient(135deg, #4a1a1a, #2a0a0a)', borderRight: '2px solid #8a6a3a', boxShadow: 'inset -10px 0 30px rgba(0,0,0,0.8)', transformOrigin: 'left center' }}>
        <div style={{ position: 'absolute', top: '30%', left: '30%', width: '40%', height: '40%', border: '2px solid #c9a84c', borderRadius: '4px', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '40%', width: '20%', height: '10%', background: '#c9a84c', borderRadius: '50%', opacity: 0.2 }} />
      </div>

      {/* Right Door */}
      <div ref={rightDoorRef} style={{ position: 'absolute', top: '10%', right: '5%', width: '40%', height: '80%', background: 'linear-gradient(225deg, #4a1a1a, #2a0a0a)', borderLeft: '2px solid #8a6a3a', boxShadow: 'inset 10px 0 30px rgba(0,0,0,0.8)', transformOrigin: 'right center' }}>
        <div style={{ position: 'absolute', top: '30%', right: '30%', width: '40%', height: '40%', border: '2px solid #c9a84c', borderRadius: '4px', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '40%', width: '20%', height: '10%', background: '#c9a84c', borderRadius: '50%', opacity: 0.2 }} />
      </div>

      {/* Title */}
      <div ref={titleRef} style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,80px)', color: '#f0f0f0', letterSpacing: '0.1em', fontWeight: 300 }}>CHINA / 5000 YEARS</h1>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SCROLL TO ENTER</p>
      </div>

      <Silk path="M 10 80 Q 30 60, 50 70 T 90 50" color="#b31b1b" thickness={3} />
    </div>
  );
};
export default GateScene;
