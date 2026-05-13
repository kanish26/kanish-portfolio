'use client'
import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Eye, Download, Briefcase, FolderKanban } from 'lucide-react'
import Image from 'next/image'
import { experience, projects } from '@/data/projects'

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 900)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const profileSize = isMobile ? 180 : 210

  return (
    <section
      id="about"
      style={{
        minHeight: isMobile ? 'auto' : '100svh',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        justifyContent: 'center',
        position: 'relative',
        padding: '24px',
        paddingTop: isMobile ? '112px' : '104px',
        paddingBottom: isMobile ? '96px' : '40px',
        background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 55%, #eef4ff 100%)',
      }}
    >
      <div
        style={{
          maxWidth: '1280px',
          width: '100%',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'minmax(0, 720px) minmax(0, 1fr)',
          gap: isMobile ? '36px' : '22px',
          alignItems: isMobile ? 'start' : 'stretch',
        }}
      >
        <div
          style={{
            display: 'grid',
            gap: isMobile ? '28px' : '24px',
            minWidth: 0,
            height: '100%',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : `${profileSize}px minmax(270px, 320px)`,
              gap: isMobile ? '20px' : '28px',
              alignItems: 'start',
              width: '100%',
            }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                width: `${profileSize}px`,
                height: `${profileSize}px`,
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
                width={profileSize - 10}
                height={profileSize - 10}
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
              initial={{ opacity: 0, scale: 0.9, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.16 }}
              style={{
                width: '100%',
                padding: isMobile ? '14px' : '16px',
                borderRadius: '18px',
                background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                border: '1px solid #dbeafe',
                boxShadow: '0 16px 34px rgba(59, 130, 246, 0.10)',
                alignSelf: isMobile ? 'start' : 'center',
                justifySelf: isMobile ? 'stretch' : 'stretch',
                marginLeft: '0',
                marginRight: '0',
                marginTop: isMobile ? '0' : '18px',
              }}
            >
              <div
                style={{
                  marginBottom: '14px',
                  fontSize: '12px',
                  fontWeight: '700',
                  color: '#64748b',
                  letterSpacing: '0.8px',
                  textTransform: 'uppercase',
                }}
              >
                Portfolio Snapshot
              </div>
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(2, minmax(0, 1fr))',
                  gap: '10px',
                }}
              >
                <div
                  style={{
                    padding: '11px',
                    borderRadius: '14px',
                    backgroundColor: '#eff6ff',
                    border: '1px solid #bfdbfe',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <Briefcase size={15} color="#0066ff" />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#0066ff' }}>Experience</span>
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                    {experience.length}
                  </div>
                </div>
                <div
                  style={{
                    padding: '11px',
                    borderRadius: '14px',
                    backgroundColor: '#f5f3ff',
                    border: '1px solid #ddd6fe',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                    <FolderKanban size={15} color="#7c3aed" />
                    <span style={{ fontSize: '12px', fontWeight: '700', color: '#7c3aed' }}>Projects</span>
                  </div>
                  <div style={{ fontSize: '22px', fontWeight: '800', color: '#0f172a', lineHeight: 1 }}>
                    {projects.length}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              textAlign: 'left',
              maxWidth: isMobile ? '100%' : '640px',
              alignSelf: 'start',
            }}
          >
            <p
              style={{
                color: '#0066ff',
                fontWeight: '600',
                marginBottom: '20px',
                fontSize: '16px',
                letterSpacing: '0.6px',
                textTransform: 'uppercase',
              }}
            >
              👋 Hi, my name is
            </p>

            <h1
              style={{
                fontSize: isMobile ? 'clamp(3rem, 13vw, 4.6rem)' : 'clamp(4rem, 6.2vw, 5.8rem)',
                fontWeight: '700',
                marginBottom: '18px',
                background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-1.2px',
                lineHeight: 0.95,
              }}
            >
              Kanish Godani
            </h1>

            <h2
              style={{
                fontSize: isMobile ? 'clamp(1.35rem, 6vw, 2rem)' : 'clamp(1.7rem, 2.4vw, 2.3rem)',
                fontWeight: '700',
                background: 'linear-gradient(135deg, #7c3aed, #00d9ff)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                marginBottom: '24px',
                lineHeight: 1.08,
              }}
            >
              Data Scientist & Analyst | AI Enthusiast
            </h2>

            <p
              style={{
                fontSize: isMobile ? '18px' : '19px',
                color: '#666',
                maxWidth: isMobile ? '100%' : '610px',
                marginBottom: '0',
                lineHeight: '1.7',
              }}
            >
              Curious about patterns, focused on outcomes — actively exploring roles in Data Science, Analytics, and ML/AI engineering.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'flex',
              justifyContent: isMobile ? 'flex-start' : 'center',
              width: '100%',
            }}
          >
            <div
              style={{
                display: 'grid',
                gap: '10px',
                background: '#ffffff',
                borderRadius: '22px',
                boxShadow: '0 8px 20px rgba(0, 102, 255, 0.16)',
                overflow: 'hidden',
                border: '1px solid #dbeafe',
                padding: '12px',
                minWidth: isMobile ? '100%' : '360px',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  color: '#0f172a',
                  fontSize: '13px',
                  fontWeight: '800',
                  letterSpacing: '0.9px',
                  textTransform: 'uppercase',
                }}
              >
                Resume
              </div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'stretch',
                  justifyContent: 'center',
                  background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
                  borderRadius: '14px',
                  boxShadow: '0 8px 20px rgba(0, 102, 255, 0.24)',
                  overflow: 'hidden',
                }}
              >
                <a
                  href="/Users/kanishgodani/Codes/kanish-portfolio-2/public/Kanish_Godani_Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    padding: '13px 18px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontSize: '15px',
                    fontWeight: '600',
                    transition: 'background-color 0.3s ease',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Eye size={18} />
                  View
                </a>
                <div style={{ width: '1px', backgroundColor: 'rgba(255,255,255,0.22)' }} />
                <a
                  href="/Users/kanishgodani/Codes/kanish-portfolio-2/public/Kanish_Godani_Resume.pdf"
                  download
                  style={{
                    padding: '13px 18px',
                    color: 'white',
                    textDecoration: 'none',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    transition: 'background-color 0.3s ease',
                    fontSize: '15px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.08)'
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'transparent'
                  }}
                >
                  <Download size={18} />
                  Download
                </a>
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
              padding: isMobile ? '33px 40px' : '40px 56px',
              boxShadow: '0 30px 80px rgba(15, 23, 42, 0.08)',
              backdropFilter: 'blur(12px)',
            alignSelf: isMobile ? 'start' : 'stretch',
            minHeight: isMobile ? 'auto' : '100%',
            width: '100%',
            maxWidth: isMobile ? '100%' : '100%',
            justifySelf: isMobile ? 'stretch' : 'end',
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <p
            style={{
              color: '#7c3aed',
              fontWeight: '700',
              fontSize: '12px',
              letterSpacing: '1.4px',
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}
          >
            About Me
          </p>

          <h4
            style={{
              fontSize: 'clamp(1.7rem, 2.45vw, 2.8rem)',
              marginBottom: '14px',
              color: '#0f0f0f',
              lineHeight: '1.08',
            }}
          >
            Building data products that turn complexity into clarity.
          </h4>

          <div style={{ display: 'grid', gap: '14px' }}>
            <p
              style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.64',
              }}
            >
              I&apos;m a graduate student at the University of Illinois Urbana-Champaign, pursuing a Master&apos;s in Information Management with a perfect 4.0 GPA. My passion lies in working with complex data to uncover what truly matters and make it useful for the real world.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.64',
              }}
            >
              I enjoy taking on problems where the data is messy and the answers aren&apos;t obvious. Over the past couple of years, I&apos;ve worked across diverse datasets and domains from sports analytics and insurance to energy and beyond, each experience shaping how I think about data not just as numbers, but as a tool for better decisions. I like building things end to end, from making sense of raw data to training models and delivering something a business can actually use.
            </p>
            <p
              style={{
                fontSize: '15px',
                color: '#555',
                lineHeight: '1.64',
              }}
            >
              Beyond data, I&apos;m driven by curiosity, a love for continuous learning, and a tendency to overthink problems until they finally make sense.
            </p>
          </div>
        </motion.aside>

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
