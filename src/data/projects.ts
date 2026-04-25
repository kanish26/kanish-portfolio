export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  techStack: string[];
  githubUrl: string;
  liveUrl?: string;
  imageUrl: string;
  highlights: string[];
  category: 'data-science' | 'analytics' | 'engineering';
}

export const projects: Project[] = [
  {
    id: 'electricity-forecasting',
    title: 'U.S. Electricity Generation Efficiency Forecasting',
    description: 'AWS ML pipeline processing 4.3M+ time-series records with TimeGPT and Prophet',
    longDescription: 'Built an end-to-end ML pipeline on AWS to forecast state-level electricity efficiency across the United States, achieving 1.96 RMSE.',
    techStack: ['Python', 'AWS S3', 'AWS SageMaker', 'TimeGPT', 'Prophet', 'Pandas'],
    githubUrl: 'https://github.com/kanishgodani/electricity-forecasting',
    imageUrl: '/images/projects/electricity.png',
    highlights: [
      'Processed 4.3M+ time-series records from EIA API',
      'Achieved 1.96 RMSE in forecasting accuracy',
      'Deployed models using AWS SageMaker'
    ],
    category: 'data-science'
  },
  {
    id: 'music-mental-health',
    title: 'Music\'s Impact on Mental Health Analysis',
    description: 'Exploratory analysis of 10,000+ survey responses using Python and Tableau',
    longDescription: 'Analyzed and visualized MxMH survey data to understand correlations between music preferences and mental health outcomes.',
    techStack: ['Python', 'Pandas', 'Tableau', 'Statistical Analysis', 'Data Visualization'],
    githubUrl: 'https://github.com/kanishgodani/music-mental-health',
    liveUrl: 'https://public.tableau.com/app/profile/kanish.godani',
    imageUrl: '/images/projects/music-health.png',
    highlights: [
      'Analyzed 10,000+ survey responses',
      'Reduced data inconsistencies by 40%',
      'Improved recommendation accuracy by 30%'
    ],
    category: 'analytics'
  },
  {
    id: 'facility-optimization',
    title: 'Multi-Facility Operations Optimization',
    description: 'Time-series forecasting and Power BI dashboards for 20 facilities',
    longDescription: 'Streamlined operations across multiple facilities through data preprocessing, forecasting models, and interactive dashboards.',
    techStack: ['Power BI', 'Power Query', 'Time-Series Analysis', 'DAX', 'Python'],
    githubUrl: 'https://github.com/kanishgodani/facility-optimization',
    imageUrl: '/images/projects/facility.png',
    highlights: [
      'Processed 50,000+ operational records',
      'Built interactive KPI dashboards',
      'Boosted production efficiency by 10%'
    ],
    category: 'analytics'
  }
];

export const skills = {
  languages: ['Python', 'SQL', 'R', 'Java', 'C++'],
  libraries: ['Pandas', 'NumPy', 'Scikit-learn', 'TensorFlow', 'PySpark', 'Matplotlib', 'Seaborn'],
  tools: ['Power BI', 'Tableau', 'Excel (VBA)', 'Looker Studio', 'Jupyter', 'Git'],
  cloud: ['AWS (S3, Lambda, Redshift, SageMaker)', 'GCP BigQuery', 'Snowflake'],
  databases: ['MySQL', 'PostgreSQL', 'MongoDB']
};

export const experience = [
  {
    title: 'Data Science Analyst Intern',
    company: 'Second Wind Pro',
    location: 'New York, NY',
    period: 'Jan 2026 - Present | Jun 2025 - Aug 2025',
    summary:
      'Automated NIL data collection workflows for more than 5,000 weekly athlete records, built player valuation models with XGBoost that reached 88% accuracy, and developed an end-to-end AWS pipeline that improved dataset quality by 25% while making downstream analysis faster and more reliable for the team.',
    techStack: ['Python', 'XGBoost', 'AWS', 'Data Pipelines', 'Feature Engineering'],
    softSkills: ['Stakeholder Communication', 'Problem Solving', 'Prioritization']
  },
  {
    title: 'Consultant',
    company: 'Illinois Business Consulting, UIUC',
    location: 'Champaign, IL',
    period: 'Jan 2025 - May 2025',
    summary:
      'Designed a data-driven outreach strategy that increased candidate engagement by 25% and helped improve talent acquisition efficiency by 20%, balancing structured analysis with client-facing recommendations and collaborative execution across the consulting team.',
    techStack: ['Excel', 'Market Research', 'Candidate Analytics', 'Reporting'],
    softSkills: ['Client Communication', 'Teamwork', 'Strategic Thinking']
  },
  {
    title: 'Data Analyst Intern',
    company: 'Symbo SouthAsia Enterprises',
    location: 'Mumbai, MH',
    period: 'Jan 2024 - Jun 2024',
    summary:
      'Processed and cleaned more than 20,000 customer profiles to improve data quality by 40%, built customer segmentation models that achieved a 0.78 silhouette score, and delivered over 10 Power BI dashboards that contributed to a 15% increase in policy adoption.',
    techStack: ['Power BI', 'Python', 'Data Cleaning', 'Segmentation', 'Dashboarding'],
    softSkills: ['Storytelling', 'Analytical Thinking', 'Cross-functional Collaboration']
  }
];
