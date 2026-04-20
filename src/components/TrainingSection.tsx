import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const brands = [
  { name: 'kindle fire', style: { fontFamily: 'Georgia, serif', fontStyle: 'italic' } },
  { name: 'Donnelly',    style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '700' } },
  { name: 'imation',    style: { letterSpacing: '0.02em' }, prefix: '✦ ' },
  { name: 'MOTUL',      style: { fontWeight: '800', letterSpacing: '0.1em' } },
  { name: 'amam',       style: { fontWeight: '700', letterSpacing: '0.06em' } },
  { name: 'lesEchos',   style: { fontFamily: 'Georgia, serif' } },
  { name: 'vueling',    style: { fontWeight: '700' } },
  { name: 'indeed',     style: { fontFamily: 'Georgia, serif', fontStyle: 'italic', fontWeight: '700' } },
  { name: 'OMRON',      style: { fontWeight: '800', letterSpacing: '0.08em' } },
  { name: 'brembo',     style: {} },
  { name: 'prime video', style: { fontSize: '13px' } },
  { name: 'VIESSMANN',  style: { fontWeight: '800', letterSpacing: '0.06em' } },
];

const BrandCard = ({ brand, delay }: { brand: typeof brands[0]; delay: number }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.04, boxShadow: '0 4px 24px rgba(91,99,248,0.12)' }}
      style={{
        border: '1.5px solid #e2e8f0',
        borderRadius: 12,
        padding: '18px 28px',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        minWidth: 100, cursor: 'default',
        background: '#fff',
        transition: 'box-shadow 0.2s',
      }}
    >
      <span style={{
        color: '#5b63f8',
        fontSize: 15,
        fontFamily: "'Inter', system-ui, sans-serif",
        ...brand.style,
      }}>
        {brand.prefix || ''}{brand.name}
      </span>
    </motion.div>
  );
};

const TrustedBrandsSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });

  const row1 = brands.slice(0, 6);
  const row2 = brands.slice(6, 12);

  return (
    <section style={{
      background: '#fff',
      padding: '80px 48px',
      fontFamily: "'Inter', system-ui, sans-serif",
    }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>

        <motion.h2
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: 'center',
            fontSize: 28, fontWeight: 700,
            color: '#0f172a', marginBottom: 48,
            letterSpacing: '-0.02em',
          }}
        >
          Trusted by leading brands
        </motion.h2>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {row1.map((b, i) => <BrandCard key={b.name} brand={b} delay={i * 0.07} />)}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 16 }}>
            {row2.map((b, i) => <BrandCard key={b.name} brand={b} delay={0.42 + i * 0.07} />)}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustedBrandsSection;