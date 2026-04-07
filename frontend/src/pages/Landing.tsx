import { useNavigate } from 'react-router-dom';

export default function Landing() {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", background: '#fafaf8', color: '#1a1523' }}>

      {/* ─── NAVBAR ─── */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 200,
        background: '#ffffff', borderBottom: '1px solid #f0eef8',
        padding: '0 48px', height: 64,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 34, height: 34, borderRadius: 9,
            background: 'linear-gradient(135deg, #ff6b6b, #a855f7)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="18" height="18" viewBox="0 0 20 20" fill="none">
              <rect x="7.5" y="1" width="5" height="18" rx="2" fill="white" />
              <rect x="1" y="7.5" width="18" height="5" rx="2" fill="white" />
            </svg>
          </div>
          <span style={{ fontWeight: 700, fontSize: 17, color: '#1a1523' }}>MediVault</span>
        </div>

        <div style={{ display: 'flex', gap: 10 }}>
          <button
            onClick={() => navigate('/login')}
            style={{
              padding: '9px 20px', borderRadius: 9, border: '1.5px solid #e9e7f0',
              background: 'transparent', color: '#1a1523', fontFamily: 'inherit',
              fontSize: 14, fontWeight: 500, cursor: 'pointer',
              transition: 'border-color 0.2s, color 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#a855f7'; (e.currentTarget as HTMLButtonElement).style.color = '#a855f7'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e9e7f0'; (e.currentTarget as HTMLButtonElement).style.color = '#1a1523'; }}
          >
            Login
          </button>
          <button
            onClick={() => navigate('/signup')}
            style={{
              padding: '9px 20px', borderRadius: 9, border: 'none',
              background: 'linear-gradient(135deg, #ff6b6b, #a855f7)',
              color: 'white', fontFamily: 'inherit',
              fontSize: 14, fontWeight: 600, cursor: 'pointer',
              transition: 'transform 0.2s, opacity 0.2s',
            }}
            onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)'; }}
            onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
          >
            Get Started
          </button>
        </div>
      </nav>

      {/* ─── HERO ─── */}
      <section style={{
        position: 'relative', overflow: 'hidden',
        padding: '100px 48px 110px',
        display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center',
      }}>
        {/* blobs */}
        <div style={{
          position: 'absolute', width: 520, height: 520, borderRadius: '50%',
          background: 'linear-gradient(135deg, #ff6b6b44, #a855f744)',
          filter: 'blur(90px)', top: -140, right: -120, pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', width: 380, height: 380, borderRadius: '50%',
          background: 'linear-gradient(135deg, #a855f733, #6366f133)',
          filter: 'blur(80px)', bottom: -80, left: -80, pointerEvents: 'none',
        }} />

        <div style={{ position: 'relative', zIndex: 1, maxWidth: 760, animation: 'fadeIn 0.5s ease' }}>
          <div style={{
            display: 'inline-flex', alignItems: 'center', gap: 8,
            background: '#f5f3ff', borderRadius: 20, padding: '6px 16px',
            fontSize: 13, fontWeight: 600, color: '#a855f7', marginBottom: 28,
          }}>
            <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#a855f7', display: 'inline-block' }} />
            Digital Health Record Management
          </div>

          <h1 style={{ fontSize: 'clamp(38px, 6vw, 64px)', fontWeight: 700, lineHeight: 1.12, marginBottom: 24 }}>
            Your Health Records,{' '}
            <span style={{ background: 'linear-gradient(135deg, #ff6b6b, #a855f7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Secured &amp; Accessible
            </span>
          </h1>

          <p style={{ fontSize: 18, color: '#6b7280', lineHeight: 1.7, marginBottom: 40, maxWidth: 580, margin: '0 auto 40px' }}>
            MediVault gives patients full control over their medical data. Share securely with doctors, access anywhere, anytime.
          </p>

          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              onClick={() => navigate('/signup')}
              style={{
                padding: '14px 32px', borderRadius: 11, border: 'none',
                background: 'linear-gradient(135deg, #ff6b6b, #a855f7)',
                color: 'white', fontFamily: 'inherit', fontSize: 15, fontWeight: 600,
                cursor: 'pointer', transition: 'transform 0.2s, opacity 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
            >
              Get Started Free
            </button>
            <button
              onClick={() => { document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' }); }}
              style={{
                padding: '14px 32px', borderRadius: 11, border: '1.5px solid #e9e7f0',
                background: 'transparent', color: '#1a1523', fontFamily: 'inherit',
                fontSize: 15, fontWeight: 500, cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#a855f7'; (e.currentTarget as HTMLButtonElement).style.color = '#a855f7'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.borderColor = '#e9e7f0'; (e.currentTarget as HTMLButtonElement).style.color = '#1a1523'; }}
            >
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* ─── FEATURES ─── */}
      <section id="features" style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 12 }}>Everything you need</h2>
            <p style={{ color: '#6b7280', fontSize: 16 }}>Built for security, designed for simplicity.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 24 }}>
            {[
              {
                delay: '0s',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <path d="M14 2L4 7v8c0 5.5 4.3 10.7 10 12 5.7-1.3 10-6.5 10-12V7L14 2z" stroke="url(#g1)" strokeWidth="2" fill="none" strokeLinejoin="round" />
                    <path d="M10 14l3 3 5-5" stroke="url(#g1)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <defs>
                      <linearGradient id="g1" x1="4" y1="2" x2="24" y2="26" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ff6b6b" /><stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
                title: 'Bank-Level Security',
                desc: 'JWT auth, bcrypt encryption, and role-based access control protect every record.',
              },
              {
                delay: '0.1s',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <circle cx="6" cy="14" r="3.5" stroke="url(#g2)" strokeWidth="2" />
                    <circle cx="22" cy="6" r="3.5" stroke="url(#g2)" strokeWidth="2" />
                    <circle cx="22" cy="22" r="3.5" stroke="url(#g2)" strokeWidth="2" />
                    <line x1="9.5" y1="12.5" x2="18.5" y2="7.5" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="9.5" y1="15.5" x2="18.5" y2="20.5" stroke="url(#g2)" strokeWidth="2" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="g2" x1="4" y1="4" x2="24" y2="24" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ff6b6b" /><stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
                title: 'Consent-Based Sharing',
                desc: 'Generate time-limited share links for doctors. Revoke access anytime with one click.',
              },
              {
                delay: '0.2s',
                icon: (
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
                    <rect x="3" y="3" width="8" height="8" rx="1.5" stroke="url(#g3)" strokeWidth="2" />
                    <rect x="17" y="3" width="8" height="8" rx="1.5" stroke="url(#g3)" strokeWidth="2" />
                    <rect x="3" y="17" width="8" height="8" rx="1.5" stroke="url(#g3)" strokeWidth="2" />
                    <rect x="5.5" y="5.5" width="3" height="3" rx="0.5" fill="url(#g3)" />
                    <rect x="19.5" y="5.5" width="3" height="3" rx="0.5" fill="url(#g3)" />
                    <rect x="5.5" y="19.5" width="3" height="3" rx="0.5" fill="url(#g3)" />
                    <line x1="17" y1="17" x2="25" y2="17" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="17" y1="21" x2="21" y2="21" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
                    <line x1="17" y1="25" x2="25" y2="25" stroke="url(#g3)" strokeWidth="2" strokeLinecap="round" />
                    <defs>
                      <linearGradient id="g3" x1="3" y1="3" x2="25" y2="25" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#ff6b6b" /><stop offset="1" stopColor="#a855f7" />
                      </linearGradient>
                    </defs>
                  </svg>
                ),
                title: 'Emergency Access',
                desc: 'Critical health info accessible via QR code scan — no login needed in emergencies.',
              },
            ].map((f) => (
              <div
                key={f.title}
                style={{
                  background: '#fafaf8', borderRadius: 16, padding: '32px 28px',
                  border: '1px solid #f0eef8',
                  boxShadow: '0 2px 16px rgba(168, 85, 247, 0.06)',
                  animation: `cardIn 0.4s ease ${f.delay} both`,
                }}
              >
                <div style={{
                  width: 52, height: 52, borderRadius: 13, background: '#f5f3ff',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 20,
                }}>
                  {f.icon}
                </div>
                <h3 style={{ fontSize: 17, fontWeight: 700, marginBottom: 10 }}>{f.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section style={{ padding: '88px 48px', background: '#fafaf8' }}>
        <div style={{ maxWidth: 900, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 12 }}>Simple. Secure. Smart.</h2>
          <p style={{ color: '#6b7280', fontSize: 16, marginBottom: 56 }}>
            Get up and running in minutes.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32 }}>
            {[
              { num: '01', title: 'Create Account', desc: 'Register as a patient or doctor in seconds.' },
              { num: '02', title: 'Upload Records', desc: 'Securely store all your medical documents in one place.' },
              { num: '03', title: 'Share & Manage', desc: 'Grant doctors time-limited access and revoke anytime.' },
            ].map((step) => (
              <div key={step.num} style={{ textAlign: 'center' }}>
                <div style={{
                  width: 56, height: 56, borderRadius: '50%', margin: '0 auto 18px',
                  background: 'linear-gradient(135deg, #ff6b6b, #a855f7)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 15, fontWeight: 700, color: 'white',
                }}>
                  {step.num}
                </div>
                <h3 style={{ fontSize: 16, fontWeight: 700, marginBottom: 8 }}>{step.title}</h3>
                <p style={{ fontSize: 14, color: '#6b7280', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ROLES ─── */}
      <section style={{ padding: '80px 48px', background: '#ffffff' }}>
        <div style={{ maxWidth: 960, margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <h2 style={{ fontSize: 34, fontWeight: 700, marginBottom: 12 }}>Built for everyone</h2>
            <p style={{ color: '#6b7280', fontSize: 16 }}>Purpose-built experiences for patients and doctors.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 24 }}>
            {/* Patient card */}
            <div style={{
              background: '#fafaf8', borderRadius: 16, padding: '32px 28px',
              border: '1px solid #f0eef8', borderTop: '3px solid #ff6b6b',
              boxShadow: '0 2px 16px rgba(255, 107, 107, 0.07)',
            }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{
                  display: 'inline-block', background: '#fff1f0', color: '#ff6b6b',
                  fontWeight: 700, fontSize: 13, padding: '4px 12px', borderRadius: 20,
                }}>
                  For Patients
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['Upload documents securely', 'Share with doctors instantly', 'Emergency QR code access', 'Full access control'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#1a1523' }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%', background: '#fff1f0',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#ff6b6b" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Doctor card */}
            <div style={{
              background: '#fafaf8', borderRadius: 16, padding: '32px 28px',
              border: '1px solid #f0eef8', borderTop: '3px solid #a855f7',
              boxShadow: '0 2px 16px rgba(168, 85, 247, 0.07)',
            }}>
              <div style={{ marginBottom: 20 }}>
                <span style={{
                  display: 'inline-block', background: '#f5f3ff', color: '#a855f7',
                  fontWeight: 700, fontSize: 13, padding: '4px 12px', borderRadius: 20,
                }}>
                  For Doctors
                </span>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: 12 }}>
                {['View shared patient records', 'Add consultation notes', 'Secure document inbox', 'Time-limited access only'].map((item) => (
                  <li key={item} style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: '#1a1523' }}>
                    <span style={{
                      width: 20, height: 20, borderRadius: '50%', background: '#f5f3ff',
                      display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                    }}>
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5l2.5 2.5L8 3" stroke="#a855f7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section style={{ padding: '80px 48px', background: '#fafaf8' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <div style={{
            background: 'linear-gradient(135deg, #ff6b6b, #a855f7)',
            borderRadius: 24, padding: '56px 48px', textAlign: 'center',
            boxShadow: '0 8px 40px rgba(168, 85, 247, 0.25)',
          }}>
            <h2 style={{ fontSize: 30, fontWeight: 700, color: 'white', marginBottom: 14, lineHeight: 1.25 }}>
              Ready to take control of your health data?
            </h2>
            <p style={{ color: 'rgba(255,255,255,0.85)', fontSize: 16, marginBottom: 32 }}>
              Join thousands of patients already managing their records securely.
            </p>
            <button
              onClick={() => navigate('/signup')}
              style={{
                padding: '14px 36px', borderRadius: 11, border: 'none',
                background: 'white', color: '#1a1523',
                fontFamily: 'inherit', fontSize: 15, fontWeight: 700,
                cursor: 'pointer', transition: 'transform 0.2s',
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1.03)'; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.transform = 'scale(1)'; }}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>

      {/* ─── FOOTER ─── */}
      <footer style={{
        padding: '28px 48px', borderTop: '1px solid #f0eef8',
        textAlign: 'center', color: '#6b7280', fontSize: 13, background: '#ffffff',
      }}>
        MediVault &copy; 2025 — Built for secure health record management
      </footer>

      {/* inline keyframes for cardIn */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cardIn  { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}
