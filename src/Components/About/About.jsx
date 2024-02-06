import React from 'react';
import Header from '../../Assets/header.webp';
import './About.css';
import {AiOutlineDownload} from 'react-icons/ai';
import Resume from './David_Bilson_Resume_2_24.pdf'

const About = () => {
  
  const downloadFile = () => {
    const fileUrl = Resume;
    window.open(fileUrl, "_blank")
  }
  return (
    <section className='about-container' id='about'>
        <div className='about-f-container'>
            <div className='about-heading'>
                <h2 data-aos="fade-in">About <span className="red">Me</span></h2>
                <span className='line'></span>
            </div>
            <p>
              I am a full-stack MERN developer, technical writer, and coding educator.
              I bring a comprehensive skillset to the table, which empowers businesses to thrive in the digital age, giving them a noticeable presence on the internet.
              My expertise lies in creating robust and scalable web applications using the MERN stack.
              <br />
              <br />
              My writing skills enables me to transform complex technical concepts into clear and concise documentation, and articles which I publish on platforms like DevTo with a high view rate.
              As a coding tutor, I am dedicated to helping others learn complex concepts in web development through peer programming.
            </p>
            <button onClick={downloadFile} download className="resume-btn"><AiOutlineDownload className='resume-download-icon' />Resume</button>
        </div>
        <div className='about-image-container'>
            <img src={Header} alt="David Bilson" data-aos="fade-in" className='about-image' />
        </div>
    </section>
  )
}

export default About