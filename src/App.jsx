import React from 'react'
import About from './About/About'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
import Intro from './Intro/Intro'
import Nav from './Navigation/Nav'
import WebPortf from './WebPortfolio/WebPortf'

const App = () => {
  return (
    <>
      <Nav />
      <Intro />
      <About />
      <WebPortf />
      <Contact />
      <Footer />
    </>
  )
}

export default App