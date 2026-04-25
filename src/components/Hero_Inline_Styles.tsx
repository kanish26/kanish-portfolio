'use client'
import { motion } from 'framer-motion'
import { ArrowDown, Eye, Download, Briefcase, FolderKanban } from 'lucide-react'
import Image from 'next/image'
import { experience, projects } from '@/data/projects'

export default function Hero() {
  return (
    <section id="about" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      padding: '24px',
      paddingTop: '112px',
      paddingBottom: '72px',
      background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 55%, #eef4ff 100%)',
    }}>
      <div style={{
        maxWidth: '1280px',
        width: '100%',
        margin: '0 auto',
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
        gap: '56px',
        alignItems: 'center',
      }}>
        <div style={{ display: 'grid', gap: '32px', justifyItems: 'start' }}>
          {/* Circular Avatar with Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            style={{
              width: '220px',
              height: '220px',
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
              padding: '5px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
              boxShadow: '0 30px 70px rgba(0, 102, 255, 0.22)',
            }}
          >
            <Image
              src="/profile.jpg"
              alt="Kanish Godani"
              width={210}
              height={210}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                objectFit: 'cover',
              }}
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{ textAlign: 'left' }}
          >
            <p style={{
              color: '#0066ff',
              fontWeight: '600',
              marginBottom: '20px',
              fontSize: '16px',
              letterSpacing: '0.6px',
              textTransform: 'uppercase',
            }}>
              👋 Hi, my name is
            </p>

            <h1 style={{
              fontSize: 'clamp(3rem, 6vw, 5.2rem)',
              fontWeight: '700',
              marginBottom: '18px',
              background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              letterSpacing: '-1px',
            }}>
              Kanish Godani
            </h1>

            <h2 style={{
              fontSize: 'clamp(1.35rem, 2.4vw, 2.1rem)',
              fontWeight: '700',
              background: 'linear-gradient(135deg, #7c3aed, #00d9ff)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              marginBottom: '24px',
            }}>
              Data Scientist & Analytics Expert
            </h2>

            <p style={{
              fontSize: '18px',
              color: '#666',
              maxWidth: '620px',
              marginBottom: '36px',
              lineHeight: '1.75',
            }}>
              MS in Information Management at UIUC with a passion for transforming
              complex data into actionable insights. Specializing in machine learning,
              cloud computing, and business intelligence.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(220px, auto) minmax(300px, 1fr)',
              gap: '20px',
              alignItems: 'stretch',
              width: '100%',
              maxWidth: '720px',
            }}
          >
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'stretch',
                background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
                borderRadius: '12px',
                boxShadow: '0 8px 20px rgba(0, 102, 255, 0.3)',
                overflow: 'hidden',
                alignSelf: 'start',
              }}
            >
              <a
                href="/Kanish_Godani_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: '16px 24px',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  fontSize: '16px',
                  fontWeight: '600',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Eye size={18} />
                View
              </a>
              <div style={{ width: '1px', backgroundColor: 'rgba(255, 255, 255, 0.24)' }} />
              <a
                href="/Kanish_Godani_Resume.pdf"
                download
                style={{
                  padding: '16px 20px',
                  color: 'white',
                  textDecoration: 'none',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '8px',
                  transition: 'background-color 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent'
                }}
              >
                <Download size={18} />
                Download
              </a>
            </div>

            <div
              style={{
                minWidth: '300px',
                padding: '18px',
                borderRadius: '20px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                border: '1px solid #dbeafe',
                boxShadow: '0 16px 40px rgba(59, 130, 246, 0.12)',
              }}
            >
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                marginBottom: '12px',
                fontSize: '12px',
                fontWeight: '700',
                color: '#64748b',
                letterSpacing: '0.8px',
                textTransform: 'uppercase',
              }}>
                <span>Portfolio Snapshot</span>
                <span>100%</span>
              </div>
              <div style={{
                height: '12px',
                borderRadius: '999px',
                background: '#e2e8f0',
                overflow: 'hidden',
                marginBottom: '18px',
              }}>
                <div style={{
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, #0066ff 0%, #7c3aed 55%, #00d9ff 100%)',
                }} />
              </div>
              <div style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                gap: '12px',
              }}>
                <div style={{
                  padding: '12px',
                  borderRadius: '14px',
                  backgroundColor: '#eff6ff',
                  border: '1px solid #bfdbfe',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Briefcase size={15} color="#0066ff" />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0066ff' }}>Experience</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                    {experience.length}
                  </div>
                </div>
                <div style={{
                  padding: '12px',
                  borderRadius: '14px',
                  backgroundColor: '#f5f3ff',
                  border: '1px solid #ddd6fe',
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <FolderKanban size={15} color="#7c3aed" />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#7c3aed' }}>Projects</span>
                  </div>
                  <div style={{ fontSize: '28px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                    {projects.length}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.aside
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          style={{
            backgroundColor: 'rgba(255, 255, 255, 0.86)',
            border: '1px solid rgba(219, 234, 254, 0.95)',
            borderRadius: '28px',
            padding: '40px',
            boxShadow: '0 30px 80px rgba(15, 23, 42, 0.08)',
            backdropFilter: 'blur(12px)',
          }}
        >
          <p style={{
            color: '#7c3aed',
            fontWeight: '700',
            fontSize: '12px',
            letterSpacing: '1.4px',
            textTransform: 'uppercase',
            marginBottom: '20px',
          }}>
            About Me
          </p>

          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3.2rem)',
            marginBottom: '24px',
            color: '#0f0f0f',
          }}>
            Building data products that turn complexity into clarity.
          </h2>

          <div style={{ display: 'grid', gap: '20px' }}>
            <p style={{
              fontSize: '17px',
              color: '#555',
              lineHeight: '1.8',
            }}>
              I&apos;m a graduate student at the University of Illinois Urbana-Champaign,
              pursuing a Master&apos;s in Information Management with a perfect 4.0 GPA.
              My passion lies at the intersection of data science, machine learning,
              and business intelligence.
            </p>
            <p style={{
              fontSize: '17px',
              color: '#555',
              lineHeight: '1.8',
            }}>
              With hands-on experience in building end-to-end ML pipelines on AWS,
              creating predictive models with 88% accuracy, and developing interactive
              dashboards that drive business decisions, I bring a unique blend of
              technical expertise and business acumen to every project.
            </p>
            <p style={{
              fontSize: '17px',
              color: '#555',
              lineHeight: '1.8',
            }}>
              When I&apos;m not working with data, you can find me exploring new technologies,
              contributing to open-source projects, or mentoring fellow students in
              data analytics.
            </p>
          </div>
        </motion.aside>

        {/* Scroll Indicator */}
        <motion.div
          style={{
            position: 'absolute',
            bottom: '32px',
            left: '50%',
            transform: 'translateX(-50%)',
          }}
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
        >
          <ArrowDown style={{ color: '#ccc' }} size={24} />
        </motion.div>
      </div>
    </section>
  )
}
