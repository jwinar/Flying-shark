import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const QingScene = () => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const vignetteRef = useRef(null);
  const charRef = useRef(null);
  const textRef = useRef(null);

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

    tl.to(imageRef.current, { scale: 1.55, duration: 1, ease: 'power1.in' }, 0)
      .to(charRef.current, { opacity: 0.16, scale: 1, duration: 0.8, ease: 'power2.out' }, 0.1)
      .to(textRef.current, { opacity: 0, y: -24, duration: 0.6, ease: 'power2.out' }, 0.12)
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

      <Silk path="M 6 82 Q 28 58, 48 72 T 94 50" color="#b31b1b" thickness={1.8} opacity={0.4} />

      <div ref={charRef} style={{ position: 'absolute', top: '46%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(160px,34vw,460px)', fontFamily: 'var(--font-display)', color: '#c9a84c', pointerEvents: 'none', zIndex: 4 }}>清</div>

      <div ref={textRef} style={{ position: 'absolute', bottom: '16%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5, width: '100%', padding: '36px 24px 24px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse 70% 100% at 50% 50%, rgba(3,2,1,0.6) 0%, rgba(3,2,1,0.25) 55%, transparent 80%)', zIndex: -1 }} />
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.3em', textTransform: 'uppercase', color: '#d8cdb8', marginBottom: '18px', textShadow: '0 2px 10px rgba(0,0,0,0.9)' }}>
          Qing · 1644–1911
        </p>
        <h2 style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: 'clamp(22px,3.4vw,44px)', fontWeight: 300, lineHeight: 1.35, color: '#f5efe3', maxWidth: '720px', margin: '0 auto', textShadow: '0 3px 20px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.9)' }}>
          The empire's last light. A gate begins to close.
        </h2>
      </div>
    </div>
  );
};
export default QingScene;
