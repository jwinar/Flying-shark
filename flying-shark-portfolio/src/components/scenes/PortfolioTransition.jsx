import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const PortfolioTransition = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const threadRef = useRef(null);

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
    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' })
      .to(textRef.current, { opacity: 0.5, duration: 0.5 }, 1);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '60vh', position: 'relative', overflow: 'hidden', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={textRef} style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,48px)', color: '#888', letterSpacing: '0.05em' }}>One continuous thread.</p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#444', marginTop: '8px' }}>From history to creation</p>
      </div>
      <Silk path="M 20 80 Q 40 60, 60 70 T 80 40" color="#c9a84c" thickness={1.5} wind={0.2} />
    </div>
  );
};
export default PortfolioTransition;
