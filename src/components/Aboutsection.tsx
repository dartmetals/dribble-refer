import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';

interface Feature {
  id: string;
  icon: React.ReactNode;
  title: string;
  content: string;
}

const features: Feature[] = [
  {
    id: 'ai',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#fbbf24,#f59e0b)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M8 2v4M8 10v4M2 8h4M10 8h4M4.5 4.5l2.8 2.8M8.7 8.7l2.8 2.8M4.5 11.5l2.8-2.8M8.7 7.3l2.8-2.8" stroke="white" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      </div>
    ),
    title: 'Ai optimization',
    content: 'Our AI-powered engine automatically optimizes your website for performance, SEO, and conversions — adapting in real time to user behavior.',
  },
  {
    id: 'code',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#3b82f6,#2563eb)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <path d="M5 4L1 8l4 4M11 4l4 4-4 4M9 2l-2 12" stroke="white" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    ),
    title: 'Code Module',
    content: 'Embed custom HTML, CSS and JavaScript anywhere on your site without leaving the builder. Full developer freedom inside a no-code environment.',
  },
  {
    id: 'drag',
    icon: (
      <div style={{ width: 32, height: 32, background: 'linear-gradient(135deg,#ec4899,#db2777)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect x="2" y="2" width="5" height="5" rx="1" fill="white" opacity="0.9" />
          <rect x="9" y="2" width="5" height="5" rx="1" fill="white" opacity="0.6" />
          <rect x="2" y="9" width="5" height="5" rx="1" fill="white" opacity="0.6" />
          <rect x="9" y="9" width="5" height="5" rx="1" fill="white" opacity="0.3" />
        </svg>
      </div>
    ),
    title: 'Drag and Drop',
    content: 'Build and rearrange your entire website visually. Drag any element — blocks, images, text, forms — and drop it exactly where you want it.',
  },
];

/* ── UI Mockup: PLACE design tool ── */
const PlaceMockup = () => (
  <div style={{
    width: '100%', maxWidth: 380,
    borderRadius: 20, overflow: 'hidden',
    boxShadow: '0 24px 64px rgba(91,99,248,0.22)',
    position: 'relative',
  }}>
    {/* Dark sidebar */}
    <div style={{
      display: 'flex', height: 340,
    }}>
      <div style={{
        width: 100, background: '#1e293b',
        padding: '24px 16px',
        display: 'flex', flexDirection: 'column', gap: 6,
      }}>
        <div style={{ fontSize: 11, fontWeight: 700, color: '#94a3b8', marginBottom: 14, letterSpacing: '0.1em' }}>
          PLACE
        </div>
        {['Design','All Screens','Neutral','Settings','Settings'].map((item, i) => (
          <div key={i} style={{
            padding: '7px 10px', borderRadius: 6,
            background: i === 0 ? 'rgba(91,99,248,0.25)' : 'transparent',
            fontSize: 11, color: i === 0 ? '#a5b4fc' : '#64748b',
            cursor: 'pointer',
          }}>
            {item}
          </div>
        ))}
      </div>

      {/* Main content area */}
      <div style={{
        flex: 1, background: '#f8fafc',
        padding: '20px 16px',
      }}>
        <div style={{ fontSize: 18, fontWeight: 700, color: '#0f172a', marginBottom: 14 }}>Card</div>

        {/* Product card preview */}
        <div style={{
          background: '#fff', borderRadius: 12,
          overflow: 'hidden',
          boxShadow: '0 4px 20px rgba(0,0,0,0.08)',
        }}>
          {/* Gradient image area */}
          <div style={{
            height: 120,
            background: 'linear-gradient(135deg, #fde68a 0%, #fbbf24 40%, #f59e0b 70%, #fb923c 100%)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            position: 'relative',
          }}>
            {/* 3D shapes */}
            <svg width="100" height="80" viewBox="0 0 100 80" fill="none">
              {/* Left cube */}
              <polygon points="10,50 30,40 50,50 30,60" fill="#fb923c" opacity="0.9" />
              <polygon points="10,50 10,65 30,75 30,60" fill="#ea580c" />
              <polygon points="30,60 30,75 50,65 50,50" fill="#f97316" />
              {/* Middle cube */}
              <polygon points="35,35 55,25 75,35 55,45" fill="#fbbf24" opacity="0.9" />
              <polygon points="35,35 35,50 55,60 55,45" fill="#f59e0b" />
              <polygon points="55,45 55,60 75,50 75,35" fill="#d97706" />
              {/* Right cube */}
              <polygon points="60,52 75,44 90,52 75,60" fill="#fb923c" opacity="0.8" />
              <polygon points="60,52 60,64 75,72 75,60" fill="#ea580c" opacity="0.8" />
              <polygon points="75,60 75,72 90,64 90,52" fill="#f97316" opacity="0.8" />
            </svg>
          </div>

          <div style={{ padding: '14px 14px 16px' }}>
            <div style={{ fontSize: 13, fontWeight: 700, color: '#0f172a', marginBottom: 6 }}>
              Website Design Features
            </div>
            <div style={{ fontSize: 11, color: '#64748b', lineHeight: 1.55 }}>
              Bookmark is equipped with the tools and features you need to build your ultimate website or eCommerce store.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const WebsiteFeaturesSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-100px' });
  const [openId, setOpenId] = useState<string | null>('ai');

  return (
    <section style={{
      background: '#f0f2ff',
      padding: '100px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div ref={ref} style={{
        maxWidth: 1100, margin: '0 auto',
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        gap: 80, alignItems: 'center',
      }}>

        {/* LEFT: Content slides in from LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -70 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <h2 style={{
            fontSize: 40, fontWeight: 800,
            color: '#0f172a', letterSpacing: '-0.03em',
            lineHeight: 1.2, marginBottom: 40,
          }}>
            Website features
          </h2>

          {/* Accordion */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
            {features.map((f, i) => (
              <div key={f.id}>
                {/* Divider top */}
                <div style={{ height: 1, background: '#e2e8f0' }} />

                {/* Row */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.12 }}
                  onClick={() => setOpenId(openId === f.id ? null : f.id)}
                  style={{
                    display: 'flex', alignItems: 'center',
                    gap: 16, padding: '20px 0',
                    cursor: 'pointer',
                  }}
                >
                  {f.icon}
                  <span style={{
                    flex: 1, fontSize: 16, fontWeight: 600,
                    color: '#0f172a',
                  }}>
                    {f.title}
                  </span>
                  <motion.div
                    animate={{ rotate: openId === f.id ? 180 : 0 }}
                    transition={{ duration: 0.25 }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M5 8l5 5 5-5" stroke="#94a3b8" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </motion.div>
                </motion.div>

                {/* Expanded content */}
                <AnimatePresence initial={false}>
                  {openId === f.id && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <p style={{
                        fontSize: 14, color: '#64748b',
                        lineHeight: 1.68, paddingBottom: 16,
                        paddingLeft: 48,
                      }}>
                        {f.content}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
            {/* Bottom divider */}
            <div style={{ height: 1, background: '#e2e8f0' }} />
          </div>
        </motion.div>

        {/* RIGHT: Image slides in from RIGHT */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <PlaceMockup />
        </motion.div>
      </div>
    </section>
  );
};

export default WebsiteFeaturesSection;