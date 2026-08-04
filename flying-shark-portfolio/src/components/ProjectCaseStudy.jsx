import { Link } from 'react-router-dom';
import { useGSAP } from '../hooks/useGSAP';
import { gsap } from '../animations/core/gsap';
import { useRef } from 'react';
const ProjectCaseStudy = ({ project }) => {
  const containerRef = useRef(null);
  useGSAP(() => { gsap.from(containerRef.current, { opacity: 0, y: 40, duration: 1.2, ease: 'power4.out' }); }, []);
  return (
    <div ref={containerRef} style={{ maxWidth:'1200px', margin:'120px auto', padding:'0 40px' }}>
      <Link to="/" style={{ color:'var(--color-gold)', textDecoration:'none', fontFamily:'var(--font-ui)', fontSize:'14px', letterSpacing:'0.1em', textTransform:'uppercase' }}>← Back</Link>
      <div style={{ marginTop:'60px' }}>
        <h1 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(48px,8vw,96px)', fontWeight:300, letterSpacing:'-0.02em', lineHeight:1, color:'var(--color-text-primary)' }}>{project.title}</h1>
        <p style={{ fontFamily:'var(--font-ui)', fontSize:'14px', letterSpacing:'0.15em', textTransform:'uppercase', color:'var(--color-text-secondary)', marginTop:'12px' }}>{project.category} · {project.year}</p>
        {project.description && <p style={{ fontFamily:'var(--font-ui)', fontSize:'18px', lineHeight:1.8, color:'var(--color-text-secondary)', maxWidth:'600px', marginTop:'40px' }}>{project.description}</p>}
        {project.technologies && <div style={{ marginTop:'32px' }}><p style={{ fontFamily:'var(--font-ui)', fontSize:'12px', letterSpacing:'0.1em', textTransform:'uppercase', color:'var(--color-text-muted)' }}>Technologies</p><div style={{ display:'flex', flexWrap:'wrap', gap:'8px', marginTop:'8px' }}>{project.technologies.map(t => <span key={t} style={{ fontFamily:'var(--font-ui)', fontSize:'13px', color:'var(--color-text-secondary)', border:'1px solid var(--color-text-muted)', padding:'4px 12px', borderRadius:'4px' }}>{t}</span>)}</div></div>}
        {project.role && <p style={{ fontFamily:'var(--font-ui)', fontSize:'14px', color:'var(--color-text-secondary)', marginTop:'24px' }}><strong>Role:</strong> {project.role}</p>}
      </div>
    </div>
  );
};
export default ProjectCaseStudy;
