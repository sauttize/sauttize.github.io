import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutMe from './components/pages/AboutMe';
import Skills from './components/pages/Skills';
import Illustrations from './components/pages/Illustrations';
import Games from './components/pages/Games';
import Projects from './components/pages/Projects';
import Mockups from './components/pages/Mockups';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/illustrations" element={<Illustrations />} />
          <Route path="/games" element={<Games />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/mockups" element={<Mockups />} />
        </Routes>
      </Router>
    </main>
  )
}

export default App
