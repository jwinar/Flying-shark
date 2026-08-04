import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap } from '../../animations/core/gsap';
import { personal } from '../../data/personal';

const PortfolioHero = () => {
  const ref = useRef(null);
  useGSAP(() => { gsap.from(ref.current, { opacity: 0, y: 40, duration: 1.5 }); }, []);
  return (
    <div ref={ref} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '140px 40px 60px' }}>
      <div className="hero-grid">
        <div className="hero-portrait">
          <img src="/assets/images/justin-portrait.jpg" alt={personal.name} />
        </div>
        <div>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: '13px', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--color-gold)', marginBottom: '20px' }}>
            {personal.professionalHeadline} · {personal.location}
          </p>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(36px,6vw,84px)', fontWeight: 300, letterSpacing: '-0.02em', lineHeight: 1.03, color: 'var(--color-text-primary)' }}>
            {personal.name}
          </h1>
          <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(15px,1.3vw,19px)', color: 'var(--color-text-secondary)', maxWidth: '480px', marginTop: '28px', lineHeight: 1.7 }}>
            {personal.summary}
          </p>
          <div className="hero-cta" style={{ display: 'flex', gap: '32px', marginTop: '40px' }}>
            <a href="#work" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-primary)', textDecoration: 'none', borderBottom: '1px solid var(--color-text-primary)', paddingBottom: '4px' }}>
              View Work
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" style={{ fontFamily: 'var(--font-ui)', fontSize: '12px', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--color-text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '4px' }}>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioHero;
