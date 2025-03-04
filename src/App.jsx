import Contact from '../content/contact';
import AboutMe from '../content/about_me';
import Skills from '../content/skills';
import Projects from '../content/projects';
import Education from '../content/education';
import { useState } from 'react';

function App() {
  const [page, setPage] = useState([]);

  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', marginBottom: '100px' }}>
        <h1>Bonef Teofil</h1>
        <Contact />
        <AboutMe />
        <Skills />
        <Projects />
        <Education />
      </div >
    </>
  )
}

export default App
