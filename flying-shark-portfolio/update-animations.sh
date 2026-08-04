#!/bin/bash
set -e

echo "Updating scene components with full GSAP animations..."

# ========== Silk Component ==========
mkdir -p src/components/cinematic
cat > src/components/cinematic/Silk.jsx << 'EOF'
import { useRef, useEffect } from 'react';
import { gsap } from '../../animations/core/gsap';
import { useReducedMotion } from '../../hooks/useReducedMotion';

const Silk = ({ path, color = '#b31b1b', thickness = 2, opacity = 0.85, length = 1, wind = 0.3, evolution = 'physical' }) => {
  const pathRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) return;
    // Animate silk drawing
    gsap.fromTo(pathRef.current, { strokeDashoffset: 1000 }, { strokeDashoffset: 0, duration: 2, ease: 'power2.out' });
  }, [prefersReducedMotion]);

  return (
    <svg viewBox="0 0 100 100" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 10 }}>
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth={thickness}
        opacity={opacity}
        strokeDasharray="1000"
        strokeDashoffset="1000"
        style={{ filter: 'drop-shadow(0 0 4px rgba(179,27,27,0.3))', vectorEffect: 'non-scaling-stroke' }}
      />
    </svg>
  );
};
export default Silk;
EOF

# ========== GateScene ==========
cat > src/components/scenes/GateScene.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const GateScene = () => {
  const containerRef = useRef(null);
  const leftDoorRef = useRef(null);
  const rightDoorRef = useRef(null);
  const lightRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP((ctx) => {
    // Initial state: doors closed, light off
    gsap.set(leftDoorRef.current, { transformOrigin: 'left center', rotateY: 0 });
    gsap.set(rightDoorRef.current, { transformOrigin: 'right center', rotateY: 0 });
    gsap.set(lightRef.current, { opacity: 0 });

    // Scroll-triggered timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });

    tl.to(leftDoorRef.current, { rotateY: -80, duration: 1, ease: 'power4.inOut' })
      .to(rightDoorRef.current, { rotateY: 80, duration: 1, ease: 'power4.inOut' }, 0)
      .to(lightRef.current, { opacity: 0.8, duration: 1.5, ease: 'power2.out' }, 0.2)
      .to(titleRef.current, { opacity: 0, y: -30, duration: 0.8, ease: 'power2.out' }, 0.3);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', overflow: 'hidden', position: 'relative', perspective: '1200px', background: '#0a0a0a' }}>
      {/* Background glow */}
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(201,168,76,0.1) 0%, transparent 70%)' }} />

      {/* Light behind gate */}
      <div ref={lightRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at center, rgba(255,200,150,0.4) 0%, rgba(255,150,100,0.1) 50%, transparent 80%)', opacity: 0 }} />

      {/* Left Door */}
      <div ref={leftDoorRef} style={{ position: 'absolute', top: '10%', left: '5%', width: '40%', height: '80%', background: 'linear-gradient(135deg, #4a1a1a, #2a0a0a)', borderRight: '2px solid #8a6a3a', boxShadow: 'inset -10px 0 30px rgba(0,0,0,0.8)', transformOrigin: 'left center' }}>
        <div style={{ position: 'absolute', top: '30%', left: '30%', width: '40%', height: '40%', border: '2px solid #c9a84c', borderRadius: '4px', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '15%', left: '40%', width: '20%', height: '10%', background: '#c9a84c', borderRadius: '50%', opacity: 0.2 }} />
      </div>

      {/* Right Door */}
      <div ref={rightDoorRef} style={{ position: 'absolute', top: '10%', right: '5%', width: '40%', height: '80%', background: 'linear-gradient(225deg, #4a1a1a, #2a0a0a)', borderLeft: '2px solid #8a6a3a', boxShadow: 'inset 10px 0 30px rgba(0,0,0,0.8)', transformOrigin: 'right center' }}>
        <div style={{ position: 'absolute', top: '30%', right: '30%', width: '40%', height: '40%', border: '2px solid #c9a84c', borderRadius: '4px', opacity: 0.3 }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '40%', width: '20%', height: '10%', background: '#c9a84c', borderRadius: '50%', opacity: 0.2 }} />
      </div>

      {/* Title */}
      <div ref={titleRef} style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', zIndex: 5 }}>
        <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,80px)', color: '#f0f0f0', letterSpacing: '0.1em', fontWeight: 300 }}>CHINA / 5000 YEARS</h1>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#888', letterSpacing: '0.2em', textTransform: 'uppercase' }}>SCROLL TO ENTER</p>
      </div>

      <Silk path="M 10 80 Q 30 60, 50 70 T 90 50" color="#b31b1b" thickness={3} />
    </div>
  );
};
export default GateScene;
EOF

# ========== LandscapeScene ==========
cat > src/components/scenes/LandscapeScene.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const LandscapeScene = () => {
  const containerRef = useRef(null);
  const mountainsRef = useRef(null);
  const mistRef = useRef(null);
  const textRef = useRef(null);

  useGSAP((ctx) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });
    tl.fromTo(mountainsRef.current, { y: 100, opacity: 0 }, { y: 0, opacity: 1, duration: 2, ease: 'power2.out' })
      .fromTo(mistRef.current, { opacity: 0 }, { opacity: 0.6, duration: 1.5 }, 0.3)
      .fromTo(textRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1 }, 0.6);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a1410' }}>
      <div ref={mountainsRef} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #2a2018 0%, #1a1410 100%)', opacity: 0 }}>
        <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '60%' }} viewBox="0 0 1000 400">
          <path d="M0 400 L100 250 L250 300 L400 150 L600 200 L800 100 L1000 250 L1000 400 Z" fill="#2a2018" />
          <path d="M0 400 L150 320 L300 350 L450 280 L650 330 L850 250 L1000 300 L1000 400 Z" fill="#1a1410" opacity="0.7" />
        </svg>
      </div>
      <div ref={mistRef} style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 80%, rgba(200,180,160,0.2) 0%, transparent 70%)', opacity: 0 }} />
      <div ref={textRef} style={{ position: 'absolute', bottom: '25%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,100px)', color: '#e8dcc8', fontWeight: 300, letterSpacing: '-0.02em' }}>5000 YEARS</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(14px,1.5vw,20px)', color: '#888', letterSpacing: '0.2em' }}>OF CIVILIZATION</p>
      </div>
      <Silk path="M 20 10 Q 40 30, 60 20 T 90 40" color="#b31b1b" thickness={2} wind={0.5} />
    </div>
  );
};
export default LandscapeScene;
EOF

# ========== QinScene ==========
cat > src/components/scenes/QinScene.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const QinScene = () => {
  const containerRef = useRef(null);
  const charRef = useRef(null);
  const titleRef = useRef(null);
  const dateRef = useRef(null);

  useGSAP((ctx) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });
    tl.fromTo(charRef.current, { scale: 0.5, opacity: 0, clipPath: 'inset(0 100% 0 0)' }, { scale: 1, opacity: 1, clipPath: 'inset(0 0% 0 0)', duration: 2, ease: 'power2.out' })
      .fromTo(titleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1 }, 0.5)
      .fromTo(dateRef.current, { opacity: 0 }, { opacity: 1, duration: 0.8 }, 0.8);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#1a0a05' }}>
      <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(ellipse at 50% 50%, rgba(201,168,76,0.05) 0%, transparent 70%)' }} />
      <div ref={charRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', fontSize: 'clamp(120px,30vw,400px)', fontFamily: 'var(--font-display)', color: '#c9a84c', opacity: 0.8, textShadow: '0 0 60px rgba(201,168,76,0.1)' }}>秦</div>
      <div ref={titleRef} style={{ position: 'absolute', bottom: '30%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h3 style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(16px,2vw,24px)', color: '#888', letterSpacing: '0.2em' }}>QIN DYNASTY</h3>
      </div>
      <div ref={dateRef} style={{ position: 'absolute', bottom: '20%', left: '50%', transform: 'translateX(-50%)', opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#555', letterSpacing: '0.1em' }}>221 – 206 BCE</p>
      </div>
      <Silk path="M 10 90 Q 30 70, 50 80 T 90 60" color="#b31b1b" thickness={2.5} wind={0.3} />
    </div>
  );
};
export default QinScene;
EOF

# ========== SilkRoadScene ==========
cat > src/components/scenes/SilkRoadScene.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const SilkRoadScene = () => {
  const containerRef = useRef(null);
  const desertRef = useRef(null);
  const caravanRef = useRef(null);
  const titleRef = useRef(null);

  useGSAP((ctx) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });
    tl.fromTo(desertRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
      .fromTo(caravanRef.current, { x: -200, opacity: 0 }, { x: 200, opacity: 1, duration: 3, ease: 'power1.inOut' }, 0.3)
      .fromTo(titleRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 1.5 }, 0.8);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#2a1a0a' }}>
      <div ref={desertRef} style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, #4a3a2a 0%, #3a2a1a 50%, #2a1a0a 100%)', opacity: 0 }}>
        <svg style={{ position: 'absolute', bottom: 0, width: '100%', height: '40%' }} viewBox="0 0 1000 200">
          <path d="M0 200 L150 150 L300 180 L500 120 L700 160 L900 130 L1000 200 Z" fill="#3a2a1a" />
          <path d="M0 200 L100 170 L250 190 L400 160 L600 190 L800 170 L1000 200 Z" fill="#4a3a2a" opacity="0.5" />
        </svg>
      </div>
      <div ref={caravanRef} style={{ position: 'absolute', bottom: '20%', left: '10%', opacity: 0 }}>
        <svg width="80" height="40" viewBox="0 0 80 40">
          <circle cx="10" cy="30" r="4" fill="#c9a84c" />
          <circle cx="30" cy="30" r="4" fill="#c9a84c" />
          <circle cx="50" cy="30" r="4" fill="#c9a84c" />
          <circle cx="70" cy="30" r="4" fill="#c9a84c" />
          <rect x="8" y="20" width="4" height="10" fill="#888" />
          <rect x="28" y="20" width="4" height="10" fill="#888" />
          <rect x="48" y="20" width="4" height="10" fill="#888" />
          <rect x="68" y="20" width="4" height="10" fill="#888" />
        </svg>
      </div>
      <div ref={titleRef} style={{ position: 'absolute', top: '30%', left: '50%', transform: 'translateX(-50%)', textAlign: 'center', opacity: 0 }}>
        <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(40px,8vw,90px)', color: '#c9a84c', fontWeight: 300, letterSpacing: '-0.02em' }}>丝绸之路</h2>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(14px,1.5vw,20px)', color: '#888', letterSpacing: '0.2em' }}>THE SILK ROAD</p>
      </div>
      <Silk path="M 5 80 Q 30 40, 60 60 T 95 30" color="#b31b1b" thickness={2} wind={0.8} />
    </div>
  );
};
export default SilkRoadScene;
EOF

# ========== ModernTransition ==========
cat > src/components/scenes/ModernTransition.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const ModernTransition = () => {
  const containerRef = useRef(null);
  const cityRef = useRef(null);
  const textRef = useRef(null);

  useGSAP((ctx) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });
    tl.fromTo(cityRef.current, { opacity: 0, scale: 1.1 }, { opacity: 1, scale: 1, duration: 2, ease: 'power2.out' })
      .fromTo(textRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1.5 }, 0.6);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '100vh', position: 'relative', overflow: 'hidden', background: '#0a0a0a' }}>
      <div ref={cityRef} style={{ position: 'absolute', inset: 0, opacity: 0 }}>
        <svg style={{ width: '100%', height: '100%' }} viewBox="0 0 1000 600" preserveAspectRatio="xMidYMid slice">
          <rect x="100" y="200" width="60" height="400" fill="#1a1a1a" />
          <rect x="200" y="150" width="80" height="450" fill="#222" />
          <rect x="350" y="100" width="70" height="500" fill="#1a1a1a" />
          <rect x="500" y="250" width="50" height="350" fill="#222" />
          <rect x="600" y="180" width="90" height="420" fill="#1a1a1a" />
          <rect x="750" y="120" width="60" height="480" fill="#222" />
          <rect x="850" y="220" width="100" height="380" fill="#1a1a1a" />
          {/* Windows */}
          {[110,130,150, 210,230,250,270, 360,380,400, 510, 610,630,650,670, 760,780, 860,880,900,920].map((x, i) => (
            <rect key={i} x={x} y={250 + i*15 % 200} width="10" height="15" fill="#c9a84c" opacity="0.3" />
          ))}
        </svg>
      </div>
      <div ref={textRef} style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', textAlign: 'center', opacity: 0 }}>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: 'clamp(20px,3vw,40px)', color: '#888', letterSpacing: '0.3em' }}>MODERN</p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#555', letterSpacing: '0.1em', marginTop: '12px' }}>PRESENT DAY</p>
      </div>
      <Silk path="M 10 50 Q 30 30, 60 40 T 90 20" color="#b31b1b" thickness={1.5} wind={0.6} evolution="abstract" />
    </div>
  );
};
export default ModernTransition;
EOF

# ========== PortfolioTransition ==========
cat > src/components/scenes/PortfolioTransition.jsx << 'EOF'
import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { gsap, ScrollTrigger } from '../../animations/core/gsap';
import Silk from '../cinematic/Silk';

const PortfolioTransition = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const threadRef = useRef(null);

  useGSAP((ctx) => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        end: '+=100%',
        scrub: 1.5,
        pin: true,
        anticipatePin: 1,
      }
    });
    tl.fromTo(textRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1.5, ease: 'power2.out' })
      .to(textRef.current, { opacity: 0.5, duration: 0.5 }, 1);
  }, []);

  return (
    <div ref={containerRef} style={{ height: '60vh', position: 'relative', overflow: 'hidden', background: '#080808', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div ref={textRef} style={{ textAlign: 'center' }}>
        <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(24px,3vw,48px)', color: '#888', letterSpacing: '0.05em' }}>One continuous thread.</p>
        <p style={{ fontFamily: 'var(--font-ui)', fontSize: '14px', color: '#444', marginTop: '8px' }}>From history to creation</p>
      </div>
      <Silk path="M 20 80 Q 40 60, 60 70 T 80 40" color="#c9a84c" thickness={1.5} wind={0.2} />
    </div>
  );
};
export default PortfolioTransition;
EOF

echo "✅ All scene components updated with full GSAP animations."
echo "Run 'npm run build' and redeploy to Vercel."
