import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Illustrations from './components/pages/Illustrations';
import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import Mockups from './components/pages/Mockups';
import SideBar from './components/SideBar';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState('About Me');

  // This function can be called from anywhere to change the page
  const handlePageChange = (page: string) => {
    setCurrentPage(page);
  };

  return (
    <main>
      <SideBar currentPage={currentPage} onButtonClick={handlePageChange}/>
      {currentPage === 'About Me' && <AboutMe/>}
      {currentPage === 'Games' && <Games/>}
      {currentPage === 'Illustrations' && <Illustrations/>}
      {currentPage === 'Mockups' && <Mockups/>}
      {currentPage === 'Projects' && <Projects/>}
      {currentPage === 'Skills' && <Skills onRedirectPage={handlePageChange} />}
    </main>
  )
}

export default App
