import React from 'react';

const contactDetails = {
  email: 'jobsforarunchakrala2@gmail.com',
  phone: '+91-9063844526',
  linkedin: 'https://www.linkedin.com/in/arunchakrala',
  github: 'https://github.com/yourgithubusername' // Update to your username
};

const Contact: React.FC = () => (
  <section
    id="contact"
    style={{
      minHeight: '100vh',
      minWidth: '100vw',
      background: '#16202a',
      color: '#fff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '100px 16px 32px 16px',
      boxSizing: 'border-box',
    }}
  >
    <h2 style={{ fontSize: '2.5rem', marginBottom: 32, color: '#64ffda' }}>Contact</h2>
    <div style={{ background: 'rgba(34,47,62,0.95)', borderRadius: 16, padding: 36, width: '100%', maxWidth: 450, boxShadow: '0 8px 24px rgba(2,12,27,0.7)', textAlign: 'center' }}>
      <div style={{ fontSize: '1.15rem', marginBottom: 16 }}>
        <span style={{ color: '#a8b2d1' }}>Email:</span> <a href={`mailto:${contactDetails.email}`} style={{ color: '#64ffda', textDecoration: 'underline' }}>{contactDetails.email}</a>
      </div>
      <div style={{ fontSize: '1.15rem', marginBottom: 16 }}>
        <span style={{ color: '#a8b2d1' }}>Phone:</span> <a href={`tel:${contactDetails.phone}`} style={{ color: '#64ffda', textDecoration: 'underline' }}>{contactDetails.phone}</a>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '36px', marginTop: 28 }}>
        <a href={contactDetails.linkedin} target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda', fontSize: '1.8rem' }}>
          LinkedIn
        </a>
        <a href={contactDetails.github} target="_blank" rel="noopener noreferrer" style={{ color: '#64ffda', fontSize: '1.8rem' }}>
          GitHub
        </a>
      </div>
    </div>
  </section>
);

export default Contact;
