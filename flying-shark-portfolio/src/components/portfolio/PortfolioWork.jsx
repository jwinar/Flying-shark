import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { projects } from '../../data/projects';
import { personal } from '../../data/personal';
import WorkItem from './WorkItem';

const codeFor = (project) => {
  const words = project.title.replace(/[^a-zA-Z\s]/g, '').split(/\s+/).filter(Boolean);
  const letters = words.length > 1 ? words.map((w) => w[0]).join('').slice(0, 3) : words[0].slice(0, 3);
  return `${letters.toUpperCase()}·${String(project.year).slice(-2)}`;
};

const PortfolioWork = () => {
  const ref = useRef(null);
  useGSAP(() => {
    flipInReveal('.pf-work-reveal', { trigger: ref.current, start: 'top 80%' });
  }, []);

  return (
    <div ref={ref} className="pf-section">
      <div className="pf-section-inner">
        <h2 className="pf-heading" style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: '40px' }}>Selected Work</h2>

        <div className="pf-panel">
          {projects.map((p, i) => (
            <WorkItem key={p.id} project={p} code={codeFor(p)} accent={i === 0 ? 'amber' : 'teal'} />
          ))}
        </div>

        <div style={{ marginTop: '64px' }}>
          <h3 className="pf-heading" style={{ fontSize: 'clamp(22px,2.5vw,32px)', marginBottom: '20px' }}>Coming Soon</h3>
          <div className="pf-panel">
            {personal.upcomingProjects.map((item) => (
              <div key={item.title} className="pf-row" style={{ gridTemplateColumns: '1fr auto', opacity: 0.75 }}>
                <div>
                  <p style={{ fontFamily: 'var(--pf-body)', fontWeight: 600, fontSize: '16px', color: 'var(--pf-ink)' }}>{item.title}</p>
                  <p className="pf-prose" style={{ fontSize: '14px', marginTop: '4px' }}>{item.description}</p>
                </div>
                <span className="pf-tag pf-tag--neutral">{item.timeline}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default PortfolioWork;
