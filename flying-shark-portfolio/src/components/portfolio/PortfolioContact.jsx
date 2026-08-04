import { personal } from '../../data/personal';
import ContactForm from './ContactForm';

const PortfolioContact = () => {
  return (
    <div style={{ padding: '80px 40px 40px', maxWidth: '520px', margin: '0 auto', textAlign: 'center' }}>
      <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,4vw,48px)', fontWeight: 300, marginBottom: '16px' }}>Contact</h2>
      <p style={{ fontFamily: 'var(--font-ui)', fontSize: '15px', color: 'var(--color-text-secondary)', marginBottom: '48px' }}>
        Have a role, a project, or just want to talk data? Send a message below.
      </p>
      <ContactForm />
      <a
        href={personal.social.linkedin}
        target="_blank"
        rel="noopener noreferrer"
        style={{ display: 'inline-block', marginTop: '48px', fontFamily: 'var(--font-ui)', fontSize: '13px', color: 'var(--color-text-secondary)', textDecoration: 'none', borderBottom: '1px solid var(--color-text-muted)', paddingBottom: '3px' }}
      >
        or find me on LinkedIn
      </a>
    </div>
  );
};
export default PortfolioContact;
