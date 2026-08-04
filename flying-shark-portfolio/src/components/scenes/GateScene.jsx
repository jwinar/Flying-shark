import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';

const GateScene = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const vignetteRef = useRef(null);
  const titleRef = useRef(null);

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

    tl.to(imageRef.current, { scale: 1.55, duration: 1, ease: 'power1.in' }, 0)
      .to(titleRef.current, { opacity: 0, y: -24, duration: 0.6, ease: 'power2.out' }, 0.12)
      .to(vignetteRef.current, { opacity: 1, duration: 0.7, ease: 'power2.in' }, 0.35);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden', position: 'relative', background: '#050302' }}>
      <div
        ref={imageRef}
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: "url('/assets/images/gate-forbidden-city.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: '50% 42%',
          transformOrigin: '51% 62%',
          willChange: 'transform',
        }}
      />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.05) 35%, rgba(0,0,0,0.6) 100%)' }} />
      <div
        ref={vignetteRef}
        style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 51% 62%, transparent 0%, rgba(5,3,2,0.55) 55%, #050302 100%)', opacity: 0 }}
      />

      <div ref={titleRef} style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '0 20px' }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,80px)', color: '#f5efe3', letterSpacing: '0.08em', fontWeight: 300, textShadow: '0 4px 24px rgba(0,0,0,0.7)' }}>CHINA / 5000 YEARS</h1>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#d8cdb8', letterSpacing: '0.2em', textTransform: 'uppercase', textShadow: '0 2px 12px rgba(0,0,0,0.7)' }}>SCROLL TO ENTER</p>
      </div>
    </div>
  );
};
export default GateScene;
