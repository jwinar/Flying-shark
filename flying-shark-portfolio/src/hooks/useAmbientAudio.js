import { createContext, useContext, useEffect, useRef, useState } from 'react';

const AudioContext = createContext(null);

const STORAGE_KEY = 'flying-shark-audio-enabled';

export const AmbientAudioProvider = ({ children }) => {
  const [enabled, setEnabled] = useState(false);
  const activeTrackRef = useRef(null);

  useEffect(() => {
    if (localStorage.getItem(STORAGE_KEY) === 'true') setEnabled(true);
  }, []);

  const toggle = () => {
    setEnabled((prev) => {
      const next = !prev;
      localStorage.setItem(STORAGE_KEY, String(next));
      return next;
    });
  };

  const registerActiveTrack = (audioEl) => {
    activeTrackRef.current = audioEl;
  };

  return (
    <AudioContext.Provider value={{ enabled, toggle, registerActiveTrack, activeTrackRef }}>
      {children}
    </AudioContext.Provider>
  );
};

export const useAmbientAudio = () => {
  const ctx = useContext(AudioContext);
  if (!ctx) throw new Error('useAmbientAudio must be used within AmbientAudioProvider');
  return ctx;
};
