import { Link } from 'react-router-dom';
const PortfolioNavigation = () => {
  return <nav style={{ position:'fixed', bottom:'40px', left:'50%', transform:'translateX(-50%)', zIndex:50, display:'flex', gap:'40px', background:'rgba(8,8,8,0.8)', backdropFilter:'blur(10px)', padding:'12px 32px', borderRadius:'40px', border:'1px solid rgba(255,255,255,0.05)' }}>
    <a href="#hero" style={{ color:'var(--color-text-secondary)', textDecoration:'none', fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase' }}>Home</a>
    <a href="#work" style={{ color:'var(--color-text-secondary)', textDecoration:'none', fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase' }}>Work</a>
    <a href="#about" style={{ color:'var(--color-text-secondary)', textDecoration:'none', fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase' }}>About</a>
    <a href="#contact" style={{ color:'var(--color-text-secondary)', textDecoration:'none', fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase' }}>Contact</a>
  </nav>;
};
export default PortfolioNavigation;
