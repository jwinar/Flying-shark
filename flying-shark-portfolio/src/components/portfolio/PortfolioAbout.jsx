import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { personal } from '../../data/personal';

const PortfolioAbout = () => {
  const ref = useRef(null);
  useGSAP(() => {
    flipInReveal('.pf-about-reveal', { trigger: ref.current, start: 'top 80%' });
  }, []);

  return (
    <div ref={ref} className="pf-section">
      <div className="pf-section-inner" style={{ maxWidth: '900px' }}>
        <h2 className="pf-about-reveal pf-heading" style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: '40px' }}>
          About
        </h2>
        <div className="about-grid">
          <div className="pf-about-reveal pf-stamp" style={{ maxWidth: '270px' }}>
            <p style={{ fontFamily: 'var(--pf-display)', fontWeight: 700, fontSize: '21px', lineHeight: 1.35, color: 'var(--pf-ink)' }}>
              “{personal.tagline}”
            </p>
          </div>
          <p className="pf-about-reveal pf-prose" style={{ fontSize: '18px' }}>
            {personal.about}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PortfolioAbout;
