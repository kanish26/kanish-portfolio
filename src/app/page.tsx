import Header from '@/components/Header_Inline_Styles'
import Hero from '@/components/Hero_Inline_Styles'
import Experience from '@/components/Experience_Inline_Styles'
import Projects from '@/components/Projects_Inline_Styles'
import Skills from '@/components/Skills_Inline_Styles'
import Contact from '@/components/Contact_Inline_Styles'
import { Camera, Film, Globe2, Music4, Trophy } from 'lucide-react'

const passions = [
  { name: 'Travel', icon: Globe2, color: '#0066ff', bg: '#eff6ff' },
  { name: 'Music', icon: Music4, color: '#7c3aed', bg: '#f5f3ff' },
  { name: 'Movies', icon: Film, color: '#f97316', bg: '#fff7ed' },
  { name: 'Photography', icon: Camera, color: '#10b981', bg: '#ecfdf5' },
  { name: 'Soccer', icon: Trophy, color: '#ef4444', bg: '#fef2f2' },
]

export default function Home() {
  return (
    <main style={{ backgroundColor: '#ffffff' }}>
      <Header />
      <Hero />

      <section style={{ padding: '0 24px 56px', backgroundColor: '#ffffff' }}>
        <div style={{
          maxWidth: '1120px',
          margin: '0 auto',
          borderRadius: '28px',
          padding: '28px',
          background: 'linear-gradient(135deg, #0f172a 0%, #1e293b 65%, #334155 100%)',
          boxShadow: '0 28px 60px rgba(15, 23, 42, 0.16)',
          color: 'white',
        }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '20px',
            marginBottom: '24px',
          }}>
            <div>
              <p style={{
                margin: '0 0 8px',
                fontSize: '12px',
                letterSpacing: '1.2px',
                textTransform: 'uppercase',
                color: '#93c5fd',
                fontWeight: '700',
              }}>
                Beyond Data
              </p>
              <h2 style={{
                margin: 0,
                fontSize: 'clamp(1.75rem, 3vw, 2.4rem)',
                color: '#ffffff',
              }}>
                The interests that keep my work creative and human.
              </h2>
            </div>
            <p style={{
              margin: 0,
              maxWidth: '420px',
              color: '#cbd5e1',
              fontSize: '15px',
              lineHeight: '1.7',
            }}>
              I bring the same curiosity I use in analytics to the things I enjoy outside work:
              exploring places, stories, sound, moments, and team play.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '16px',
          }}>
            {passions.map((passion) => {
              const Icon = passion.icon
              return (
                <div
                  key={passion.name}
                  style={{
                    borderRadius: '20px',
                    padding: '18px 16px',
                    background: 'rgba(255, 255, 255, 0.07)',
                    border: '1px solid rgba(255, 255, 255, 0.12)',
                    display: 'grid',
                    gap: '14px',
                    justifyItems: 'start',
                  }}
                >
                  <div style={{
                    width: '44px',
                    height: '44px',
                    borderRadius: '14px',
                    backgroundColor: passion.bg,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <Icon size={22} color={passion.color} />
                  </div>
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#ffffff', marginBottom: '4px' }}>
                      {passion.name}
                    </div>
                    <div style={{ fontSize: '13px', color: '#cbd5e1', lineHeight: '1.5' }}>
                      {passion.name === 'Travel' && 'New places, new perspectives.'}
                      {passion.name === 'Music' && 'Rhythm that keeps ideas flowing.'}
                      {passion.name === 'Movies' && 'Storytelling and strong narratives.'}
                      {passion.name === 'Photography' && 'Finding detail in everyday scenes.'}
                      {passion.name === 'Soccer' && 'Energy, teamwork, and momentum.'}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Experience Section - APPEARS ONLY ONCE */}
      <Experience />

      {/* Projects Section */}
      <Projects />

      {/* Skills Section */}
      <Skills />

      {/* Contact Section */}
      <Contact />

      {/* Footer */}
      <footer style={{
        padding: '32px 24px',
        borderTop: '1px solid #e5e7eb',
        backgroundColor: '#ffffff',
        textAlign: 'center',
      }}>
        <p style={{
          fontSize: '14px',
          color: '#999',
        }}>
          © {new Date().getFullYear()} Kanish Godani. Built with Next.js & Tailwind CSS.
        </p>
      </footer>
    </main>
  )
}
