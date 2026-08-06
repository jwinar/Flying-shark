import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const GateScene = () => {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const vignetteRef = useRef(null);
  const titleRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
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

    tl.to(mediaRef.current, { scale: 1.2, duration: 1, ease: 'power1.in' }, 0)
      .to(titleRef.current, { opacity: 0, y: -24, duration: 0.6, ease: 'power2.out' }, 0.12)
      .to(vignetteRef.current, { opacity: 1, duration: 0.7, ease: 'power2.in' }, 0.35);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden', position: 'relative', background: '#0a0704' }}>
      <div ref={mediaRef} style={{ position: 'absolute', inset: 0, transformOrigin: '47% 33%', willChange: 'transform' }}>
        {prefersReducedMotion ? (
          <img src="/assets/videos/opening-wall-poster.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <video autoPlay muted loop playsInline poster="/assets/videos/opening-wall-poster.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/assets/videos/opening-wall.webm" type="video/webm" />
            <source src="/assets/videos/opening-wall.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.6) 100%)' }} />
      <div
        ref={vignetteRef}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 47% 33%, transparent 0%, rgba(10,7,4,0.55) 55%, #0a0704 100%)', opacity: 0 }}
      />

      <div ref={titleRef} style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '0 20px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,80px)', color: '#f5efe3', letterSpacing: '0.08em', fontWeight: 300, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>CHINA / 5000 YEARS</h1>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#d8cdb8', letterSpacing: '0.2em', textTransform: 'uppercase', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>SCROLL TO ENTER</p>
      </div>
    </div>
  );
};
export default GateScene;
