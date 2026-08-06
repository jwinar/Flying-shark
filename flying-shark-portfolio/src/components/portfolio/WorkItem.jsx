import { useRef } from 'react';
import { gsap } from '../../animations/core/gsap';

const PLACEHOLDER_COUNT = 2;

const PreviewTile = ({ label }) => (
  <div
    style={{
      flex: '1 1 0',
      aspectRatio: '16 / 10',
      borderRadius: '6px',
      background: 'linear-gradient(135deg, var(--color-surface) 0%, #1a1a1a 100%)',
      border: '1px solid var(--color-text-muted)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      overflow: 'hidden',
    }}
  >
    <span
      style={{
        fontFamily: 'var(--font-ui)',
        fontSize: '11px',
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--color-text-muted)',
      }}
    >
      {label}
    </span>
  </div>
);

const canHover = () => typeof window !== 'undefined' && window.matchMedia('(hover: hover)').matches;

const WorkItem = ({ project }) => {
  const previewRef = useRef(null);

  const handleEnter = () => {
    if (!canHover()) return;
    gsap.to(previewRef.current, {
      height: previewRef.current.scrollHeight,
      opacity: 1,
      marginTop: 24,
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
    <div
      data-hover
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      style={{ marginBottom: '80px', borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '40px' }}
    >
      <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(28px,3vw,48px)', fontWeight: 300 }}>{project.title}</h3>
      <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-text-secondary)', fontSize: '14px', marginTop: '8px' }}>
        {project.category} · {project.year}
      </p>
      <p style={{ fontFamily: 'var(--font-ui)', color: 'var(--color-text-secondary)', maxWidth: '600px', marginTop: '12px' }}>
        {project.description}
      </p>

      <div
        ref={previewRef}
        style={{ height: 0, opacity: 0, overflow: 'hidden', display: 'flex', alignItems: 'flex-start', gap: '16px' }}
      >
        {Array.from({ length: PLACEHOLDER_COUNT }).map((_, i) => (
          <PreviewTile key={i} label="Preview coming soon" />
        ))}
      </div>
    </div>
  );
};

export default WorkItem;
