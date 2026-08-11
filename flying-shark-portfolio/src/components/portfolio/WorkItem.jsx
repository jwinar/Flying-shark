import { useRef } from 'react';
import { gsap } from '../../animations/core/gsap';

const PLACEHOLDER_COUNT = 2;

const PreviewTile = ({ label }) => (
  <div
    style={{
      flex: '1 1 0',
      aspectRatio: '16 / 10',
      borderRadius: '10px',
      background: 'var(--pf-panel-raised)',
      border: '1px solid var(--pf-line)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--pf-body)',
        fontSize: '11px',
        letterSpacing: '0.15em',
        textTransform: 'uppercase',
        color: 'var(--pf-ink-soft)',
      }}
    >
      {label}
    </span>
  </div>
);

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

const WorkItem = ({ project, code, accent }) => {
  const previewRef = useRef(null);

  const handleEnter = () => {
    if (!canHover()) return;
    gsap.to(previewRef.current, {
      height: previewRef.current.scrollHeight,
      opacity: 1,
      marginTop: 20,
      duration: 0.55,
      ease: 'power3.out',
    });
  };

  const handleLeave = () => {
    if (!canHover()) return;
    gsap.to(previewRef.current, {
      height: 0,
      opacity: 0,
      marginTop: 0,
      duration: 0.4,
      ease: 'power2.in',
    });
  };

  return (
    <div data-hover onMouseEnter={handleEnter} onMouseLeave={handleLeave} className="pf-row pf-row-work pf-work-reveal">
      <span className="pf-row-code">{code}</span>

      <div>
        <h3 className="pf-heading" style={{ fontSize: 'clamp(22px,2.6vw,32px)', letterSpacing: '-0.01em' }}>
          {project.title}
        </h3>
        <p style={{ fontFamily: 'var(--pf-body)', color: 'var(--pf-ink-soft)', fontSize: '13px', fontWeight: 600, marginTop: '4px', letterSpacing: '.04em', textTransform: 'uppercase' }}>
          {project.category} · {project.year}
        </p>
        <p className="pf-prose" style={{ fontSize: '15px', marginTop: '10px' }}>
          {project.description}
        </p>

        <div
          ref={previewRef}
          style={{ height: 0, opacity: 0, overflow: 'hidden', display: 'flex', alignItems: 'flex-start', gap: '14px' }}
        >
          {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
            <PreviewTile key={i} label="Preview coming soon" />
          ))}
        </div>
      </div>

      <span className={`pf-tag pf-tag--${accent}`}>{project.year}</span>
    </div>
  );
};

export default WorkItem;
