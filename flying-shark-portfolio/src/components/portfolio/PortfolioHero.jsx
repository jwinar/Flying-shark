import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { personal } from '../../data/personal';

const initials = (name) => name.split(' ').map((w) => w[0]).join('');

const PortfolioHero = () => {
  const ref = useRef(null);

  useGSAP(() => {
    flipInReveal('.pf-hero-reveal', { trigger: ref.current, start: 'top 80%' });
  }, []);

  return (
    <div ref={ref} style={{ minHeight: '90vh', display: 'flex', alignItems: 'center', padding: '140px 40px 60px' }}>
      <div className="hero-grid">
        <div className="hero-portrait pf-hero-reveal">
          <div className="pf-id-card">
            <img src="/assets/images/justin-portrait.jpg" alt={personal.name} />
          </div>
          <p
            style={{
              fontFamily: 'var(--pf-body)',
              fontSize: '11px',
              fontWeight: 600,
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
              color: 'var(--pf-ink-soft)',
              textAlign: 'center',
              marginTop: '14px',
            }}
          >
            {initials(personal.name)} · Boarding
          </p>
        </div>

        <div>
          <h1 className="pf-hero-reveal pf-heading" style={{ fontSize: 'clamp(40px,7vw,96px)' }}>
            {personal.name}
          </h1>

          <div className="pf-hero-reveal" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '22px' }}>
            <span className="pf-tag pf-tag--amber">{personal.professionalHeadline}</span>
            <span className="pf-tag pf-tag--neutral">{personal.location}</span>
          </div>

          <p className="pf-hero-reveal pf-prose" style={{ fontSize: 'clamp(15px,1.3vw,19px)', marginTop: '28px' }}>
            {personal.summary}
          </p>

          <div className="pf-hero-reveal hero-cta" style={{ display: 'flex', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
            <a href="#work" className="pf-btn pf-btn--solid pf-pressable">
              View Work
            </a>
            <a href={personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="pf-btn pf-btn--outline pf-pressable">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioHero;
