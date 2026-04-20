import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', fn);
    return () => window.removeEventListener('scroll', fn);
  }, []);

  return (
    <section style={{
      background: 'linear-gradient(135deg, #eef0ff 0%, #e8ebff 40%, #dde2ff 100%)',
      minHeight: '100vh',
      fontFamily: "'Inter', 'DM Sans', system-ui, sans-serif",
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Subtle grid pattern overlay */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        backgroundImage: 'linear-gradient(rgba(100,120,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(100,120,255,0.04) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }} />

      {/* ── NAVBAR (changed from fixed to relative) ── */}
      <nav style={{
        position: 'relative',  /* Changed from 'fixed' to 'relative' */
        top: 0, left: 0, right: 0, zIndex: 100,
        background: scrolled ? 'rgba(255,255,255,0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(100,120,255,0.1)' : 'none',
        transition: 'all 0.3s',
        padding: '0 48px', height: 68,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 36, height: 36, borderRadius: 10,
            background: 'linear-gradient(135deg,#5b63f8,#4048e8)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <rect x="3" y="3" width="6" height="6" rx="1.5" fill="white" />
              <rect x="11" y="3" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
              <rect x="3" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
              <rect x="11" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.4" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 18, color: '#0f172a', letterSpacing: '-0.02em' }}>HUSD</span>
        </div>

        {/* Nav Links */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 36 }}>
          {['Company', 'Products', 'Solutions'].map(l => (
            <a key={l} href="#" style={{
              fontSize: 14, color: '#334155', textDecoration: 'none',
              fontWeight: 500, transition: 'color 0.2s',
            }}
              onMouseEnter={e => (e.currentTarget.style.color = '#5b63f8')}
              onMouseLeave={e => (e.currentTarget.style.color = '#334155')}
            >{l}</a>
          ))}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href="#" style={{ fontSize: 14, color: '#334155', textDecoration: 'none', fontWeight: 500 }}>Career</a>
            <span style={{
              background: '#5b63f8', color: '#fff',
              fontSize: 9, fontWeight: 700, padding: '2px 6px',
              borderRadius: 4, letterSpacing: '0.06em',
            }}>NEW</span>
          </div>
        </div>

        {/* Right */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <span style={{ fontSize: 14, color: '#334155', fontWeight: 500, cursor: 'pointer' }}>
            En ∨
          </span>
          <button style={{
            border: '1.5px solid #0f172a', background: 'transparent',
            color: '#0f172a', borderRadius: 8,
            padding: '9px 20px', fontSize: 14, fontWeight: 600,
            cursor: 'pointer', transition: 'all 0.2s',
          }}
            onMouseEnter={e => {
              e.currentTarget.style.background = '#0f172a';
              e.currentTarget.style.color = '#fff';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = '#0f172a';
            }}
          >
            Book a demo
          </button>
        </div>
      </nav>

      {/* ── HERO BODY ── */}
      <div style={{
        maxWidth: 1200, margin: '0 auto', padding: '0 48px',
        minHeight: '100vh',
        display: 'flex', alignItems: 'center',
        paddingTop: 68,
        gap: 40,
      }}>
        {/* Left content */}
        <div style={{ flex: '0 0 420px', zIndex: 2 }}>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontFamily: "'Inter', system-ui, sans-serif",
              fontSize: 52, fontWeight: 800,
              color: '#0f172a', lineHeight: 1.12,
              letterSpacing: '-0.03em', margin: '0 0 20px',
            }}
          >
            Unified one{' '}
            <span style={{ color: '#5b63f8' }}>solution</span>{' '}
            any device
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{
              fontSize: 15, color: '#64748b', lineHeight: 1.68,
              maxWidth: 320, margin: '0 0 36px',
            }}
          >
            We help businesses deliver digital customer experiences that are
            personalized, optimized, and synchronized.
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ scale: 1.04, x: 4 }}
            whileTap={{ scale: 0.97 }}
            style={{
              background: '#5b63f8',
              border: 'none', borderRadius: 10,
              padding: '14px 28px',
              color: '#fff', fontSize: 15, fontWeight: 600,
              cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 10,
            }}
          >
            Get started free
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M3 9h12M10 4l5 5-5 5" stroke="white" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.button>
        </div>

        {/* Right: 3D Machine Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 80, scale: 0.92 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ flex: 1, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <svg viewBox="0 0 560 420" width="100%" style={{ maxWidth: 560, filter: 'drop-shadow(0 32px 80px rgba(91,99,248,0.18))' }} fill="none">
            {/* Main frame outer */}
            <rect x="60" y="40" width="440" height="340" rx="20" fill="rgba(255,255,255,0.6)" stroke="rgba(180,190,255,0.6)" strokeWidth="2" />
            {/* Inner frame */}
            <rect x="100" y="70" width="360" height="280" rx="12" fill="rgba(240,242,255,0.8)" stroke="rgba(150,160,255,0.5)" strokeWidth="1.5" />
            {/* Center display */}
            <rect x="160" y="110" width="240" height="200" rx="10" fill="rgba(255,255,255,0.9)" stroke="rgba(180,190,255,0.8)" strokeWidth="1.5" />
            {/* HUSD Logo on center display */}
            <rect x="240" y="158" width="80" height="80" rx="16" fill="linear-gradient(135deg,#5b63f8,#4048e8)" />
            <rect x="240" y="158" width="80" height="80" rx="16" fill="#5b63f8" />
            <rect x="254" y="172" width="20" height="20" rx="4" fill="white" />
            <rect x="280" y="172" width="20" height="20" rx="4" fill="white" opacity="0.7" />
            <rect x="254" y="198" width="20" height="20" rx="4" fill="white" opacity="0.7" />
            <rect x="280" y="198" width="20" height="20" rx="4" fill="white" opacity="0.4" />
            <text x="280" y="262" textAnchor="middle" fontSize="16" fontWeight="800" fill="#0f172a" fontFamily="Inter,sans-serif">HUSD</text>
            {/* Left rail */}
            <rect x="80" y="80" width="16" height="260" rx="6" fill="rgba(220,225,255,0.8)" stroke="rgba(160,175,255,0.6)" strokeWidth="1" />
            {/* Right rail */}
            <rect x="464" y="80" width="16" height="260" rx="6" fill="rgba(220,225,255,0.8)" stroke="rgba(160,175,255,0.6)" strokeWidth="1" />
            {/* Top bar */}
            <rect x="96" y="80" width="368" height="14" rx="5" fill="rgba(210,218,255,0.7)" />
            {/* Bottom bar */}
            <rect x="96" y="326" width="368" height="14" rx="5" fill="rgba(210,218,255,0.7)" />
            {/* Connector rods horizontal */}
            <rect x="60" y="148" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
            <rect x="400" y="148" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
            <rect x="60" y="264" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
            <rect x="400" y="264" width="100" height="8" rx="4" fill="rgba(200,210,255,0.8)" />
            {/* Accent blue dots */}
            <circle cx="96" cy="152" r="6" fill="#5b63f8" />
            <circle cx="464" cy="152" r="6" fill="#5b63f8" />
            <circle cx="96" cy="268" r="6" fill="#5b63f8" />
            <circle cx="464" cy="268" r="6" fill="#5b63f8" />
            {/* Glow accent orange */}
            <circle cx="80" cy="210" r="8" fill="#ff8c42" opacity="0.85" />
            <circle cx="480" cy="210" r="8" fill="#ff8c42" opacity="0.85" />
            {/* Top-right corner accent */}
            <rect x="430" y="45" width="40" height="6" rx="3" fill="#5b63f8" opacity="0.6" />
            <rect x="446" y="38" width="6" height="18" rx="3" fill="#5b63f8" opacity="0.5" />
          </svg>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;