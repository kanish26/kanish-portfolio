import Link from 'next/link'
import { ArrowLeft, Bot, Brain, Code2, ExternalLink, Sparkles, Wrench } from 'lucide-react'

const aiProject = {
  title: 'Vibes Recipe - AI Recipe Recommendation App',
  intro: 'A semantic search and LLM-powered recommendation system that finds recipes based on what you are in the mood for, not just what\'s in your pantry.',
  workDone:
    'Built a RAG-based recipe recommendation system that understands natural language queries to surface recipes matching a specific mood or vibe. The flow combines data ingestion, embedding generation, vector similarity search, and LLM-powered response generation to deliver recommendations that feel relevant and fast.',
  result:
    'Improved recommendation relevance by 75% while keeping query latency under 3 seconds, turning an open-ended "what should I cook" question into a focused, personalized answer.',
  techStack: ['Python', 'FastAPI', 'Sentence Transformers', 'pgvector', 'PostgreSQL', 'RAG Pipeline'],
  models: ['Sentence-Transformers (384-dim Embeddings)', 'Groq LLM', 'Cerebras LLM'],
  learned: [
    'How to build embedding pipelines that scale across large, messy real-world datasets.',
    'How post-retrieval filtering meaningfully improves the quality of LLM-generated recommendations.',
    'How choosing the right vector search strategy directly impacts both relevance and response speed.'
  ],
  codeUrl: 'https://github.com/kanish26/Recipe-app',
  demoUrl: 'https://github.com/kanish26'
}

function SectionLabel({
  icon: Icon,
  label,
  color,
}: {
  icon: typeof Brain
  label: string
  color: string
}) {
  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        fontSize: '12px',
        fontWeight: '700',
        textTransform: 'uppercase',
        letterSpacing: '0.9px',
        color,
        marginBottom: '12px',
      }}
    >
      <Icon size={15} />
      {label}
    </div>
  )
}

export default function AIPage() {
  return (
    <main style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f8fbff 0%, #ffffff 42%, #f8fafc 100%)' }}>
      <section style={{ padding: '28px 24px 16px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '12px 18px',
              borderRadius: '999px',
              textDecoration: 'none',
              backgroundColor: '#ffffff',
              border: '1px solid #dbeafe',
              color: '#0066ff',
              fontWeight: '700',
              boxShadow: '0 10px 30px rgba(59, 130, 246, 0.08)',
            }}
          >
            <ArrowLeft size={18} />
            Back to Portfolio
          </Link>
        </div>
      </section>

      <section style={{ padding: '24px 24px 96px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ marginBottom: '48px', width: '100%' }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '10px 14px',
                borderRadius: '999px',
                background: 'linear-gradient(135deg, #e0f2fe, #ede9fe)',
                color: '#0066ff',
                fontSize: '12px',
                fontWeight: '700',
                letterSpacing: '1px',
                textTransform: 'uppercase',
                marginBottom: '18px',
              }}
            >
              <Bot size={15} />
              AI Section
            </div>

            <h1
              style={{
                fontSize: 'clamp(2.8rem, 6vw, 5rem)',
                lineHeight: '1.02',
                letterSpacing: '-1.2px',
                margin: '0 0 18px',
                background: 'linear-gradient(135deg, #0066ff 0%, #7c3aed 60%, #00d9ff 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              AI-Powered Work
            </h1>

            <p
              style={{
                margin: 0,
                fontSize: '18px',
                lineHeight: '1.8',
                color: '#556070',
                width: '100%',
              }}
            >
              This page highlights the AI-focused side of my work: building systems that combine models,
              product thinking, and clean user experiences to make intelligence practical. These are the
              projects where I explore how AI can answer questions, surface insight, and create more
              intuitive interactions.
            </p>
          </div>

          <article
            style={{
              width: '100%',
              borderRadius: '30px',
              overflow: 'hidden',
              background: '#ffffff',
              border: '1px solid #dbeafe',
              boxShadow: '0 28px 80px rgba(15, 23, 42, 0.08)',
              marginBottom: '28px',
            }}
          >
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'minmax(320px, 380px) minmax(0, 1fr)',
              }}
            >
              <div
                style={{
                  padding: '36px 28px',
                  background: 'linear-gradient(180deg, #0f172a 0%, #172554 52%, #312e81 100%)',
                  color: '#ffffff',
                  display: 'grid',
                  alignContent: 'space-between',
                  gap: '32px',
                }}
              >
                <div>
                  <div
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '8px 12px',
                      borderRadius: '999px',
                      backgroundColor: 'rgba(255, 255, 255, 0.1)',
                      fontSize: '12px',
                      fontWeight: '700',
                      letterSpacing: '0.8px',
                      textTransform: 'uppercase',
                      marginBottom: '18px',
                    }}
                  >
                    <Sparkles size={14} />
                    AI Project
                  </div>
                  <h2
                    style={{
                      margin: 0,
                      fontSize: '30px',
                      lineHeight: '1.12',
                      overflowWrap: 'anywhere',
                      wordBreak: 'break-word',
                    }}
                  >
                    {aiProject.title}
                  </h2>
                </div>

                <p
                  style={{
                    margin: 0,
                    color: '#cbd5e1',
                    lineHeight: '1.8',
                    fontSize: '15px',
                    overflowWrap: 'anywhere',
                    wordBreak: 'break-word',
                  }}
                >
                  {aiProject.intro}
                </p>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a
                    href={aiProject.codeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      backgroundColor: '#ffffff',
                      color: '#0f172a',
                      fontWeight: '700',
                    }}
                  >
                    <Code2 size={16} />
                    Code
                  </a>
                  <a
                    href={aiProject.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      padding: '12px 16px',
                      borderRadius: '12px',
                      textDecoration: 'none',
                      backgroundColor: 'rgba(255, 255, 255, 0.12)',
                      color: '#ffffff',
                      border: '1px solid rgba(255, 255, 255, 0.18)',
                      fontWeight: '700',
                    }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </a>
                </div>
              </div>

              <div style={{ padding: '36px' }}>
                <div style={{ display: 'grid', gap: '30px' }}>
                  <div>
                    <SectionLabel icon={Bot} label="What Was Built" color="#0066ff" />
                    <p style={{ margin: 0, color: '#475569', lineHeight: '1.85', fontSize: '16px' }}>
                      {aiProject.workDone}
                    </p>
                  </div>

                  <div>
                    <SectionLabel icon={Sparkles} label="Result" color="#7c3aed" />
                    <p style={{ margin: 0, color: '#475569', lineHeight: '1.85', fontSize: '16px' }}>
                      {aiProject.result}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'grid',
                      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                      gap: '24px',
                    }}
                  >
                    <div>
                      <SectionLabel icon={Wrench} label="Tech Stack" color="#0066ff" />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {aiProject.techStack.map((item) => (
                          <span
                            key={item}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '999px',
                              backgroundColor: '#eff6ff',
                              color: '#0066ff',
                              border: '1px solid #bfdbfe',
                              fontSize: '13px',
                              fontWeight: '600',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div>
                      <SectionLabel icon={Brain} label="AI Models Used" color="#7c3aed" />
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                        {aiProject.models.map((item) => (
                          <span
                            key={item}
                            style={{
                              padding: '8px 12px',
                              borderRadius: '999px',
                              backgroundColor: '#f5f3ff',
                              color: '#7c3aed',
                              border: '1px solid #ddd6fe',
                              fontSize: '13px',
                              fontWeight: '600',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div>
                    <SectionLabel icon={Sparkles} label="Things Learned" color="#0f766e" />
                    <div style={{ display: 'grid', gap: '12px' }}>
                      {aiProject.learned.map((item) => (
                        <div
                          key={item}
                          style={{
                            padding: '16px 18px',
                            borderRadius: '18px',
                            background: 'linear-gradient(135deg, #f8fafc, #ecfeff)',
                            border: '1px solid #dbeafe',
                            color: '#334155',
                            lineHeight: '1.75',
                            fontSize: '15px',
                          }}
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </article>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '14px 18px',
              borderRadius: '999px',
              background: 'linear-gradient(135deg, #fff7ed, #fef3c7)',
              color: '#9a3412',
              fontWeight: '700',
              border: '1px solid #fdba74',
            }}
          >
            🚧 Work in progress...
          </div>
        </div>
      </section>
    </main>
  )
}
