import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInView } from '../../hooks/useInView';
import Silk from '../cinematic/Silk';

const ModernTransition = () => {
  const containerRef = useRef(null);
  const mediaRef = useRef(null);
  const vignetteRef = useRef(null);
  const charRef = useRef(null);
  const textRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(containerRef);

  useGSAP(() => {
    gsap.set(charRef.current, { opacity: 0, scale: 0.85 });

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
      .to(charRef.current, { opacity: 0.16, scale: 1, duration: 0.8, ease: 'power2.out' }, 0.1)
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' }, 0.15)
      .to(vignetteRef.current, { opacity: 1, duration: 0.7, ease: 'power2.in' }, 0.4);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      <div ref={mediaRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
        {prefersReducedMotion || !inView ? (
          <img src="/assets/videos/ch7-modern-poster.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <video autoPlay muted loop playsInline poster="/assets/videos/ch7-modern-poster.jpg" style={{ width: '100%', height: '100%', objectFit: 'cover' }}>
            <source src="/assets/videos/ch7-modern.webm" type="video/webm" />
            <source src="/assets/videos/ch7-modern.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(8,8,8,0.45) 0%, rgba(8,8,8,0.1) 30%, rgba(8,8,8,0.75) 100%)' }} />
      <div ref={vignetteRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, transparent 0%, rgba(8,8,8,0.65) 55%, #080808 100%)', opacity: 0 }} />

      <Silk path="M 6 62 Q 28 40, 50 52 T 94 32" color="#9e1d1d" thickness={2} wind={0.5} opacity={0.5} />

      <div ref={charRef} style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(160px,34vw,460px)', fontFamily: 'var(--font-display)', color: 'var(--color-gold)', pointerEvents: 'none', zIndex: 4 }}>今</div>

      <div ref={textRef} style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '36px 24px 24px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(8,8,8,0.65) 0%, rgba(8,8,8,0.28) 55%, transparent 80%)', zIndex: -1 }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '18px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          Modern · Present Day
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3.4vw,44px)', fontWeight: 300, lineHeight: 1.35, color: 'var(--color-text-primary)', maxWidth: '720px', margin: '0 auto', textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.9)' }}>
          The thread doesn't end. It's still being drawn — by you, scrolling.
        </h2>
      </div>
    </div>
  );
};
export default ModernTransition;
