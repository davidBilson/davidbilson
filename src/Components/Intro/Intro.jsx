import React from 'react'
import './Intro.css'
import {FiLinkedin, FiTwitter, FiGithub} from 'react-icons/fi'

const Intro = () => {
  return (
    <section className='intro'>
      <div className="intro-container">
        <h1 className='intro-text'>Senior<span className="red">   Web   Developer</span></h1>
        <p className='intro-preface'>Hi, I'm David Bilson. I am a web developer, my specialization revolves around developing intuitive and user-friendly websites that enable businesses and individuals to effectively accomplish their objectives.</p>
        <span className='icon-container'>
        <a href="https://twitter.com/David_Bilsonn" target="_blank" className='icons'>
        <FiTwitter/>
        </a>
        <a href="https://github.com/davidBilson" target="_blank" className='icons'>
        <FiGithub />
        </a>
        <a href="https://www.linkedin.com/in/david-bilson-2401981a5/" target="_blank" className='icons'>
        <FiLinkedin />
        </a>
        </span>
      </div>
    </section>
  )
}
export default Intro