import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome.jsx'
import Contact from './pages/Contact.jsx'
import Planes from './pages/Planes.jsx'
import Portfolio from './pages/Portfolio.jsx'
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Welcome/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/planes' element={<Planes/>}/>
        <Route path='/portfolio' element={<Portfolio/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
