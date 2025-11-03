import React, { useState } from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div>
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === 'about' && <About />}
      {activeTab === 'projects' && <Projects />}
      {activeTab === 'experience' && <Experience />}
      {activeTab === 'skills' && <Skills/>}
      {activeTab === 'education' && <Education/>}
      {activeTab === 'contact' && <Contact/>}
      {/* <Footer/> */}
      {/* Other components will be rendered below based on activeTab */}
      {/* We'll add content components one by one as you confirm */}
    </div>
  );
}

export default App;
