'use client'
import { motion } from 'framer-motion'
import { skills } from '@/data/projects'
import { Code, Cloud, BarChart3, Wrench } from 'lucide-react'

const skillCategories = [
  { name: 'Languages', icon: Code, items: skills.languages, color: '#0066ff' },
  { name: 'Libraries & Frameworks', icon: BarChart3, items: skills.libraries, color: '#0066ff' },
  { name: 'Tools', icon: Wrench, items: skills.tools, color: '#0066ff' },
  { name: 'Cloud & Databases', icon: Cloud, items: [...skills.cloud, ...skills.databases], color: '#0066ff' },
]

export default function Skills() {
  return (
    <section id="skills" style={{ padding: '128px 24px', backgroundColor: '#ffffff' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
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
            color: '#7c3aed',
            fontWeight: 'bold',
            fontSize: '12px',
            textTransform: 'uppercase',
            letterSpacing: '1px',
            marginBottom: '16px',
          }}>
            🛠️ My Toolkit
          </span>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px',
            color: '#0f0f0f',
          }}>
            Technical Skills
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '768px',
            margin: '0 auto',
          }}>
            A comprehensive set of technologies and tools I use to build data-driven solutions.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px',
        }}>
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
                viewport={{ once: true }}
                style={{
                  backgroundColor: '#f9fafb',
                  borderRadius: '16px',
                  padding: '32px',
                  border: '1px solid #e5e7eb',
                  transition: 'all 0.3s ease',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 102, 255, 0.12)'
                  e.currentTarget.style.borderColor = '#0066ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
                  e.currentTarget.style.borderColor = '#e5e7eb'
                }}
              >
                {/* Icon & Title */}
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '16px',
                  marginBottom: '28px',
                }}>
                  <div style={{
                    padding: '12px',
                    backgroundColor: '#f0f4ff',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                    <IconComponent size={24} color="#0066ff" />
                  </div>
                  <h3 style={{
                    fontWeight: 'bold',
                    fontSize: '16px',
                    color: '#0f0f0f',
                  }}>
                    {category.name}
                  </h3>
                </div>

                {/* Skills Badges */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '10px',
                }}>
                  {category.items.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      style={{
                        padding: '8px 14px',
                        fontSize: '13px',
                        fontWeight: '500',
                        backgroundColor: '#ffffff',
                        color: '#555',
                        borderRadius: '8px',
                        border: '1px solid #d1d5db',
                        cursor: 'default',
                        transition: 'all 0.2s ease',
                        display: 'inline-block',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = '#0066ff'
                        e.currentTarget.style.color = '#0066ff'
                        e.currentTarget.style.backgroundColor = '#f0f4ff'
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = '#d1d5db'
                        e.currentTarget.style.color = '#555'
                        e.currentTarget.style.backgroundColor = '#ffffff'
                      }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
