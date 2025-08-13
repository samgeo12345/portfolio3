import React,{ useState } from 'react'
import { Routes,Route } from 'react-router-dom'
import Home from './Home.jsx' 
import Navbar from './Navbar.jsx'

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
    </Routes>
    </div>
    </div>
    </>
  )
}

export default App
