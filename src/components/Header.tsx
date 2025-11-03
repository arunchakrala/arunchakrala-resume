import React from 'react';

type HeaderProps = {
  activeTab: string;
  setActiveTab: (tab: string) => void;
};

const tabs = [
  { label: 'About', id: 'about' },
  { label: 'Projects', id: 'projects' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Education', id: 'education' },
  { label: 'Contact', id: 'contact' },
];

const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  return (
    <nav
      style={{
        width: '100vw',
        background: 'rgba(10, 25, 47, 0.95)',
        padding: '20px 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        position: 'fixed',
        top: 0,
        zIndex: 100,
      }}
    >
      {tabs.map(tab => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.id)}
          style={{
            background: 'none',
            border: 'none',
            color: activeTab === tab.id ? '#64ffda' : '#fff',
            fontWeight: activeTab === tab.id ? 700 : 400,
            fontSize: '18px',
            cursor: 'pointer',
            borderBottom: activeTab === tab.id ? '2px solid #64ffda' : 'none',
            padding: '4px 8px',
            transition: 'color 0.2s, border-bottom 0.2s',
          }}
        >
          {tab.label}
        </button>
      ))}
    </nav>
  );
};

export default Header;
