import { useState } from 'react';
import { Check, ArrowRight } from 'lucide-react';

export default function NewsletterForm({ variant = 'dark' }) {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'success' | 'error'
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@') || !email.includes('.')) {
      setStatus('error');
      setErrorMsg('Please enter a valid email address.');
      return;
    }

    setStatus('success');
    setErrorMsg('');
  };

  const isDark = variant === 'dark';

  if (status === 'success') {
    return (
      <div className={`p-4 rounded-3 text-center ${isDark ? 'bg-secondary text-dark' : 'bg-light text-dark'}`}>
        <div className="d-inline-flex p-2 rounded-circle bg-success text-white mb-2">
          <Check size={20} />
        </div>
        <h5 className="font-serif mb-1">Welcome to the ATELIER Journal</h5>
        <p className="small text-muted mb-0">
          We've sent a 10% welcome privilege code to <strong>{email}</strong>.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="d-flex flex-column flex-sm-row gap-2">
        <div className="position-relative flex-grow-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === 'error') setStatus('idle');
            }}
            placeholder="Enter your email address"
            className="form-control-atelier"
            style={{
              backgroundColor: isDark ? 'rgba(255, 255, 255, 0.08)' : '#FFFFFF',
              color: isDark ? '#FFFFFF' : '#1A1A1A',
              borderColor: status === 'error' ? 'var(--color-error)' : isDark ? 'rgba(255, 255, 255, 0.2)' : 'var(--color-border)',
            }}
            aria-label="Email address for newsletter"
            required
          />
        </div>
        <button
          type="submit"
          className={isDark ? 'btn-atelier-accent' : 'btn-atelier-primary'}
          aria-label="Subscribe to newsletter"
        >
          <span>Subscribe</span>
          <ArrowRight size={16} />
        </button>
      </div>
      {status === 'error' && (
        <span className="form-error-msg">{errorMsg}</span>
      )}
      <p className={`small mt-2 mb-0 ${isDark ? 'text-white-50' : 'text-muted'}`}>
        By signing up, you agree to receive digital dispatches. Unsubscribe anytime.
      </p>
    </form>
  );
}
