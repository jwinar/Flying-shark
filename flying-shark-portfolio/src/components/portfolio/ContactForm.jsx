import { useState } from 'react';

const ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;

const inputStyle = {
  width: '100%',
  background: 'transparent',
  border: 'none',
  borderBottom: '1px solid var(--pf-line)',
  color: 'var(--pf-ink)',
  fontFamily: 'var(--pf-body)',
  fontSize: '16px',
  padding: '10px 2px',
  outline: 'none',
};

const labelStyle = {
  display: 'block',
  fontFamily: 'var(--pf-body)',
  fontSize: '11px',
  fontWeight: 700,
  letterSpacing: '0.12em',
  textTransform: 'uppercase',
  color: 'var(--pf-ink-soft)',
  marginBottom: '6px',
};

const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    if (form.botcheck.checked) return;

    if (!ACCESS_KEY) {
      setStatus('error');
      setErrorMsg('This form isn’t connected yet — reach out on LinkedIn in the meantime.');
      return;
    }

    setStatus('sending');
    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject: 'New message from flying-shark-portfolio',
          from_name: form.name.value,
          name: form.name.value,
          email: form.email.value,
          message: form.message.value,
        }),
      });
      const data = await res.json();
      if (data.success) {
        setStatus('success');
        form.reset();
      } else {
        setStatus('error');
        setErrorMsg(data.message || 'Something went wrong — please try again.');
      }
    } catch {
      setStatus('error');
      setErrorMsg('Network error — please try again.');
    }
  };

  if (status === 'success') {
    return (
      <p style={{ fontFamily: 'var(--pf-body)', fontSize: '16px', fontWeight: 600, color: 'var(--pf-teal-ink)', textAlign: 'center', padding: '40px 0' }}>
        Message sent — thanks for reaching out. I’ll reply as soon as I can.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '28px', textAlign: 'left' }}>
      <input type="checkbox" name="botcheck" tabIndex="-1" autoComplete="off" style={{ position: 'absolute', left: '-9999px', width: '1px', height: '1px', opacity: 0 }} />

      <div>
        <label style={labelStyle} htmlFor="contact-name">Name</label>
        <input id="contact-name" name="name" type="text" required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle} htmlFor="contact-email">Email</label>
        <input id="contact-email" name="email" type="email" required style={inputStyle} />
      </div>

      <div>
        <label style={labelStyle} htmlFor="contact-message">Message</label>
        <textarea id="contact-message" name="message" required rows={4} style={{ ...inputStyle, resize: 'vertical', fontFamily: 'var(--pf-body)' }} />
      </div>

      {status === 'error' && (
        <p style={{ fontFamily: 'var(--pf-body)', fontSize: '13px', color: 'var(--pf-crimson-ink)' }}>{errorMsg}</p>
      )}

      <button type="submit" disabled={status === 'sending'} className="pf-btn pf-btn--solid pf-pressable" style={{ alignSelf: 'flex-start' }}>
        {status === 'sending' ? 'Sending…' : 'Send Message'}
      </button>
    </form>
  );
};
export default ContactForm;
