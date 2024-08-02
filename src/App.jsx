import React from 'react'
import Navbar from './Components/Navbar'
import Home from './Components/Home'
import About from './Components/About'
import Protfilo from './Components/Protfilo'
import Experience from './Components/Experince'
import Footer from './Components/Footer'
import Contact from './Components/Contact'
import {Toaster} from "react-hot-toast"
const App = () => {
  return (
    <>
      <div>
      <Navbar/>
      <Home/>
      <About/>
      <Protfilo/>
      <Experience/>
      <Contact/>
      <Footer/>
      </div>
      <Toaster/>
    </>
  )
}

export default App