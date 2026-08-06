import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInView } from '../../hooks/useInView';
import Silk from '../cinematic/Silk';

const SongMingScene = () => {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const vignetteRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(containerRef);

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

    tl.to(mediaRef.current, { scale: 1.15, duration: 1, ease: 'power1.in' }, 0)
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' }, 0.15)
      .to(vignetteRef.current, { opacity: 1, duration: 0.7, ease: 'power2.in' }, 0.4);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0f0e' }}>
      <div ref={mediaRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
        {prefersReducedMotion || !inView ? (
          <img src="/assets/videos/ch5-songming-poster.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <video autoPlay muted loop playsInline poster="/assets/videos/ch5-songming-poster.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/assets/videos/ch5-songming.webm" type="video/webm" />
            <source src="/assets/videos/ch5-songming.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(6,10,9,0.4) 0%, rgba(6,10,9,0.08) 30%, rgba(6,10,9,0.72) 100%)' }} />
      <div ref={vignetteRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(6,10,9,0.6) 55%, #060a09 100%)', opacity: 0 }} />

      <Silk path="M 6 66 Q 28 48, 50 58 T 94 42" color="#9e1d1d" thickness={2.1} wind={0.5} opacity={0.58} />

      <div ref={textRef} style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '36px 24px 24px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(6,10,9,0.65) 0%, rgba(6,10,9,0.28) 55%, transparent 80%)', zIndex: -1 }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#a8c4bc', marginBottom: '18px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          Song · Ming — 960–1644
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3.4vw,44px)', fontWeight: 300, lineHeight: 1.35, color: '#eef4f1', maxWidth: '760px', margin: '0 auto', textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.9)' }}>
          Not conquest — invention. The world remade in paper, ink, and porcelain.
        </h2>
      </div>
    </div>
  );
};
export default SongMingScene;
