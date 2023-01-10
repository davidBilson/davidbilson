import React from 'react'
import { BsMedium, BsTwitter, BsGithub} from 'react-icons/bs'
import {SiGmail} from 'react-icons/si'
import { FaLinkedinIn } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
    <h2>Follow Me</h2>
        <div>        
        <a href="https://twitter.com/David_Bilsonn" target={'_blank'}><BsTwitter /></a>
        <a href="mailto:davidbilson99@gmail.com"><SiGmail /></a>
        <a href="https://www.linkedin.com/in/david-bilson-2401981a5/"><FaLinkedinIn /></a>
        <a href="https://medium.com/@davidbilson99/"><BsMedium /></a>
        <a href="https://github.com/davidBilson"><BsGithub /></a>
        </div>
    </footer>
  )
}
export default Footer