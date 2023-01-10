import React from 'react';
import Header from '../../Assets/header.jpg';
import './About.css';
import {AiFillHtml5} from 'react-icons/ai';
import {DiJavascript1, DiCss3Full, DiSass} from 'react-icons/di';
import {FaReact} from 'react-icons/fa';
import {SiTailwindcss, SiCanva} from 'react-icons/si';
import {TfiWrite} from 'react-icons/tfi';

const About = () => {
  return (
    <section className='about-container' id='about'>
        <div className='about-f-container'>
            <div className='about-heading'>
                <h2 data-aos="fade-in">About <span className="red">Me</span></h2>
                <span className='line'></span>
            </div>
            <p>Hello, my name is David and I am a professional web developer and technical writer. I have a strong background in web development, with a focus on creating user-friendly and engaging websites. I also have experience writing technical documents and articles, making complex topics easy to understand. With my skills and experience, I am well-equipped to help businesses and individuals achieve their goals online. I am passionate about using my skills and expertise to help others succeed.</p>
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