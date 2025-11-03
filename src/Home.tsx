import React from 'react';

const Home: React.FC = () => {
  return (
    <div
      style={{
        background: '#C3EFB6',
        minHeight: '100vh',
        minWidth: '100vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1 style={{ margin: 0 }}>ARUN CHAKRALA</h1>
      <h2 style={{ marginTop: 12, marginBottom: 12, fontWeight: 'normal' }}>Software Developer</h2>
      <p style={{ maxWidth: 450, textAlign: 'center' }}>
        Building modern web applications with React and TypeScript. Passionate about UI/UX and performance.
      </p>
    </div>
  );
};

export default Home;
