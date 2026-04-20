import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

/* ── Phone 1: "Your Website" mockup ── */
const PhoneWebsite = () => (
  <div style={{
    width: 180, background: '#fff',
    borderRadius: 28, padding: '14px 12px',
    boxShadow: '0 12px 48px rgba(0,0,0,0.12)',
    border: '1px solid #f1f5f9',
    fontFamily: "'Inter', system-ui, sans-serif",
  }}>
    {/* Status bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, padding: '0 4px' }}>
      <span style={{ fontSize: 9, fontWeight: 600, color: '#0f172a' }}>9:41</span>
      <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <div style={{ width: 12, height: 6, border: '1px solid #0f172a', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 1, top: 1, width: 8, height: 4, background: '#0f172a', borderRadius: 1 }} />
        </div>
      </div>
    </div>
    <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a', marginBottom: 10 }}>Your Website</div>

    {/* Orange product card */}
    <div style={{
      background: 'linear-gradient(135deg,#ff9a3c,#ffb156)',
      borderRadius: 14, padding: '14px 12px', marginBottom: 8, height: 90,
      display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative',
    }}>
      <div style={{ width: 40, height: 40, background: 'rgba(255,255,255,0.3)', borderRadius: '50%' }} />
      <div style={{
        position: 'absolute', top: 8, right: 8, width: 18, height: 18,
        background: '#fff', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
          <path d="M2 5h6M6 3l2 2-2 2" stroke="#ff8c42" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      </div>
    </div>

    <div style={{ fontSize: 10, fontWeight: 700, color: '#0f172a', marginBottom: 4 }}>Personalization</div>
    <div style={{ fontSize: 9, color: '#94a3b8', lineHeight: 1.5, marginBottom: 10 }}>
      Increase customer loyalty and brand goodness with personalized customer experiences.
    </div>

    {/* Purple card */}
    <div style={{
      background: 'linear-gradient(135deg,#a78bfa,#8b5cf6)',
      borderRadius: 14, padding: '14px 12px', height: 70,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      <div style={{ width: 36, height: 36, background: 'rgba(255,255,255,0.25)', borderRadius: '50%' }} />
    </div>

    {/* Bottom pill */}
    <div style={{
      marginTop: 10, height: 4, width: 60, background: '#e2e8f0',
      borderRadius: 4, margin: '10px auto 0',
    }} />
  </div>
);

/* ── Phone 2: Dashboard mockup ── */
const PhoneDashboard = () => (
  <div style={{
    width: 200, background: '#fff',
    borderRadius: 28, padding: '14px 12px',
    boxShadow: '0 12px 48px rgba(0,0,0,0.14)',
    border: '1px solid #f1f5f9',
    fontFamily: "'Inter', system-ui, sans-serif",
  }}>
    {/* Status bar */}
    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12, padding: '0 4px' }}>
      <span style={{ fontSize: 9, fontWeight: 600, color: '#0f172a' }}>9:41</span>
      <div style={{ display: 'flex', gap: 3, alignItems: 'center' }}>
        <div style={{ width: 12, height: 6, border: '1px solid #0f172a', borderRadius: 2, position: 'relative' }}>
          <div style={{ position: 'absolute', left: 1, top: 1, width: 8, height: 4, background: '#0f172a', borderRadius: 1 }} />
        </div>
      </div>
    </div>

    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 14 }}>
      <span style={{ fontSize: 13, fontWeight: 700, color: '#0f172a' }}>Dashboard</span>
      <span style={{ fontSize: 9, color: '#94a3b8' }}>⌕ Filter</span>
    </div>

    {/* Stats */}
    {[
      { icon: '🟢', label: '2851', sub: 'unique visitors' },
      { icon: '🔵', label: '9143', sub: 'unique visitors' },
    ].map((s) => (
      <div key={s.label} style={{
        display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8,
      }}>
        <span style={{ fontSize: 12 }}>{s.icon}</span>
        <div>
          <div style={{ fontSize: 11, fontWeight: 700, color: '#0f172a' }}>{s.label}</div>
          <div style={{ fontSize: 8, color: '#94a3b8' }}>{s.sub}</div>
        </div>
      </div>
    ))}

    <div style={{ fontSize: 9, color: '#94a3b8', marginBottom: 10 }}>Unique Visitors</div>

    {/* Bar chart */}
    <div style={{ display: 'flex', alignItems: 'flex-end', gap: 3, height: 80 }}>
      {[20, 28, 24, 35, 30, 42, 38, 52, 58, 64, 72, 80].map((h, i) => (
        <div key={i} style={{
          flex: 1, height: `${h}%`,
          background: i >= 8
            ? 'linear-gradient(180deg,#ffb156,#ff8c42)'
            : 'rgba(255,177,86,0.25)',
          borderRadius: '3px 3px 0 0',
          transition: 'height 0.3s',
        }} />
      ))}
    </div>

    {/* X-axis labels */}
    <div style={{
      display: 'flex', justifyContent: 'space-between',
      marginTop: 4, fontSize: 7, color: '#94a3b8',
    }}>
      {['Jan','Mar','May','Jul','Sep','Nov'].map(m => (
        <span key={m}>{m}</span>
      ))}
    </div>

    <div style={{
      marginTop: 10, height: 4, width: 60, background: '#e2e8f0',
      borderRadius: 4, margin: '10px auto 0',
    }} />
  </div>
);

const SolutionsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section style={{
      background: '#fff',
      padding: '100px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }}>

        {/* LEFT: Two phones with top/bottom animation */}
        <div style={{
          display: 'flex', justifyContent: 'center',
          alignItems: 'center', gap: 20,
          position: 'relative', minHeight: 380,
        }}>
          {/* Phone 1 — slides in from TOP */}
          <motion.div
            initial={{ opacity: 0, y: -120 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ alignSelf: 'flex-start', marginTop: 40 }}
          >
            <PhoneWebsite />
          </motion.div>

          {/* Phone 2 — slides in from BOTTOM */}
          <motion.div
            initial={{ opacity: 0, y: 120 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
            style={{ alignSelf: 'flex-end', marginBottom: 40 }}
          >
            <PhoneDashboard />
          </motion.div>
        </div>

        {/* RIGHT: Text content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h2 style={{
            fontSize: 44, fontWeight: 800,
            color: '#0f172a', letterSpacing: '-0.03em',
            lineHeight: 1.15, marginBottom: 24,
          }}>
            Our Solutions
          </h2>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7, marginBottom: 20 }}>
            Don't limit yourself with static templates, bring your vision to life
            with our AI powered platform. Your Artificial Design Assistant will
            auto-optimize your website or online store so you can fast track
            your path to success.
          </p>
          <p style={{ fontSize: 15, color: '#475569', lineHeight: 1.7 }}>
            Your digital journey is as unique as your vision, and we're ready to
            remove any obstacles along the way. Create your own platform or
            have one of our experts do it for you.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default SolutionsSection;