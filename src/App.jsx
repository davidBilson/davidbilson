import React from 'react'
import Contact from './Components/Contact/Contact'
import Home from './Pages/Home'
import NavBar from './layout/NavBar/NavBar'
import Projects from './Components/Projects/Projects'
import { ToastContainer} from 'react-toastify';
import Skills from './Components/Skills/Skills'
// Libraries
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

AOS.init();

const App = () => {

  return (
    <>
      <ToastContainer style={{color: "red"}} />
      <NavBar />
      <Home />
      <Projects />
      <Skills />
      <Contact />
    </>
  )
}

export default App