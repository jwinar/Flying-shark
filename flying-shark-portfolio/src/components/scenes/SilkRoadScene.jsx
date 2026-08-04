import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
const SilkRoadScene = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, scale: 0.95, duration: 1.5 }); }, []);
  return <div ref={ref} style={{ height:'100vh', background:'#3a2a1a', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}><h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(48px,7vw,80px)', color:'var(--color-gold)' }}>丝绸之路</h2><p style={{ color:'var(--color-text-secondary)' }}>THE SILK ROAD</p></div>;
};
export default SilkRoadScene;
