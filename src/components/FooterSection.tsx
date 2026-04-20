import { motion } from 'framer-motion';

const socialIcons = [
  /* Discord */
  <svg key="dc" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M13.4 3A11.2 11.2 0 0010.7 2a.05.05 0 00-.06.03c-.12.21-.25.49-.34.71a10.4 10.4 0 00-3.06 0 7.2 7.2 0 00-.35-.71A.05.05 0 006.8 2a11.2 11.2 0 00-2.7.99A.05.05 0 004 3.05c-1.73 2.5-2.2 4.93-1.97 7.33a.06.06 0 00.02.04 11.3 11.3 0 003.38 1.7.05.05 0 00.06-.02c.26-.36.49-.73.69-1.13a.05.05 0 00-.03-.07 7.44 7.44 0 01-1.06-.5.05.05 0 010-.08l.2-.16a.05.05 0 01.05-.01c2.24 1.02 4.66 1.02 6.87 0a.05.05 0 01.06.01l.21.16a.05.05 0 010 .08c-.34.2-.69.37-1.06.5a.05.05 0 00-.03.07c.2.4.44.78.69 1.13a.05.05 0 00.06.02 11.3 11.3 0 003.38-1.7.06.06 0 00.02-.04c.27-2.78-.46-5.18-1.96-7.33a.05.05 0 00-.03-.02zM5.88 8.88c-.66 0-1.2-.6-1.2-1.34S5.2 6.2 5.88 6.2c.68 0 1.21.61 1.2 1.34 0 .74-.53 1.34-1.2 1.34zm4.24 0c-.66 0-1.2-.6-1.2-1.34s.53-1.34 1.2-1.34c.67 0 1.21.61 1.2 1.34 0 .74-.52 1.34-1.2 1.34z" />
  </svg>,
  /* Twitter/X */
  <svg key="tw" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M12.6 1h2.4L9.7 7.1 16 15h-4.6L7.5 9.8 3.2 15H.8l5.6-6.5L0 1h4.7l3.5 4.7L12.6 1zM11.8 13.5h1.3L4.3 2.4H2.9l8.9 11.1z" />
  </svg>,
  /* YouTube */
  <svg key="yt" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M15.8 4.8s-.2-1.3-.8-1.9c-.7-.8-1.6-.8-1.9-.8C11.1 2 8 2 8 2S4.9 2 2.9 2.1c-.4 0-1.2.1-1.9.8-.6.6-.8 1.9-.8 1.9S0 6.2 0 7.7v1.4c0 1.4.2 2.8.2 2.8s.2 1.3.8 1.9c.8.8 1.8.7 2.2.8C4.6 14.7 8 14.8 8 14.8s3.1 0 5.1-.2c.4 0 1.2-.1 1.9-.8.6-.6.8-1.9.8-1.9S16 10.5 16 9V7.6c0-1.4-.2-2.8-.2-2.8zM6.3 10.4V5.5l5.1 2.5-5.1 2.4z" />
  </svg>,
  /* GitHub */
  <svg key="gh" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 0C3.6 0 0 3.6 0 8c0 3.5 2.3 6.5 5.5 7.5.4.1.5-.2.5-.4v-1.4c-2.2.5-2.7-1.1-2.7-1.1-.4-.9-.9-1.2-.9-1.2-.7-.5.1-.5.1-.5.8.1 1.2.8 1.2.8.7 1.2 1.9.9 2.3.7.1-.5.3-.9.5-1.1-1.8-.2-3.6-.9-3.6-4 0-.9.3-1.6.8-2.1-.1-.2-.4-1 .1-2.1 0 0 .7-.2 2.2.8.6-.2 1.3-.3 2-.3s1.4.1 2 .3c1.5-1 2.2-.8 2.2-.8.4 1.1.2 1.9.1 2.1.5.6.8 1.3.8 2.1 0 3.1-1.9 3.8-3.7 4 .3.3.6.8.6 1.5v2.2c0 .2.1.5.6.4C13.7 14.5 16 11.5 16 8c0-4.4-3.6-8-8-8z" />
  </svg>,
  /* Snapchat */
  <svg key="sc" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M8 1c-1.8 0-3.5 1.3-3.5 3.4v.6c-.4.2-1.2.2-1.2.9 0 .5.5.7.5.7-.2.8-.9 1.5-1.6 2-.2.1-.2.3 0 .4.8.3 1.3.3 1.7.7.2.2-.1.6 0 .9.1.2.4.3.6.3 1.5-.2 2.5.7 3.5.7s2-.9 3.5-.7c.2 0 .5-.1.6-.3.1-.3-.2-.7 0-.9.4-.4.9-.4 1.7-.7.2-.1.2-.3 0-.4-.7-.5-1.4-1.2-1.6-2 0 0 .5-.2.5-.7 0-.7-.8-.7-1.2-.9v-.6C11.5 2.3 9.8 1 8 1z" />
  </svg>,
  /* LinkedIn */
  <svg key="li" width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
    <path d="M0 1.1C0 .5.5 0 1.1 0h13.8C15.5 0 16 .5 16 1.1v13.8c0 .6-.5 1.1-1.1 1.1H1.1A1.1 1.1 0 010 14.9V1.1zM4.8 13.4V6.2H2.4v7.2h2.4zM3.6 5.2a1.4 1.4 0 000-2.8 1.4 1.4 0 000 2.8zm10.2 8.2V9.5c0-2.1-1.1-3-2.7-3-1.3 0-1.9.7-2.2 1.2V6.2H6.5v7.2h2.4v-3.8c0-1.1.6-1.7 1.5-1.7.9 0 1.4.5 1.4 1.7v3.8h2.4z" />
  </svg>,
];

const footerCols = [
  {
    heading: 'Product',
    links: ['Features', 'Pricing', 'Code export', 'Templates', 'Release notes'],
  },
  {
    heading: 'Company',
    links: ['About us', 'Work for us', 'Contact', 'Brand resources', 'Career'],
  },
  {
    heading: 'Learn',
    links: ['Documentation', 'Video tutorials', 'Blog', 'FAQ', 'Community'],
  },
];

const FooterSection = () => (
  <footer style={{
    background: '#0d1829',
    padding: '60px 48px 32px',
    fontFamily: "'Inter', system-ui, sans-serif",
  }}>
    <div style={{ maxWidth: 1100, margin: '0 auto' }}>

      {/* Top row */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: '280px repeat(3, 1fr)',
        gap: 40, marginBottom: 56,
      }}>
        {/* Brand */}
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
            <div style={{
              width: 34, height: 34, borderRadius: 9,
              background: 'linear-gradient(135deg,#5b63f8,#4048e8)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
                <rect x="3" y="3" width="6" height="6" rx="1.5" fill="white" />
                <rect x="11" y="3" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
                <rect x="3" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.7" />
                <rect x="11" y="11" width="6" height="6" rx="1.5" fill="white" opacity="0.4" />
              </svg>
            </div>
            <span style={{ fontWeight: 700, fontSize: 18, color: '#fff' }}>HUSD</span>
          </div>

          <p style={{ fontSize: 13, color: '#64748b', lineHeight: 1.65, maxWidth: 220, marginBottom: 28 }}>
            Pick a template you like, customize it to fit your style without writing any code.
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 10 }}>
            {socialIcons.map((icon, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -3, color: '#5b63f8' }}
                style={{
                  width: 34, height: 34, borderRadius: 8,
                  background: 'rgba(255,255,255,0.07)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: '#64748b', cursor: 'pointer',
                  transition: 'color 0.2s, background 0.2s',
                }}
                onMouseEnter={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(91,99,248,0.2)';
                  (e.currentTarget as HTMLElement).style.color = '#a5b4fc';
                }}
                onMouseLeave={e => {
                  (e.currentTarget as HTMLElement).style.background = 'rgba(255,255,255,0.07)';
                  (e.currentTarget as HTMLElement).style.color = '#64748b';
                }}
              >
                {icon}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Columns */}
        {footerCols.map(col => (
          <div key={col.heading}>
            <div style={{
              fontSize: 15, fontWeight: 700, color: '#fff',
              marginBottom: 22,
            }}>
              {col.heading}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 13 }}>
              {col.links.map(link => (
                <a
                  key={link}
                  href="#"
                  style={{
                    fontSize: 13, color: '#64748b', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
                  onMouseLeave={e => (e.currentTarget.style.color = '#64748b')}
                >
                  {link}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Divider */}
      <div style={{ height: 1, background: 'rgba(255,255,255,0.07)', marginBottom: 24 }} />

      {/* Bottom row */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{ fontSize: 12, color: '#475569' }}>
          2022-2025 Logo. All rights reserved
        </span>
        <div style={{ display: 'flex', gap: 32 }}>
          {['Terms & policy', 'Cookies Settings'].map(item => (
            <a
              key={item}
              href="#"
              style={{ fontSize: 12, color: '#475569', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={e => (e.currentTarget.style.color = '#a5b4fc')}
              onMouseLeave={e => (e.currentTarget.style.color = '#475569')}
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default FooterSection;