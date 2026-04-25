'use client'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard_Inline_Styles'
import { projects } from '@/data/projects'

export default function Projects() {
  return (
    <section 
      id="projects" 
      style={{
        padding: '128px 24px',
        backgroundColor: '#ffffff',
      }}
    >
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{
            textAlign: 'center',
            marginBottom: '80px',
          }}
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
            ✨ Featured Work
          </span>
          <h2 style={{
            fontSize: '48px',
            fontWeight: 'bold',
            marginBottom: '24px',
            background: 'linear-gradient(135deg, #0066ff 0%, #7c3aed 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
          }}>
            Featured Projects
          </h2>
          <p style={{
            fontSize: '18px',
            color: '#666',
            maxWidth: '768px',
            margin: '0 auto',
            lineHeight: '1.6',
          }}>
            A selection of data science and analytics projects showcasing my skills
            in machine learning, cloud computing, and data visualization.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px',
        }}>
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}