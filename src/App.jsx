import React from 'react'
import About from './Components/About/About'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Nav from './Components/Navigation/Nav'
import Intro from './Components/Intro/Intro'
import WebPortfolio from './Components/WebPortfolio/WebPortf'
import Latest from './Components/Latest/Latest'
import Skills from './Components/Skills/Skills'


const App = () => {

  return (
    <>
      <Nav />
      <Intro />
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