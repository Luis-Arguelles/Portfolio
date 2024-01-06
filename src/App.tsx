import { Routes, Route } from 'react-router-dom'
import './App.css'
import NavBar from './components/navBar'
import Home from './components/home'
import Register from './components/register'
import Profile from './components/profile'

function App() {

  return (
    <>
      <NavBar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </>
  )
}

export default App
