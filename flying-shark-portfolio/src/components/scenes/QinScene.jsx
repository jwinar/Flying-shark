import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const QinScene = () => {
  const containerRef = useRef(null);
  const charRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);

  useGSAP((ctx) => {
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
    tl.fromTo(charRef.current, { scale: 0.5, opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { scale: 1, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 2, ease: 'power2.out' })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .fromTo(dateRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.8);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a0a05' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
      <div ref={charRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(120px,30vw,400px)', fontFamily: 'var(--font-display)', color: '#c9a84c', opacity: 0.8, textShadow: '0 0 60px rgba(201,168,76,0.1)' }}>秦</div>
      <div ref={titleRef} style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(16px,2vw,24px)', color: '#888', letterSpacing: '0.2em' }}>QIN DYNASTY</h3>
      </div>
      <div ref={dateRef} style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#555', letterSpacing: '0.1em' }}>221 – 206 BCE</p>
      </div>
      <Silk path="M 10 90 Q 30 70, 50 80 T 90 60" color="#b31b1b" thickness={2.5} wind={0.3} />
    </div>
  );
};
export default QinScene;
