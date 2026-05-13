export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  highlights: string[];
  category: 'data-science' | 'analytics' | 'ai & ml';
}

export const projects: Project[] = [
  {
    id: 'rag-project', 
    title: 'Vibes Recipe - AI Recipe Recommendation App',
    description: 'Built an AI-powered recipe recommendation app that understands what you\'re in the mood for — not just what ingredients you have. Combines semantic search with LLM generation to surface recipes that actually match the vibe you\'re going for.',
    techStack: ['Python', 'Sentence-Transformer', 'pgvector', 'FastAPI', 'Groq', 'Cerebras', 'RAG', 'PostgreSQL'],
    githubUrl: 'https://github.com/kanish26/Recipe-app',
    liveUrl: 'https://ai-recipe-vibes-app.vercel.app/',
    imageUrl: '/images/projects/retail-demand.png',
    highlights: [
      'Result: Improved recommendation relevance by 75% while keeping query response under 3 seconds.'
    ],
    category: 'ai & ml'
  },
  {
    id: 'electricity-forecasting',
    title: 'U.S. Electricity Generation Efficiency Forecasting',
    description: 'Built a machine learning pipeline to forecast electricity generation efficiency across U.S. states, pulling in millions of time-series records from a government energy API. Trained and deployed forecasting models on AWS to predict state-level efficiency trends with high accuracy.',
    techStack: ['Python', 'EIA API', 'AWS S3', 'AWS SageMaker', 'TimeGPT', 'Prophet'],
    githubUrl: 'https://github.com/kanishgodani/electricity-forecasting',
    imageUrl: '/images/projects/electricity.png',
    highlights: [
      'Result: Achieved a forecast RMSE of 1.96 across state-level efficiency predictions.'
    ],
    category: 'data-science'
  },
  {
    id: 'music-mental-health',
    title: 'Music\'s Impact on Mental Health Analysis',
    description: 'Explored the relationship between music listening habits and mental health outcomes using MxMH survey data, analyzing how different genres correlate with varying mental health indicators. Translated the findings into visual stories in Tableau that surfaced patterns useful for improving music therapy recommendations.',
    techStack: ['Tableau', 'Excel', 'Correlation & Regression Analysis', 'Data Visualization'],
    githubUrl: 'https://github.com/kanishgodani/music-mental-health',
    liveUrl: 'https://public.tableau.com/app/profile/kanish.godani',
    imageUrl: '/images/projects/music-health.png',
    highlights: [
      'Result: Surfaced genre-specific patterns that improved music therapy accuracy by 30%.'
    ],
    category: 'analytics'
  },
  {
    id: 'facility-optimization',
    title: 'Multi-Facility Operations Optimization',
    description: 'Analyzed operational data across multiple facilities to uncover cost inefficiencies and production bottlenecks hiding in the numbers. Built KPI dashboards and trend analysis reports that gave decision-makers a clear picture of where performance was lagging and what to act on.',
    techStack: ['Power BI', 'Power Query', 'Time-Series Analysis', 'DAX', 'Excel', 'KPI Dashboarding'],
    githubUrl: 'https://github.com/kanishgodani/facility-optimization',
    imageUrl: '/images/projects/facility.png',
    highlights: [
      'Result: Identified cost inefficiencies that drove a 10% improvement in production efficiency across 20 facilities.'
    ],
    category: 'analytics'
  }
];

export const skills = {
  languages: ['Python', 'SQL', 'R', 'Java', 'C++'],
  libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PySpark', 'Matplotlib', 'Seaborn', 'PyTorch'],
  tools: ['Power BI', 'Tableau', 'Excel (VBA)', 'Looker Studio', 'Power Query','Jupyter', 'Git'],
  cloud: ['AWS (S3, Lambda, Redshift, SageMaker)', 'GCP BigQuery', 'Snowflake'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB']
};

export const experience = [
  {
    title: 'Data Science Intern',
    company: 'Second Wind Pro',
    location: 'New York, NY',
    period: 'Jan 2026 - May 2026 | Jun 2025 - Aug 2025',
    summary:
      'Worked on building a data pipeline to clean and validate thousands of NFL and college player records, ensuring the data was reliable enough to build on. Used that foundation to engineer meaningful features that bridge college performance to NFL potential, helping the model understand what actually translates across levels. Built and validated a regression model to predict player contract values, with interpretability layers added so stakeholders could understand not just the predictions, but the reasoning behind them.',
    techStack: ['Python', 'XGBoost Regressor', 'Pandas', 'NumPy', 'Scikit-learn', 'SHAP'],
    technicalSkills: ['Data Validation', 'Machine Learning', 'Feature Engineering', 'Predictive Modeling', 'Model Explainability', 'Time-Series Validation', 'Backtesting'],
    softSkills: ['Critical Reasoning', 'Problem Solving', 'Time Management', 'Algorithmic Thinking']
  },
  {
    title: 'Technical Consultant',
    company: 'Business Intelligence Group, UIUC',
    location: 'Champaign, IL',
    period: 'Aug 2025 - Dec 2025',
    summary:
      'Designed an AI-powered in-flight medical triage system that helps cabin crew manage health events autonomously, reducing dependence on ground physicians for low-risk cases. Architected an edge-based solution that classifies patient vitals in real time, with explainability built in so crew can understand and trust the recommendations being made. Balanced technical depth with practical constraints — privacy compliance, connectivity limitations, and crew usability — to deliver a system designed for real-world aviation environments.',
    techStack: ['CNN', 'Gradient Boosting', 'TensorRT', 'AES-256', 'REST APIs'],
    technicalSkills: ['AI System Design', 'Explainable AI', 'Data Privacy', 'Risk Assessment'],
    softSkills: ['Technical Documentation', 'Descision Making', 'Attention to Detail', 'Cross-domain Thinking']
  },
  {
    title: 'Consultant',
    company: 'Illinois Business Consulting, UIUC',
    location: 'Champaign, IL',
    period: 'Jan 2025 - May 2025',
    summary:
      'Worked closely with cross-functional teams to analyze recruitment data for a financial services client, identifying where outreach was falling short and what could be done differently. Translated those findings into a data-driven marketing strategy that meaningfully improved how the client reached potential candidates. Led stakeholder interviews and synthesized survey responses into structured reports and content recommendations that directly shaped the clients talent acquisition approach.',
    techStack: ['Excel', 'Google Forms'],
    technicalSkills: ['Survey Analysis', 'Market Research', 'Data Interpretation', 'Strategy Reporting'],
    softSkills: ['Stakeholder Management', 'Strategic Thinking', 'Research', 'Communication']
  },
  {
    title: 'Data Analyst Intern',
    company: 'Symbo SouthAsia Enterprises',
    location: 'Mumbai, MH',
    period: 'Jan 2024 - Jun 2024',
    summary:
      'Worked with large volumes of raw customer and policy data, cleaning and standardizing it from the ground up to make it reliable for analysis. Dug into the data to uncover behavioral patterns through clustering, turning those segments into actionable product recommendations for the business. Built dashboards and automated reporting workflows that replaced manual processes, giving product and marketing teams a clearer, real-time view of performance.',
    techStack: ['SQL', 'Power BI', 'Python', 'Excel', 'Snowflake', 'Pandas', 'NumPy', 'Matplotlib', 'Scikit-learn'],
    technicalSkills: ['Customer Segmentation', 'Dashboard Automation', 'Data Cleaning', 'Clustering'],
    softSkills: ['Data Storytelling', 'Business Acumen', 'Cross-functional Communication', 'Analytical Thinking']
  }
];
