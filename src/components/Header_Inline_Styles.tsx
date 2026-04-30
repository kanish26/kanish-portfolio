'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { GitFork, Briefcase } from 'lucide-react'

const navItems = [
  { name: 'About', href: '#about' },
  { name: 'AI', href: '/ai' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Beyond', href: '#beyond-data' },
  { name: 'Contact', href: '#contact' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768)
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 50,
      transition: 'all 0.3s ease',
      backgroundColor: isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent',
      backdropFilter: isScrolled ? 'blur(10px)' : 'none',
      borderBottom: isScrolled ? '1px solid #e5e7eb' : 'none',
    }}>
      <nav style={{
        maxWidth: '1280px',
        margin: '0 auto',
        padding: '20px 24px',
        display: 'flex',
        alignItems: isMobile ? 'flex-start' : 'center',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '14px' : '0',
        justifyContent: 'space-between',
      }}>
        {/* Logo */}
        <Link 
          href="/" 
          style={{
            fontSize: '20px',
            fontWeight: 'bold',
            background: 'linear-gradient(to right, #0066ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            textDecoration: 'none',
          }}
        >
          KG<span style={{ color: '#00d9ff' }}>.</span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                style={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: '#666',
                  textDecoration: 'none',
                  transition: 'color 0.3s ease',
                }}
                onMouseEnter={(e) => e.currentTarget.style.color = '#0066ff'}
                onMouseLeave={(e) => e.currentTarget.style.color = '#666'}
              >
                {item.name}
              </Link>
            ))}
          </div>
        )}

        {/* Social Links */}
        {!isMobile && (
          <div style={{ display: 'flex', gap: '16px' }}>
            <a 
              href="https://github.com/kanish26" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: '#f0f4ff',
                color: '#0066ff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dbeafe'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f4ff'
              }}
            >
              <GitFork size={20} />
              GitHub
            </a>
            <a 
              href="https://linkedin.com/in/kanish-godani" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                padding: '10px 14px',
                borderRadius: '8px',
                backgroundColor: '#f0f4ff',
                color: '#0066ff',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                fontWeight: '600',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#dbeafe'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = '#f0f4ff'
              }}
            >
              <Briefcase size={20} />
              LinkedIn
            </a>
          </div>
        )}

        {isMobile && (
          <div style={{ display: 'grid', gap: '12px', width: '100%' }}>
            <div style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '14px 18px',
              alignItems: 'center',
            }}>
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  style={{
                    fontSize: '14px',
                    fontWeight: '600',
                    color: '#666',
                    textDecoration: 'none',
                  }}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a 
                href="https://github.com/kanish26" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#f0f4ff',
                  color: '#0066ff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                <GitFork size={18} />
                GitHub
              </a>
              <a 
                href="https://linkedin.com/in/kanish-godani" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{
                  padding: '9px 12px',
                  borderRadius: '8px',
                  backgroundColor: '#f0f4ff',
                  color: '#0066ff',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  fontSize: '13px',
                  fontWeight: '600',
                }}
              >
                <Briefcase size={18} />
                LinkedIn
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}
