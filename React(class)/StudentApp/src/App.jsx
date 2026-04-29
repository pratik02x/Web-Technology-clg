import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'

import Student from './Student'
import Counter from './Counter'
import Home from './components/home'
import About from './components/About'
import Contact from './components/Contact'
import {BrowserRouter} from "react-router-dom"
import { Routes,Route } from 'react-router-dom'

function App() {  

  return (
    <>

    <BrowserRouter>
           <Navbar/>

           <Routes>
            <Route path="/home" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
           </Routes>
    
    </BrowserRouter>
      
    </>
  )
}

export default App
