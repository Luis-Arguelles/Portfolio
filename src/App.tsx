import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import Projects from './components/projects'
import Projects2 from './components/projects2'
import Contact from './components/contact'
import PN from './components/pn'

function App() {

  return (
    <body>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/projects2" element={<Projects2/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pn" element={<PN />} />
        </Routes>
      </div>
    </body>
  )
}

export default App
