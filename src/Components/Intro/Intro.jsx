import React from 'react'
import './Intro.css'
import {FiLinkedin, FiTwitter, FiGithub} from 'react-icons/fi'

const Intro = () => {
  return (
    <section className='intro'>
      <div className="intro-container">
        <h1 className='intro-text'>Hi, I am <span className="red">David Bilson</span></h1>
        <p className='intro-preface'>I'm a software engineer, I specialize in creating intuitive and user-friendly websites that help businesses and individuals achieve their goals online. </p>
        <span className='icon-container'>
        <a href="" className='icons'>
        <FiTwitter/>
        </a>
        <a href="https://github.com/davidBilson" className='icons'>
        <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/david-bilson-2401981a5/" className='icons'>
        <FiLinkedin />
        </a>
        </span>
      </div>
    </section>
  )
}
export default Intro