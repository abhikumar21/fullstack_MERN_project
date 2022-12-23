import React from 'react' //rafce
import Navbar from './components/Navbar'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Signup from './components/Signup'
import Login from './components/Login'
import About from './components/About'
import Contact from './components/Contact'
import './App.css'




const App = () => {
  return (
    <div>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/login" element={<Login/>} />
        
      </Routes>
      
    
    </div>
  )
}

export default App

