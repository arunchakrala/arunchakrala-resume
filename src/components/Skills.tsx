import React from 'react';

const skills = {
  'Front-End': [
    'React JS', 'HTML', 'CSS', 'JavaScript', 'TypeScript'
  ],
  'Back-End': [
    'Django', 'Python', 'FastAPI', 'Celery', 'Go'
  ],
  'Containerization & Orchestration': [
    'Docker'
  ],
  'Caching & Messaging': [
    'Redis', 'RabbitMQ'
  ],
  'Web Server & Deployment': [
    'Nginx', 'HTTPS configuration'
  ],
  'Databases': [
     'PostgreSQL', 'SQL', 'MySQL'
  ],
  'Identity Management': [
    'Keycloak'
  ],
  'Virtualization': [
    'VMware', 'vSphere'
  ],
  'SharePoint & Cloud': [
    'SharePoint Online', 'SharePoint 2013', 'Teams', 'Power Apps', 'OneDrive', 'Azure Active Directory'
  ],
  'Scripting & Tools': [
    'PowerShell', 'PnP PowerShell', 'ShareGate Migration Tool', 'Microsoft Graph API'
  ],
  // 'Languages': [
  //   'Python', 'JavaScript', 'TypeScript', 'C', 'Go', 'JSON', 'XML'
  // ]
};

const Skills: React.FC = () => (
  <section
    id="skills"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#1b2533',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 16px 32px 16px',
      boxSizing: 'border-box',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Skills</h2>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 32, width: '100%', maxWidth: 1100 }}>
      {Object.entries(skills).map(([category, skillList]) => (
        <div key={category} style={{
          background: 'rgba(34,47,62,0.95)',
          borderRadius: 16,
          padding: 24,
          boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
        }}>
          <h3 style={{ color: '#64ffda', fontSize: '1.25rem', marginBottom: 12 }}>{category}</h3>
          <ul style={{ paddingLeft: 18 }}>
            {skillList.map(skill => (
              <li key={skill} style={{ marginBottom: 6 }}>{skill}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </section>
);

export default Skills;
