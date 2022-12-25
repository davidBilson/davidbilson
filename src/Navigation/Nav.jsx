import React from 'react'
import {MdVerified} from 'react-icons/md'
import {BsFillMenuButtonWideFill} from 'react-icons/bs'
import './Nav.css'
import { useState } from 'react'

const Nav = () => {

    const [isNavExpanded, setIsNavExpanded] = useState(false)
  return (
    // <nav className='navigation'>
    //     <div className='nav-logo'>
    //         <a href="#">davidBilson <MdVerified className='gold' /></a>
    //     </div>
    //     <div className={'nav-list'} >
    //         <ul>
    //             <li>About</li>
    //             <li>Experience</li>
    //             <li>Portfolio</li>
    //             <li>Contact</li>
    //         </ul>
    //     </div>
    //     <div className='nav-menu'>
    //         <BsFillMenuButtonWideFill onClick={toggleMenu} />
    //     </div>
    // </nav>
    <nav className="navigation">
    <a href="#" className="brand-name">
      David Bilson <MdVerified className='gold' />
    </a>
    <button className="hamburger" onClick={() => {
          setIsNavExpanded(!isNavExpanded)
        }}>
      <BsFillMenuButtonWideFill />
    </button>
    <div
      className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"}>
      <ul>
        <li>
          <a href="#about">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
  )
}

export default Nav