import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface CardData {
  icon: React.ReactNode;
  title: string;
  desc: string;
  variant: 'blue' | 'white';
  decoration?: React.ReactNode;
}

const OrangeIcon = ({ icon }: { icon: string }) => (
  <div style={{
    width: 48, height: 48, borderRadius: '50%',
    background: 'linear-gradient(135deg, #ffb156, #ff8c42)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20, fontSize: 20,
    boxShadow: '0 4px 16px rgba(255,140,66,0.35)',
  }}>
    {icon}
  </div>
);

const BlueIcon = () => (
  <div style={{
    width: 48, height: 48, borderRadius: '50%',
    background: 'rgba(255,255,255,0.25)',
    border: '2px solid rgba(255,255,255,0.5)',
    display: 'flex', alignItems: 'center', justifyContent: 'center',
    marginBottom: 20,
  }}>
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      <circle cx="11" cy="11" r="8" stroke="white" strokeWidth="2" fill="none" />
      <circle cx="11" cy="11" r="3" fill="white" />
    </svg>
  </div>
);

/* Decorative 3D book shape (top right of community card) */
const BookDecoration = () => (
  <div style={{ position: 'absolute', top: -20, right: -10, opacity: 0.85 }}>
    <svg width="72" height="72" viewBox="0 0 72 72" fill="none">
      <rect x="8" y="24" width="40" height="34" rx="4" fill="#5b63f8" transform="rotate(-18 8 24)" />
      <rect x="16" y="20" width="40" height="34" rx="4" fill="#7c8cf8" transform="rotate(-8 16 20)" />
      <rect x="22" y="18" width="40" height="34" rx="4" fill="#a5b4fc" />
      <rect x="26" y="22" width="32" height="2" rx="1" fill="white" opacity="0.5" />
      <rect x="26" y="28" width="28" height="2" rx="1" fill="white" opacity="0.5" />
    </svg>
  </div>
);

/* Decorative 3D cube shape */
const CubeDecoration = () => (
  <div style={{ position: 'absolute', bottom: 16, right: 20, opacity: 0.8 }}>
    <svg width="80" height="60" viewBox="0 0 80 60" fill="none">
      <polygon points="20,20 50,6 80,20 50,34" fill="#7c8cf8" />
      <polygon points="20,20 20,50 50,64 50,34" fill="#5b63f8" />
      <polygon points="50,34 50,64 80,50 80,20" fill="#4048e8" />
      <polygon points="30,26 55,14 70,22 45,34" fill="#a5b4fc" opacity="0.7" />
    </svg>
  </div>
);

const cards: CardData[] = [
  {
    icon: <BlueIcon />,
    title: 'Educational Insights',
    desc: 'Our courses are developed in collaboration with industry leaders.',
    variant: 'blue',
  },
  {
    icon: <OrangeIcon icon="⚡" />,
    title: 'Website Analytics',
    desc: 'You get full information about the visitors and users of your site.',
    variant: 'white',
    decoration: <BookDecoration />,
  },
  {
    icon: <OrangeIcon icon="🔗" />,
    title: 'Community Forum',
    desc: 'Expand your knowledge and learn from the experiences of other users.',
    variant: 'white',
    decoration: <CubeDecoration />,
  },
];

const SpeedyDigitalSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  return (
    <section style={{
      background: '#f0f2ff',
      padding: '100px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        {/* Heading */}
        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            fontSize: 44, fontWeight: 800,
            color: '#0f172a', letterSpacing: '-0.03em',
            lineHeight: 1.2, textAlign: 'center',
            marginBottom: 56,
          }}
        >
          Speedy digital<br />experience creation.
        </motion.h2>

        {/* Cards — appear one by one with stagger */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {cards.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 60, scale: 0.94 }}
              animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
              /* Each card waits for the previous one to finish before appearing */
              transition={{
                duration: 0.65,
                delay: 0.2 + i * 0.22,   /* 0.2s, 0.42s, 0.64s */
                ease: [0.25, 0.46, 0.45, 0.94],
              }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              style={{
                borderRadius: 20,
                padding: '32px 28px 40px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'pointer',
                ...(card.variant === 'blue'
                  ? {
                      background: 'linear-gradient(145deg, #5b63f8 0%, #4048e8 100%)',
                      boxShadow: '0 8px 32px rgba(91,99,248,0.35)',
                    }
                  : {
                      background: '#fff',
                      boxShadow: '0 4px 24px rgba(0,0,0,0.07)',
                      border: '1px solid #f1f5f9',
                    }),
              }}
            >
              {card.decoration}

              {card.icon}

              <h3 style={{
                fontSize: 18, fontWeight: 700,
                color: card.variant === 'blue' ? '#fff' : '#0f172a',
                marginBottom: 12, lineHeight: 1.3,
              }}>
                {card.title}
              </h3>

              <p style={{
                fontSize: 14, lineHeight: 1.65,
                color: card.variant === 'blue' ? 'rgba(255,255,255,0.8)' : '#64748b',
                marginBottom: 28,
              }}>
                {card.desc}
              </p>

              {/* Learn more link */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                <span style={{
                  fontSize: 14, fontWeight: 600,
                  color: card.variant === 'blue' ? '#fff' : '#5b63f8',
                  borderBottom: `1.5px solid ${card.variant === 'blue' ? 'rgba(255,255,255,0.5)' : '#5b63f8'}`,
                  paddingBottom: 1,
                }}>
                  Learn more
                </span>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4"
                    stroke={card.variant === 'blue' ? '#fff' : '#5b63f8'}
                    strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeedyDigitalSection;