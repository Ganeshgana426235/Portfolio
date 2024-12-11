import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import About from './Components/About/About'
import Home from './Components/Home/Home'
import Project from './Components/Project/Project'
import Contact from './Components/Contact/Contact'
import BottomNavbar from './Components/Footer/Bottom'
import Footer from './Components/Footer/Footer'

const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Project />
      <Contact />
      <BottomNavbar />
      <Footer/>
    </div>
  )
}

export default App
