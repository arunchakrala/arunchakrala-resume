import React from 'react';

const About: React.FC = () => {
  return (
    <section
      id="about"
      style={{
        minHeight: '100vh',
        minWidth:"100vw",
        background: 'linear-gradient(135deg, #243949 0%, #517fa4 100%)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 16px 40px 16px',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          background: 'rgba(10, 25, 47, 0.8)',
          padding: '48px 36px',
          borderRadius: '18px',
          maxWidth: '720px',
          width: '100%',
          boxShadow: '0 10px 32px 0 rgba(2,12,27,0.7)',
          textAlign: 'center',
          color: '#e6f1ff',
        }}
      >
        <h1 style={{ fontSize: '3rem', fontWeight: 700, color: '#fff' }}>
          I'm Arun Chakrala
        </h1>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 400, margin: '16px 0 32px 0', color: '#64ffda' }}>
          Software Engineer | React & Django
        </h2>
        <p style={{ fontSize: '1.1rem', margin: '0 0 24px 0' }}>
          Enthusiastic and adaptable software developer with 3+ years of experience building dynamic UIs and robust backends. Skilled with React, TypeScript, Django, Docker, and more. Passionate about delivering modern, secure, and high-performance web solutions.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '24px', marginTop: 24 }}>
          <a
            href="https://www.linkedin.com/in/arunchakrala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', fontSize: '2rem' }}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin"></i> LinkedIn
          </a>
          <a
            href="https://github.com/arunchakrala"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: '#fff', fontSize: '2rem' }}
            aria-label="GitHub"
          >
            <i className="fab fa-github"></i> GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
