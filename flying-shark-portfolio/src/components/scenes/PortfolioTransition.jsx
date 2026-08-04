import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
const PortfolioTransition = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, y: 20, duration: 1.5 }); }, []);
  return <div ref={ref} style={{ height:'60vh', background:'#080808', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}><p style={{ fontFamily:'var(--font-display)', fontSize:'clamp(24px,3vw,48px)', color:'var(--color-text-secondary)' }}>One continuous thread.</p></div>;
};
export default PortfolioTransition;
