import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { personal } from '../../data/personal';
const PortfolioHero = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, y: 40, duration: 1.5 }); }, []);
  return <div ref={ref} style={{ height:'80vh', display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', padding:'40px', textAlign:'center' }}>
    <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(48px,12vw,120px)', fontWeight:300, letterSpacing:'-0.02em', lineHeight:1, color:'var(--color-text-primary)' }}>{personal.name}</h1>
    <p style={{ fontFamily:'var(--font-ui)', fontSize:'clamp(16px,2vw,24px)', color:'var(--color-text-secondary)', marginTop:'16px', letterSpacing:'0.15em' }}>{personal.professionalHeadline} · {personal.location}</p>
    <p style={{ fontFamily:'var(--font-ui)', fontSize:'clamp(14px,1.2vw,18px)', color:'var(--color-text-secondary)', maxWidth:'600px', marginTop:'24px', lineHeight:1.8 }}>{personal.summary}</p>
  </div>;
};
export default PortfolioHero;
