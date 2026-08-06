import { useAmbientAudio } from '../../hooks/useAmbientAudio';

const AudioToggle = () => {
  const { enabled, toggle } = useAmbientAudio();

  return (
    <button
      onClick={toggle}
      aria-label={enabled ? 'Mute ambient music' : 'Unmute ambient music'}
      aria-pressed={enabled}
      style={{
        position: 'fixed',
        bottom: '40px',
        right: '40px',
        zIndex: 60,
        width: '44px',
        height: '44px',
        borderRadius: '50%',
        border: '1px solid rgba(255,255,255,0.12)',
        background: 'rgba(8,8,8,0.8)',
        backdropFilter: 'blur(10px)',
        color: 'var(--color-text-secondary)',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {enabled ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M15.5 8.5a5 5 0 0 1 0 7" />
          <path d="M18.5 5.5a9 9 0 0 1 0 13" />
        </svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M23 9l-6 6" />
          <path d="M17 9l6 6" />
        </svg>
      )}
    </button>
  );
};

export default AudioToggle;
