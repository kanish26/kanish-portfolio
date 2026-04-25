'use client'
import { motion } from 'framer-motion'
import { Mail, GitFork, Briefcase, Phone, MapPin } from 'lucide-react'

export default function Contact() {
  return (
    <section 
      id="contact" 
      style={{
        padding: '128px 24px',
        background: 'linear-gradient(to bottom, #f9fafb, white)',
      }}
    >
      <div style={{ maxWidth: '896px', margin: '0 auto', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <span style={{
            display: 'inline-block',
            color: '#00d9ff',
            fontWeight: 'bold',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            🚀 Get in Touch
          </span>
          
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '32px',
            background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Let&apos;s Connect
          </h2>

          <p style={{
            fontSize: '18px',
            color: '#666',
            marginBottom: '48px',
            maxWidth: '600px',
            margin: '0 auto 48px',
            lineHeight: '1.6',
          }}>
            I&apos;m always interested in discussing data science, analytics, and exciting opportunities.
            Feel free to reach out if you&apos;d like to collaborate or just say hello!
          </p>

          {/* Contact Buttons */}
          <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '16px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="mailto:kgodani2@illinois.edu"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                background: 'linear-gradient(135deg, #0066ff, #00d9ff)',
                color: 'white',
                borderRadius: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                border: 'none',
                boxShadow: '0 8px 20px rgba(0, 102, 255, 0.3)',
                transition: 'all 0.3s ease',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = '0 12px 30px rgba(0, 102, 255, 0.5)'
                e.currentTarget.style.transform = 'translateY(-2px)'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 102, 255, 0.3)'
                e.currentTarget.style.transform = 'translateY(0)'
              }}
            >
              <Mail size={20} />
              Email Me
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.98 }}
              href="tel:872-279-4605"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                padding: '16px 32px',
                border: '2px solid #7c3aed',
                color: '#7c3aed',
                borderRadius: '12px',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '16px',
                cursor: 'pointer',
                backgroundColor: 'white',
                transition: 'all 0.3s ease',
                justifyContent: 'center',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f0e6ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'white'
              }}
            >
              <Phone size={20} />
              Call Me
            </motion.a>
          </div>

          {/* Social Links Label */}
          <p style={{
            fontSize: '14px',
            color: '#666',
            fontWeight: '600',
            marginBottom: '24px',
          }}>
            Or connect with me on
          </p>

          {/* Social Icons */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '24px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}>
            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://linkedin.com/in/kanish-godani"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 20px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #e0e7ff, #dbeafe)',
                border: '2px solid #bfdbfe',
                color: '#0066ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontWeight: '700',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#0066ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#bfdbfe'
              }}
            >
              <Briefcase size={28} />
              LinkedIn
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              href="https://github.com/kanishgodani"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: '14px 20px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #f0e6ff, #ede9fe)',
                border: '2px solid #ddd6fe',
                color: '#7c3aed',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '10px',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                fontWeight: '700',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = '#7c3aed'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = '#ddd6fe'
              }}
            >
              <GitFork size={28} />
              GitHub
            </motion.a>
          </div>

          {/* Location */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '12px 24px',
              backgroundColor: '#f3f4f6',
              borderRadius: '24px',
              color: '#444',
              fontWeight: '600',
            }}
          >
            <MapPin size={18} color="#10b981" />
            Champaign, Illinois
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
