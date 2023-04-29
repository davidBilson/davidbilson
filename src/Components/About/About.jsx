import React from 'react';
import Header from '../../Assets/header.jpg';
import './About.css';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript1, DiCss3Full, DiSass} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiCanva} from 'react-icons/si';
import {TfiWrite} from 'react-icons/tfi';

const About = () => {
  const underlineLink = {
    textDecoration: "underline"
  }
  return (
    <section className='about-container' id='about'>
        <div className='about-f-container'>
            <div className='about-heading'>
                <h2 data-aos="fade-in">About <span className="red">Me</span></h2>
                <span className='line'></span>
            </div>
            <p>Hi!!! My name is David Bilson. I'm a professional web developer and technical writer. I have a strong background in engineering on the frontend, creating functional and responsive websites. I have written articles on high profile platforms like <a href="https://dev.to/david_bilsonn" style={underlineLink}>DevTo</a> and <a href="https://medium.com/@davidbilson99" style={underlineLink}>Medium</a>. 
            In addition to that, I have also written technical documentations and articles for individuals and companies. <br /> Alongside engineering and writing, I also coach and mentor newbies in frontend development as I'm passionate about using my skills and expertise to help others succeed. <br />
            I am currently open to new employment opportunities and would welcome the chance to work with a team that shares my passion for engineering on the frontend. If you are keen to learn more about what I have to offer, please don't hesitate to reach out. Let's connect and explore how we can work together to make amazing things happen!!!</p>
            <h3 className='stack'>Stacks and <span className="red">Tools</span></h3>
            <div className='skills-button'>

            <span data-aos="fade-in"><AiFillHtml5 className='skill-icon red'/></span>
            <span data-aos="fade-down"><DiJavascript1 className='skill-icon yellow'/></span>
            <span data-aos="fade-up"><FaReact className='skill-icon dodgerblue'/></span>
            <span data-aos="fade-down"><SiTailwindcss className='skill-icon dodgerblue'/></span>
            <span data-aos="fade-in"><DiCss3Full className='skill-icon blue' /></span>
            <span data-aos="fade-in"><DiSass className='skill-icon red' /></span>
            <span data-aos="fade-in"><TfiWrite className='skill-icon '/></span>
            <span data-aos="fade-in"><SiCanva className='skill-icon blue '/></span>
            </div>
        </div>
        <div className='about-image-container'>
            <img src={Header} alt="David Bilson" data-aos="fade-in" className='about-image' />
        </div>
    </section>
  )
}

export default About
