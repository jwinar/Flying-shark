import { personal } from '../../data/personal';
const PortfolioContact = () => {
  return <div style={{ padding:'80px 40px', maxWidth:'600px', margin:'0 auto', textAlign:'center' }}>
    <h2 style={{ fontFamily:'var(--font-display)', fontSize:'clamp(32px,4vw,48px)', fontWeight:300, marginBottom:'24px' }}>Contact</h2>
    <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily:'var(--font-ui)', fontSize:'18px', color:'var(--color-gold)', textDecoration:'none', borderBottom:'1px solid var(--color-gold)', paddingBottom:'4px' }}>LinkedIn</a>
  </div>;
};
export default PortfolioContact;
