import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const RedThreadScene = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useGSAP(() => {
    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 75%',
          end: 'top 30%',
          scrub: false,
          toggleActions: 'play none none reverse',
        },
      }
    );
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: '90vh', position: 'relative', overflow: 'hidden', background: '#050505', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ position: 'absolute', inset: 0 }}>
        {prefersReducedMotion ? (
          <img src="/assets/videos/epilogue-thread-poster.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <video autoPlay muted loop playsInline poster="/assets/videos/epilogue-thread-poster.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/assets/videos/epilogue-thread.webm" type="video/webm" />
            <source src="/assets/videos/epilogue-thread.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(5,5,5,0.25) 35%, rgba(5,5,5,0.7) 100%)' }} />

      <div ref={textRef} style={{ position: 'relative', zIndex: 5, textAlign: 'center', maxWidth: '680px', padding: '0 32px' }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '22px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          红线 · The Red Thread of Fate
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3.2vw,40px)', fontWeight: 300, lineHeight: 1.4, color: '#f5efe3', textShadow: '0 3px 20px rgba(0,0,0,0.9)' }}>
          In Chinese folklore, an invisible red thread binds those destined to meet — stretched, tangled, but never broken.
        </h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(14px,1.3vw,17px)', color: '#c9beac', marginTop: '24px', lineHeight: 1.7 }}>
          The line you've followed through every era on this page is that thread. Scroll on — it leads here.
        </p>
      </div>
    </div>
  );
};
export default RedThreadScene;
