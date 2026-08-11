import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { personal } from '../../data/personal';

const codeFor = (exp) => {
  const words = exp.company.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean);
  const significant = words.filter((w) => /^[A-Z]/.test(w));
  const source = significant.length ? significant : words;
  const initials = source.length > 1
    ? source.map((w) => w[0]).join('').slice(0, 3).toUpperCase()
    : source[0].slice(0, 3).toUpperCase();
  const yearMatch = exp.period.match(/\d{4}/);
  return `${initials}·${yearMatch ? yearMatch[0].slice(-2) : '--'}`;
};

const PortfolioExperience = () => {
  const ref = useRef(null);
  useGSAP(() => {
    flipInReveal('.pf-exp-reveal', { trigger: ref.current, start: 'top 80%' });
  }, []);

  return (
    <div ref={ref} className="pf-section">
      <div className="pf-section-inner" style={{ maxWidth: '900px' }}>
        <h2 className="pf-heading" style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: '40px' }}>
          Experience
        </h2>
        <div className="pf-panel">
          {personal.experience.map((exp, i) => (
            <div key={i} className="pf-row pf-row-experience pf-exp-reveal">
              <span className="pf-row-code">{codeFor(exp)}</span>
              <div>
                <h3 className="pf-heading" style={{ fontSize: '20px', letterSpacing: '-0.01em' }}>{exp.role}</h3>
                <p style={{ fontFamily: 'var(--pf-body)', fontSize: '14px', fontWeight: 600, color: 'var(--pf-ink-soft)', marginTop: '2px' }}>
                  {exp.company}
                </p>
                <p className="pf-prose" style={{ fontSize: '14px', marginTop: '8px' }}>{exp.description}</p>
              </div>
              <span className="pf-row-period">{exp.period}</span>
              <span className={`pf-tag pf-tag--${i === 0 ? 'amber' : 'teal'}`}>{i === 0 ? 'Most Recent' : 'Settled'}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default PortfolioExperience;
