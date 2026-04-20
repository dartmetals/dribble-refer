import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const GrowBusinessSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: '#fff',
      padding: '40px 48px 60px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50, scale: 0.97 }}
          animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{
            background: 'linear-gradient(135deg, #6366f1 0%, #5b63f8 40%, #7c3aed 100%)',
            borderRadius: 24,
            padding: '72px 48px',
            position: 'relative',
            overflow: 'hidden',
            minHeight: 220,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {/* Cylinder decorations — left side */}
          <div style={{ position: 'absolute', left: 40, bottom: -10, display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            {/* Short cylinder */}
            <div style={{ position: 'relative', width: 56 }}>
              <div style={{
                width: 56, height: 80, background: 'rgba(255,255,255,0.15)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 56, height: 12, background: 'rgba(255,255,255,0.22)',
                borderRadius: '50%', marginTop: -6,
              }} />
            </div>
            {/* Tall cylinder */}
            <div style={{ position: 'relative', width: 70 }}>
              <div style={{
                width: 70, height: 140, background: 'rgba(255,255,255,0.2)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 70, height: 14, background: 'rgba(255,255,255,0.28)',
                borderRadius: '50%', marginTop: -7,
              }} />
            </div>
            {/* Medium cylinder */}
            <div style={{ position: 'relative', width: 50 }}>
              <div style={{
                width: 50, height: 110, background: 'rgba(255,255,255,0.15)',
                borderRadius: '4px 4px 0 0',
              }} />
              <div style={{
                width: 50, height: 10, background: 'rgba(255,255,255,0.22)',
                borderRadius: '50%', marginTop: -5,
              }} />
            </div>
          </div>

          {/* Cylinder decorations — right side */}
          <div style={{ position: 'absolute', right: 40, bottom: -10, display: 'flex', gap: 16, alignItems: 'flex-end' }}>
            <div style={{ position: 'relative', width: 48 }}>
              <div style={{ width: 48, height: 100, background: 'rgba(255,255,255,0.12)', borderRadius: '4px 4px 0 0' }} />
              <div style={{ width: 48, height: 10, background: 'rgba(255,255,255,0.2)', borderRadius: '50%', marginTop: -5 }} />
            </div>
            <div style={{ position: 'relative', width: 60 }}>
              <div style={{ width: 60, height: 60, background: 'rgba(255,255,255,0.18)', borderRadius: '4px 4px 0 0' }} />
              <div style={{ width: 60, height: 12, background: 'rgba(255,255,255,0.25)', borderRadius: '50%', marginTop: -6 }} />
            </div>
          </div>

          {/* Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontFamily: "'Courier New', 'Courier', monospace",
              fontSize: 28, fontWeight: 700,
              color: '#fff',
              textAlign: 'center',
              lineHeight: 1.5,
              position: 'relative', zIndex: 2,
              letterSpacing: '-0.01em',
              maxWidth: 420,
            }}
          >
            We are here to help<br />
            you grow your online<br />
            business
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default GrowBusinessSection;