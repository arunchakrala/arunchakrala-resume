import React from 'react';

const experiences = [
  {
    role: 'React Developer',
    company: 'Utthunga Technologies Pvt Ltd, Bangalore',
    period: 'Mar 2023 – Present',
    highlights: [
      'Worked on React, Django, Docker, Redis, RabbitMQ, Python Celery, TimescaleDB, FastAPI, Nginx, GraphQL.',
      'Developed customized APIs using FastAPI based on customer requirements.',
      'Handled development of new features and enhancements in both frontend and backend.',
      'Managed deployments in client environments with HTTPS using Nginx.'
    ]
  },
  {
    role: 'Associate Software Engineer',
    company: 'TechDimension IT Solutions LLP, Hyderabad',
    period: 'Mar 2022 – Feb 2023',
    highlights: [
      'Handled SharePoint migration projects for major clients.',
      'Developed PowerShell automation for OneDrive and Teams migration using ShareGate.',
      'Created custom PowerShell scripts to sync user profiles from SharePoint to Active Directory.',
      'Developed and maintained scripts to import SQL Server data into SharePoint lists.'
    ]
  }
];

const Experience: React.FC = () => (
  <section
    id="experience"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#21283c',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 16px 32px 16px',
      boxSizing: 'border-box',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Experience</h2>
    <div style={{ maxWidth: 900, width: '100%', display: 'flex', flexDirection: 'column', gap: 32 }}>
      {experiences.map((exp, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(34,47,62,0.95)',
            borderRadius: 16,
            padding: 32,
            boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
          }}
        >
          <h3 style={{ margin: '0 0 10px 0', color: '#fff', fontSize: '1.6rem' }}>{exp.role}</h3>
          <div style={{ fontSize: '1.15rem', color: '#a8b2d1', marginBottom: 4 }}>{exp.company}</div>
          <div style={{ fontSize: '1rem', color: '#64ffda', marginBottom: 12 }}>{exp.period}</div>
          <ul style={{ marginLeft: 20 }}>
            {exp.highlights.map((h, i) => (
              <li key={i} style={{ marginBottom: 6, lineHeight: 1.6 }}>{h}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Experience;
