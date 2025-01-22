import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Docter from './pages/Docter'
import Patient from './pages/Patient'
import Medicine from './pages/Medicine'
import Blog from './pages/Blog'
import Login from './pages/Login'
import Profile from './pages/Profile'


const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/docter' element={<Docter/>} />
        <Route path='/patient' element={<Patient/>} />
        <Route path='/medicine' element={<Medicine/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/profile' element={<Profile/>} />
      </Routes>
    </div>
  )
}

export default App