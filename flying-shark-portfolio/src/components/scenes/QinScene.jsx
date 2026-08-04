import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
const QinScene = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, y: 30, duration: 1.2 }); }, []);
  return <div ref={ref} style={{ height:'100vh', background:'#2a1a0a', display:'flex', alignItems:'center', justifyContent:'center', flexDirection:'column' }}><h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(64px,10vw,120px)', color:'var(--color-gold)' }}>秦</h2><h3 style={{ fontFamily:'var(--font-ui)', color:'var(--color-text-secondary)', letterSpacing:'0.2em' }}>QIN DYNASTY</h3></div>;
};
export default QinScene;
