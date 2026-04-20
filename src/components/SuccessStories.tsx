import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

const ActNowSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!email.includes('@')) return;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3500);
    setEmail('');
  };

  return (
    <section style={{
      background: '#eef0ff',
      padding: '60px 48px 80px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 48, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(135deg, #5b63f8 0%, #6366f1 50%, #7c3aed 100%)',
            borderRadius: 24,
            border: '1px solid rgba(255,255,255,0.2)',
            padding: '72px 48px',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          {/* Fluid wave overlay */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            background: `
              radial-gradient(ellipse at 25% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
              radial-gradient(ellipse at 75% 30%, rgba(120,80,255,0.3) 0%, transparent 50%)
            `,
          }} />

          {/* Decorative blob shapes */}
          <div style={{
            position: 'absolute', right: '15%', top: '20%',
            width: 120, height: 120,
            background: 'rgba(255,255,255,0.08)',
            borderRadius: '60% 40% 70% 30% / 50% 60% 40% 50%',
            filter: 'blur(2px)',
          }} />
          <div style={{
            position: 'absolute', right: '10%', top: '40%',
            width: 80, height: 80,
            background: 'rgba(255,255,255,0.06)',
            borderRadius: '40% 60% 30% 70% / 60% 40% 60% 40%',
            filter: 'blur(1px)',
          }} />

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.25 }}
            style={{
              fontSize: 38, fontWeight: 800,
              color: '#fff', textAlign: 'center',
              letterSpacing: '-0.03em', lineHeight: 1.25,
              marginBottom: 36, position: 'relative', zIndex: 2,
            }}
          >
            Act now, using our<br />opportunities
          </motion.h2>

          {/* Email form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, delay: 0.42 }}
            style={{
              display: 'flex', gap: 0,
              borderRadius: 12, overflow: 'hidden',
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
              position: 'relative', zIndex: 2,
            }}
          >
            <input
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleSubmit()}
              placeholder="Enter your email address"
              style={{
                width: 280, padding: '15px 20px',
                border: '1.5px solid rgba(255,255,255,0.3)',
                borderRight: 'none',
                background: 'rgba(255,255,255,0.12)',
                color: '#fff', fontSize: 14,
                outline: 'none', borderRadius: '12px 0 0 12px',
                fontFamily: "'Inter', system-ui, sans-serif",
              }}
            />
            <button
              onClick={handleSubmit}
              style={{
                background: '#fff', color: '#5b63f8',
                border: 'none', borderRadius: '0 12px 12px 0',
                padding: '15px 24px', fontSize: 14, fontWeight: 700,
                cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 8,
                whiteSpace: 'nowrap',
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = '#eef0ff')}
              onMouseLeave={e => (e.currentTarget.style.background = '#fff')}
            >
              {submitted ? '✓ Sent!' : 'Get started free'}
              {!submitted && (
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="#5b63f8" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              )}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ActNowSection;