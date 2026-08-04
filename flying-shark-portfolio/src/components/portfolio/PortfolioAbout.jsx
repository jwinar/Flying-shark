import { personal } from '../../data/personal';
const PortfolioAbout = () => {
  return <div style={{ padding:'80px 40px', maxWidth:'800px', margin:'0 auto' }}>
    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4vw,48px)', fontWeight:300, marginBottom:'32px' }}>About</h2>
    <p style={{ fontFamily:'var(--font-ui)', fontSize:'18px', lineHeight:1.8, color:'var(--color-text-secondary)' }}>{personal.about}</p>
  </div>;
};
export default PortfolioAbout;
