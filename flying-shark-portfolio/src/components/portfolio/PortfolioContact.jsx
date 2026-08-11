import { useRef } from 'react';
import { useGSAP } from '../../hooks/useGSAP';
import { flipInReveal } from '../../animations/portfolioReveal';
import { personal } from '../../data/personal';
import ContactForm from './ContactForm';

const PortfolioContact = () => {
  const ref = useRef(null);
  useGSAP(() => {
    flipInReveal('.pf-contact-reveal', { trigger: ref.current, start: 'top 85%' });
  }, []);

  return (
    <div ref={ref} className="pf-section" style={{ paddingBottom: '64px' }}>
      <div className="pf-section-inner" style={{ maxWidth: '560px', textAlign: 'center' }}>
        <h2 className="pf-contact-reveal pf-heading" style={{ fontSize: 'clamp(32px,4vw,48px)', marginBottom: '16px' }}>
          Contact
        </h2>
        <p className="pf-contact-reveal pf-prose" style={{ fontSize: '15px', margin: '0 auto 40px' }}>
          Have a role, a project, or just want to talk data? Send a message below.
        </p>

        <div className="pf-contact-reveal pf-panel pf-panel--alert" style={{ padding: '40px 36px', textAlign: 'left' }}>
          <ContactForm />
        </div>

        <a
          href={personal.social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="pf-contact-reveal pf-pressable"
          style={{
            display: 'inline-block',
            marginTop: '32px',
            fontFamily: 'var(--pf-body)',
            fontSize: '13px',
            fontWeight: 600,
            color: 'var(--pf-ink-soft)',
            textDecoration: 'none',
            borderBottom: '1px solid var(--pf-line)',
            paddingBottom: '3px',
          }}
        >
          or find me on LinkedIn
        </a>
      </div>
    </div>
  );
};
export default PortfolioContact;
