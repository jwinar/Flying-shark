import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import { useInView } from '../../hooks/useInView';
import Silk from '../cinematic/Silk';

const LandscapeScene = () => {
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

    tl.to(mediaRef.current, { scale: 1.18, duration: 1, ease: 'power1.in' }, 0)
      .to(textRef.current, { opacity: 0, y: -20, duration: 0.6, ease: 'power2.out' }, 0.15)
      .to(vignetteRef.current, { opacity: 1, duration: 0.7, ease: 'power2.in' }, 0.4);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#120c06' }}>
      <div ref={mediaRef} style={{ position: 'absolute', inset: 0, willChange: 'transform' }}>
        {prefersReducedMotion || !inView ? (
          <img src="/assets/videos/ch1-origins-poster.jpg" alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <video
            autoPlay
            muted
            loop
            playsInline
            poster="/assets/videos/ch1-origins-poster.jpg"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          >
            <source src="/assets/videos/ch1-origins.webm" type="video/webm" />
            <source src="/assets/videos/ch1-origins.mp4" type="video/mp4" />
          </video>
        )}
      </div>

      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(10,6,2,0.35) 0%, rgba(10,6,2,0.05) 30%, rgba(10,6,2,0.65) 100%)' }} />
      <div ref={vignetteRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 55%, transparent 0%, rgba(10,6,2,0.55) 55%, #0a0602 100%)', opacity: 0 }} />

      <Silk path="M 15 25 Q 40 15, 55 22 T 88 12" color="#b31b1b" thickness={1.5} opacity={0.32} />

      <div ref={textRef} style={{ position: 'absolute', bottom: '14%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '36px 24px 24px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(8,5,2,0.6) 0%, rgba(8,5,2,0.25) 55%, transparent 80%)', zIndex: -1 }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#f5efe3', marginBottom: '18px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          Origins · The Yellow River
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3.4vw,44px)', fontWeight: 300, lineHeight: 1.35, color: '#f5efe3', maxWidth: '720px', margin: '0 auto', textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.9)' }}>
          Out of myth and river silt, the first marks are made.
        </h2>
      </div>
    </div>
  );
};
export default LandscapeScene;
