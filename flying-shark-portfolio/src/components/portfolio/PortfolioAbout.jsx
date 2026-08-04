import { personal } from '../../data/personal';
const PortfolioAbout = () => {
  return (
    <div style={{ padding: '80px 40px' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, marginBottom: '48px', maxWidth: '900px', margin: '0 auto 48px' }}>About</h2>
      <div className="about-grid">
        <div style={{ borderLeft: '2px solid var(--color-gold)', paddingLeft: '20px', maxWidth: '220px' }}>
          <p style={{ fontFamily: 'var(--font-display)', fontStyle: 'italic', fontSize: '20px', lineHeight: 1.5, color: 'var(--color-text-primary)' }}>
            “{personal.tagline}”
          </p>
        </div>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '18px', lineHeight: 1.8, color: 'var(--color-text-secondary)' }}>
          {personal.about}
        </p>
      </div>
    </div>
  );
};
export default PortfolioAbout;
