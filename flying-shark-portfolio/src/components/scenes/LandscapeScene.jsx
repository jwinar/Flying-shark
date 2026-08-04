import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
const LandscapeScene = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, duration: 1 }); }, []);
  return <div ref={ref} style={{ height:'100vh', background:'#1a1410', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}><h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,5vw,60px)', color:'var(--color-text-primary)' }}>Landscape</h2><p style={{ color:'var(--color-text-secondary)' }}>Mist and mountains</p></div>;
};
export default LandscapeScene;
