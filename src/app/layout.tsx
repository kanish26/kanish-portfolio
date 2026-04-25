import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Kanish Godani | Data Scientist & Analyst',
  description: 'MS in Information Management at UIUC. Specializing in data science, machine learning, and analytics.',
  keywords: ['Data Science', 'Machine Learning', 'Analytics', 'Python', 'AWS', 'UIUC'],
  authors: [{ name: 'Kanish Godani' }],
  openGraph: {
    title: 'Kanish Godani | Data Scientist & Analyst',
    description: 'MS in Information Management at UIUC. Specializing in data science, machine learning, and analytics.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>
        {children}
      </body>
    </html>
  )
}
