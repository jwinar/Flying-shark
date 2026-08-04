import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
const ModernTransition = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, duration: 1.5 }); }, []);
  return <div ref={ref} style={{ height:'100vh', background:'#0a0a0a', display:'flex', alignItems:'center', justifyContent:'center' }}><p style={{ fontFamily:'var(--font-ui)', fontSize:'clamp(20px,3vw,40px)', color:'var(--color-text-secondary)', letterSpacing:'0.3em' }}>MODERN</p></div>;
};
export default ModernTransition;
