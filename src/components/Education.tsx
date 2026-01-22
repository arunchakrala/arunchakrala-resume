// import React from 'react';

// const education = [
//   {
//     degree: 'Post Graduate Diploma in Data Science',
//     institution: 'IIIT-Bangalore',
//     year: '', // You can add the year if you want
//   },
//   {
//     degree: 'Bachelor of Science in Computer Science',
//     institution: 'Chaitanya Degree College, Hanamkonda',
//     year: '', // You can add the year if you want
//   }
// ];

// const Education: React.FC = () => (
//   <section
//     id="education"
//     style={{
//       minHeight: '100vh',
//       minWidth: '100vw',
//       background: '#18222e',
//       color: '#fff',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//       padding: '100px 16px 32px 16px',
//       boxSizing: 'border-box',
//     }}
//   >
//     <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Education</h2>
//     <div style={{ maxWidth: 700, width: '100%' }}>
//       {education.map((ed, idx) => (
//         <div
//           key={idx}
//           style={{
//             background: 'rgba(34,47,62,0.95)',
//             borderRadius: 16,
//             padding: 24,
//             marginBottom: 24,
//             boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
//           }}
//         >
//           <h3 style={{ color: '#fff', fontSize: '1.4rem', marginBottom: 10 }}>{ed.degree}</h3>
//           <div style={{ fontSize: '1.1rem', color: '#64ffda', marginBottom: 8 }}>{ed.institution}</div>
//           {ed.year && <div style={{ fontSize: '1rem', color: '#a8b2d1' }}>{ed.year}</div>}
//         </div>
//       ))}
//     </div>
//   </section>
// );

// export default Education;


// Education.tsx
import React from 'react';

const education = [
  {
    degree: 'Post Graduate Diploma in Data Science',
    institution: 'IIIT-Bangalore',
    year: '',
  },
  {
    degree: 'Bachelor of Science in Computer Science',
    institution: 'Chaitanya Degree College, Hanamkonda',
    year: '',
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
    <h2 style={{ 
      fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', 
      marginBottom: 32, 
      color: '#64ffda',
      textAlign: 'center'
    }}>
      Education
    </h2>
    <div style={{ maxWidth: 700, width: '100%' }}>
      {education.map((ed, idx) => (
        <div
          key={idx}
          style={{
            background: 'rgba(34,47,62,0.95)',
            borderRadius: 16,
            padding: 'clamp(20px, 3vw, 24px)',
            marginBottom: 24,
            boxShadow: '0 8px 24px rgba(2,12,27,0.7)',
          }}
        >
          <h3 style={{ 
            color: '#fff', 
            fontSize: 'clamp(1.1rem, 2.5vw, 1.4rem)', 
            marginBottom: 10,
            lineHeight: '1.3'
          }}>
            {ed.degree}
          </h3>
          <div style={{ 
            fontSize: 'clamp(0.95rem, 2vw, 1.1rem)', 
            color: '#64ffda', 
            marginBottom: 8,
            lineHeight: '1.4'
          }}>
            {ed.institution}
          </div>
          {ed.year && (
            <div style={{ 
              fontSize: 'clamp(0.9rem, 1.8vw, 1rem)', 
              color: '#a8b2d1' 
            }}>
              {ed.year}
            </div>
          )}
        </div>
      ))}
    </div>
  </section>
);

export default Education;