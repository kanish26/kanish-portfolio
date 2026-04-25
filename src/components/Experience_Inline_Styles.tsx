'use client'
import { motion } from 'framer-motion'
import { experience } from '@/data/projects'
import { MapPin, Calendar, Cpu, Users } from 'lucide-react'

export default function Experience() {
  return (
    <section 
      id="experience" 
      style={{
        padding: '128px 24px',
        backgroundColor: '#f9fafb',
      }}
    >
      <div style={{ maxWidth: '896px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <span style={{
            display: 'inline-block',
            color: '#0066ff',
            fontWeight: 'bold',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            💼 My Journey
          </span>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            color: '#0066ff',
            marginBottom: '24px',
          }}>
            Experience
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
          }}>
            My professional journey in data science and analytics.
          </p>
        </motion.div>

        {/* Timeline */}
        <div style={{ position: 'relative' }}>
          {experience.map((job, index) => (
            <motion.div
              key={`${job.company}-${job.title}`}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              style={{
                position: 'relative',
                paddingLeft: '60px',
                marginBottom: '48px',
                paddingTop: index === 0 ? '0' : '24px',
              }}
            >
              {/* Timeline Line */}
              {index < experience.length - 1 && (
                <div
                  style={{
                    position: 'absolute',
                    left: '20px',
                    top: '60px',
                    bottom: '-48px',
                    width: '2px',
                    background: 'linear-gradient(to bottom, #0066ff, #7c3aed)',
                  }}
                />
              )}

              {/* Timeline Dot */}
              <motion.div
                whileHover={{ scale: 1.3 }}
                style={{
                  position: 'absolute',
                  left: '0',
                  top: '0',
                  width: '40px',
                  height: '40px',
                  background: 'linear-gradient(135deg, #0066ff, #7c3aed)',
                  borderRadius: '50%',
                  border: '4px solid white',
                  boxShadow: '0 4px 12px rgba(0, 102, 255, 0.3)',
                }}
              />

              {/* Content Card */}
              <div
                style={{
                  backgroundColor: 'white',
                  borderRadius: '12px',
                  padding: '32px',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(0, 102, 255, 0.1)'
                  e.currentTarget.style.borderColor = '#0066ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = 'none'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Title & Company */}
                <div style={{ marginBottom: '12px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: 'bold',
                    marginBottom: '4px',
                  }}>
                    {job.title}
                  </h3>
                  <p style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#0066ff',
                  }}>
                    {job.company}
                  </p>
                </div>

                {/* Location & Date */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '24px',
                  fontSize: '14px',
                  color: '#666',
                  marginBottom: '24px',
                  paddingBottom: '24px',
                  borderBottom: '1px solid #e5e7eb',
                }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <MapPin size={16} color="#0066ff" />
                    {job.location}
                  </span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <Calendar size={16} color="#7c3aed" />
                    {job.period}
                  </span>
                </div>

                <p style={{
                  color: '#444',
                  lineHeight: '1.8',
                  marginBottom: '28px',
                  fontSize: '15px',
                }}>
                  {job.summary}
                </p>

                <div style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                  gap: '20px',
                }}>
                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      color: '#0f0f0f',
                      fontWeight: '700',
                      fontSize: '14px',
                    }}>
                      <Cpu size={16} color="#0066ff" />
                      Tech Stack
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {job.techStack.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: '6px 10px',
                            borderRadius: '999px',
                            backgroundColor: '#eff6ff',
                            color: '#0066ff',
                            fontSize: '12px',
                            fontWeight: '600',
                            border: '1px solid #bfdbfe',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      marginBottom: '12px',
                      color: '#0f0f0f',
                      fontWeight: '700',
                      fontSize: '14px',
                    }}>
                      <Users size={16} color="#7c3aed" />
                      Soft Skills
                    </div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                      {job.softSkills.map((item) => (
                        <span
                          key={item}
                          style={{
                            padding: '6px 10px',
                            borderRadius: '999px',
                            backgroundColor: '#f5f3ff',
                            color: '#7c3aed',
                            fontSize: '12px',
                            fontWeight: '600',
                            border: '1px solid #ddd6fe',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
