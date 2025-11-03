import React from 'react';

const education = [
  {
    degree: 'Post Graduate Diploma in Data Science',
    institution: 'IIIT-Bangalore',
    year: '', // You can add the year if you want
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Chaitanya Degree College, Hanamkonda',
    year: '', // You can add the year if you want
  }
];

const Education: React.FC = () => (
  <section
    id="education"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#18222e',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '100px 16px 32px 16px',
      boxSizing: 'border-box',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Education</h2>
    <div style={{ maxWidth: 700, width: '100%' }}>
      {education.map((ed, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(34,47,62,0.95)',
            borderRadius: 16,
            padding: 24,
            marginBottom: 24,
            boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
          }}
        >
          <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: 10 }}>{ed.degree}</h3>
          <div style={{ fontSize: '1.1rem', color: '#64ffda', marginBottom: 8 }}>{ed.institution}</div>
          {ed.year && <div style={{ fontSize: '1rem', color: '#a8b2d1' }}>{ed.year}</div>}
        </div>
      ))}
    </div>
  </section>
);

export default Education;
