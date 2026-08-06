import { useEffect, useRef } from 'react';
import { gsap } from '../../animations/core/gsap';
import { useAmbientAudio } from '../../hooks/useAmbientAudio';

const AmbientTrack = ({ src, inView, volume = 0.5 }) => {
  const audioRef = useRef(null);
  const { enabled } = useAmbientAudio();

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (enabled && inView) {
      audio.play().catch(() => {});
      gsap.to(audio, { volume, duration: 1.2, ease: 'power1.out', overwrite: true });
    } else {
      gsap.to(audio, {
        volume: 0,
        duration: 0.8,
        ease: 'power1.in',
        overwrite: true,
        onComplete: () => audio.pause(),
      });
    }
  }, [enabled, inView, volume]);

  return <audio ref={audioRef} src={src} loop preload="none" />;
};

export default AmbientTrack;
