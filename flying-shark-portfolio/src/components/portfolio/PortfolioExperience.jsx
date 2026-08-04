import { personal } from '../../data/personal';
const PortfolioExperience = () => {
  return <div style={{ padding:'80px 40px', maxWidth:'900px', margin:'0 auto' }}>
    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4vw,48px)', fontWeight:300, marginBottom:'48px' }}>Experience</h2>
    {personal.experience.map((exp, i) => <div key={i} style={{ marginBottom:'40px', borderLeft:'2px solid var(--color-text-muted)', paddingLeft:'24px' }}>
      <p style={{ fontFamily:'var(--font-ui)', fontSize:'14px', color:'var(--color-text-muted)', letterSpacing:'0.1em' }}>{exp.period}</p>
      <h3 style={{ fontFamily:'var(--font-display)', fontSize:'24px', fontWeight:300, marginTop:'4px' }}>{exp.role}</h3>
      <p style={{ fontFamily:'var(--font-ui)', fontSize:'16px', color:'var(--color-text-secondary)' }}>{exp.company}</p>
      <p style={{ fontFamily:'var(--font-ui)', fontSize:'15px', color:'var(--color-text-secondary)', marginTop:'8px', lineHeight:1.6 }}>{exp.description}</p>
    </div>)}
  </div>;
};
export default PortfolioExperience;
