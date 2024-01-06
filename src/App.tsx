import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import Projects from './components/projects'
import Profile from './components/profile'

function App() {

  return (
    <body>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects/>} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </body>
  )
}

export default App
