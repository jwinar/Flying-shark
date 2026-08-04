import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const SilkRoadScene = () => {
  const containerRef = useRef(null);
  const desertRef = useRef(null);
  const caravanRef = useRef(null);
  const titleRef = useRef(null);

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
    tl.fromTo(desertRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
      .fromTo(caravanRef.current, { x: -200, opacity: 0 }, { x: 200, opacity: 1, duration: 3, ease: 'power1.inOut' }, 0.3)
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5 }, 0.8);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#2a1a0a' }}>
      <div ref={desertRef} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #4a3a2a 0%, #3a2a1a 50%, #2a1a0a 100%)', opacity: 0 }}>
        <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%' }} viewBox="0 0 1000 200">
          <path d="M0 200 L150 150 L300 180 L500 120 L700 160 L900 130 L1000 200 Z" fill="#3a2a1a" />
          <path d="M0 200 L100 170 L250 190 L400 160 L600 190 L800 170 L1000 200 Z" fill="#4a3a2a" opacity="0.5" />
        </svg>
      </div>
      <div ref={caravanRef} style={{ position: 'absolute', bottom: '20%', left: '10%', opacity: 0 }}>
        <svg width="80" height="40" viewBox="0 0 80 40">
          <circle cx="10" cy="30" r="4" fill="#c9a84c" />
          <circle cx="30" cy="30" r="4" fill="#c9a84c" />
          <circle cx="50" cy="30" r="4" fill="#c9a84c" />
          <circle cx="70" cy="30" r="4" fill="#c9a84c" />
          <rect x="8" y="20" width="4" height="10" fill="#888" />
          <rect x="28" y="20" width="4" height="10" fill="#888" />
          <rect x="48" y="20" width="4" height="10" fill="#888" />
          <rect x="68" y="20" width="4" height="10" fill="#888" />
        </svg>
      </div>
      <div ref={titleRef} style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,90px)', color: '#c9a84c', fontWeight: 300, letterSpacing: '-0.02em' }}>丝绸之路</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(14px,1.5vw,20px)', color: '#888', letterSpacing: '0.2em' }}>THE SILK ROAD</p>
      </div>
      <Silk path="M 5 80 Q 30 40, 60 60 T 95 30" color="#b31b1b" thickness={2} wind={0.8} />
    </div>
  );
};
export default SilkRoadScene;
