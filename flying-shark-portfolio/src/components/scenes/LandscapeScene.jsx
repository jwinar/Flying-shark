import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const LandscapeScene = () => {
  const containerRef = useRef(null);
  const mountainsRef = useRef(null);
  const mistRef = useRef(null);
  const textRef = useRef(null);

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
    tl.fromTo(mountainsRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power2.out' })
      .fromTo(mistRef.current, { opacity: 0 }, { opacity: 0.6, duration: 1.5 }, 0.3)
      .fromTo(textRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.6);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a1410' }}>
      <div ref={mountainsRef} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #2a2018 0%, #1a1410 100%)', opacity: 0 }}>
        <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }} viewBox="0 0 1000 400">
          <path d="M0 400 L100 250 L250 300 L400 150 L600 200 L800 100 L1000 250 L1000 400 Z" fill="#2a2018" />
          <path d="M0 400 L150 320 L300 350 L450 280 L650 330 L850 250 L1000 300 L1000 400 Z" fill="#1a1410" opacity="0.7" />
        </svg>
      </div>
      <div ref={mistRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(200,180,160,0.2) 0%, transparent 70%)', opacity: 0 }} />
      <div ref={textRef} style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,100px)', color: '#e8dcc8', fontWeight: 300, letterSpacing: '-0.02em' }}>5000 YEARS</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(14px,1.5vw,20px)', color: '#888', letterSpacing: '0.2em' }}>OF CIVILIZATION</p>
      </div>
      <Silk path="M 20 10 Q 40 30, 60 20 T 90 40" color="#b31b1b" thickness={2} wind={0.5} />
    </div>
  );
};
export default LandscapeScene;
