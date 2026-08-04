import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const ModernTransition = () => {
  const containerRef = useRef(null);
  const cityRef = useRef(null);
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
    tl.fromTo(cityRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
      .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5 }, 0.6);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      <div ref={cityRef} style={{ position: 'absolute', inset: 0, opacity: 0 }}>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <rect x="100" y="200" width="60" height="400" fill="#1a1a1a" />
          <rect x="200" y="150" width="80" height="450" fill="#222" />
          <rect x="350" y="100" width="70" height="500" fill="#1a1a1a" />
          <rect x="500" y="250" width="50" height="350" fill="#222" />
          <rect x="600" y="180" width="90" height="420" fill="#1a1a1a" />
          <rect x="750" y="120" width="60" height="480" fill="#222" />
          <rect x="850" y="220" width="100" height="380" fill="#1a1a1a" />
          {/* Windows */}
          {[110,130,150, 210,230,250,270, 360,380,400, 510, 610,630,650,670, 760,780, 860,880,900,920].map((x, i) => (
            <rect key={i} x={x} y={250 + i*15 % 200} width="10" height="15" fill="#c9a84c" opacity="0.3" />
          ))}
        </svg>
      </div>
      <div ref={textRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(20px,3vw,40px)', color: '#888', letterSpacing: '0.3em' }}>MODERN</p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#555', letterSpacing: '0.1em', marginTop: '12px' }}>PRESENT DAY</p>
      </div>
      <Silk path="M 10 50 Q 30 30, 60 40 T 90 20" color="#b31b1b" thickness={1.5} wind={0.6} evolution="abstract" />
    </div>
  );
};
export default ModernTransition;
