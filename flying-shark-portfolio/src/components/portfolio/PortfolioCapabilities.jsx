import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { personal } from '../../data/personal';

const labelStyle = {
  fontFamily: 'var(--pf-body)',
  fontSize: '12px',
  fontWeight: 700,
  letterSpacing: '.1em',
  textTransform: 'uppercase',
  color: 'var(--pf-ink-soft)',
};

const PortfolioCapabilities = () => {
  const ref = useRef(null);
  useGSAP(() => {
    flipInReveal('.pf-cap-reveal', { trigger: ref.current, start: 'top 80%' });
  }, []);

  return (
    <div ref={ref} className="pf-section">
      <div className="pf-section-inner" style={{ maxWidth: '900px' }}>
        <h2 className="pf-cap-reveal pf-heading" style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: '40px' }}>
          Capabilities
        </h2>

        <div className="pf-cap-reveal pf-panel" style={{ padding: '32px' }}>
          <h4 style={labelStyle}>Technical</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '12px 0 28px' }}>
            {personal.skills.technical.map((s) => (
              <span key={s} className="pf-tag pf-tag--teal">{s}</span>
            ))}
          </div>

          <h4 style={labelStyle}>Soft Skills</h4>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', margin: '12px 0 0' }}>
            {personal.skills.soft.map((s) => (
              <span key={s} className="pf-tag pf-tag--neutral">{s}</span>
            ))}
          </div>
        </div>

        <div className="pf-cap-reveal pf-panel" style={{ marginTop: '24px' }}>
          <h4 style={{ ...labelStyle, padding: '24px 28px 4px' }}>Certifications</h4>
          {personal.certifications.map((c, i) => (
            <div key={c} className="pf-row" style={{ gridTemplateColumns: '32px 1fr' }}>
              <span className="pf-row-code">{String(i + 1).padStart(2, '0')}</span>
              <p style={{ fontFamily: 'var(--pf-body)', fontSize: '15px', color: 'var(--pf-ink)', lineHeight: 1.5 }}>{c}</p>
            </div>
          ))}
        </div>

        <div className="pf-cap-reveal pf-stamp" style={{ marginTop: '24px' }}>
          <h4 style={labelStyle}>Education</h4>
          <p style={{ fontFamily: 'var(--pf-display)', fontWeight: 700, fontSize: '21px', marginTop: '10px', color: 'var(--pf-ink)' }}>
            {personal.education.degree} — {personal.education.field}
          </p>
          <p style={{ fontFamily: 'var(--pf-body)', fontSize: '14px', color: 'var(--pf-ink-soft)', marginTop: '6px' }}>
            {personal.education.institution} · {personal.education.year}
          </p>
        </div>
      </div>
    </div>
  );
};
export default PortfolioCapabilities;
