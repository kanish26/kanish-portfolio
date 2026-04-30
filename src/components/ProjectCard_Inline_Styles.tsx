'use client'
import { motion } from 'framer-motion'
import { Code, ExternalLink } from 'lucide-react'
import type { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  const highlightsSummary = project.highlights.join(' ')

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      style={{
        backgroundColor: '#f9fafb',
        border: '1px solid #e5e7eb',
        borderRadius: '16px',
        padding: '28px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'all 0.3s ease',
        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = '0 10px 25px rgba(0, 102, 255, 0.15)'
        e.currentTarget.style.borderColor = '#0066ff'
        e.currentTarget.style.transform = 'translateY(-4px)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)'
        e.currentTarget.style.borderColor = '#e5e7eb'
        e.currentTarget.style.transform = 'translateY(0)'
      }}
    >
      {/* Category Badge */}
      <div style={{ marginBottom: '16px' }}>
        <span style={{
          display: 'inline-block',
          padding: '6px 12px',
          fontSize: '11px',
          fontWeight: 'bold',
          borderRadius: '6px',
          backgroundColor: '#dbeafe',
          color: '#0066ff',
          textTransform: 'uppercase',
          letterSpacing: '0.5px',
        }}>
          {project.category.replace('-', ' ')}
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontSize: '18px',
        fontWeight: 'bold',
        marginBottom: '10px',
        color: '#0f0f0f',
      }}>
        {project.title}
      </h3>

      {/* Description */}
      <p style={{
        color: '#666',
        fontSize: '14px',
        marginBottom: '16px',
        lineHeight: '1.5',
        minHeight: '40px',
      }}>
        {project.description}
      </p>

      {/* Highlights */}
      <p style={{
        marginBottom: '16px',
        color: '#555',
        fontSize: '13px',
        lineHeight: '1.6',
        minHeight: '42px',
      }}>
        {highlightsSummary}
      </p>

      {/* Tech Stack */}
      <div style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        marginBottom: '16px',
        paddingBottom: '16px',
        borderBottom: '1px solid #e5e7eb',
      }}>
        {project.techStack.map((tech) => (
          <span key={tech} style={{
            padding: '4px 10px',
            fontSize: '12px',
            fontWeight: '500',
            backgroundColor: '#f0f4ff',
            color: '#0066ff',
            borderRadius: '6px',
            border: '1px solid #dbeafe',
          }}>
            {tech}
          </span>
        ))}
      </div>

      {/* Links */}
      <div style={{ display: 'flex', gap: '20px', marginTop: 'auto' }}>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '13px',
            fontWeight: '600',
            color: '#0066ff',
            textDecoration: 'none',
            transition: 'color 0.2s ease',
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = '#3399ff'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#0066ff'}
        >
          <Code size={15} />
          Code
        </a>
        {index === 0 && project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '13px',
              fontWeight: '600',
              color: '#7c3aed',
              textDecoration: 'none',
              transition: 'color 0.2s ease',
            }}
            onMouseEnter={(e) => e.currentTarget.style.color = '#a78bfa'}
            onMouseLeave={(e) => e.currentTarget.style.color = '#7c3aed'}
          >
            <ExternalLink size={15} />
            Demo
          </a>
        )}
      </div>
    </motion.div>
  )
}
