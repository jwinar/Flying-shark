import { projects } from '../../data/projects';
import { personal } from '../../data/personal';
import WorkItem from './WorkItem';
const PortfolioWork = () => {
  return <div style={{ padding:'80px 40px', maxWidth:'1200px', margin:'0 auto' }}>
    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(36px,5vw,60px)', fontWeight:300, marginBottom:'60px' }}>Selected Work</h2>
    {projects.map(p => <WorkItem key={p.id} project={p} />)}
    <div style={{ marginTop:'60px' }}>
      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(24px,2.5vw,36px)', fontWeight:300 }}>Coming Soon</h3>
      {personal.upcomingProjects.map(item => <div key={item.title} style={{ marginTop:'16px', opacity:0.6 }}><p style={{ fontFamily:'var(--font-ui)', fontSize:'18px' }}>{item.title} <span style={{ fontSize:'12px', color:'var(--color-text-muted)' }}>{item.timeline}</span></p><p style={{ fontFamily:'var(--font-ui)', fontSize:'14px', color:'var(--color-text-secondary)' }}>{item.description}</p></div>)}
    </div>
  </div>;
};
export default PortfolioWork;
