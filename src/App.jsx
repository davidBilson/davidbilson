import React from 'react'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Home from './Pages/Home'
import NavBar from './layout/NavBar/NavBar'
import Projects from './Components/Projects/Projects'
import { ToastContainer} from 'react-toastify';
// Libraries

const App = () => {

  return (
    <>
      <ToastContainer />
      <NavBar />
      <Home />
      <Projects />
      <Contact />
      <Footer />
    </>
  )
}

export default App