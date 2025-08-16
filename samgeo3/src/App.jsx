import React,{ useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Home from './Home.jsx'
import About from './about.jsx'
import Skill from './skill.jsx'

function App() {
  return (
    <>
    <div className="wholepagediv">
    <div className="navbardiv">
    <Navbar/>
    </div>
    <div className="wholecontentsdiv">
    <Routes>
    <Route path='/' element={
      <Home/>
    }/>
    <Route path='/about' element={
      <About/>
    }/>
    <Route path='/skill' element={
      <Skill/>
    }/>
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
