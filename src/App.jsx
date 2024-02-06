import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Intro from './Components/Intro/Intro'
import WebPortfolio from './Components/WebPortfolio/WebPortf'
import Latest from './Components/Latest/Latest'
import Skills from './Components/Skills/Skills'
import Home from './Pages/Home'
import NavBar from './layout/NavBar/NavBar'
// Libraries

const App = () => {

  return (
    <>
      <NavBar />
      <Home />
      <About />
      <Skills />
      <WebPortfolio />
      <Latest />
      <Contact />
      <Footer />
    </>
  )
}

export default App