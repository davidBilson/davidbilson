import React from 'react';
import Header from '../../Assets/header.webp';
import './About.css';
import {AiOutlineDownload} from 'react-icons/ai';
import Resume from './DavidBIlsonWebDeveloperResume().pdf'

const About = () => {
  const underlineLink = {
    textDecoration: "underline"
  }
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

            <p>I am a professional web developer and technical writer. I have a strong background in engineering on the frontend, creating functional and responsive websites. I write articles on high profile platforms like <a href="https://dev.to/david_bilsonn" style={underlineLink}>DevTo</a> and <a href="https://hashnode.com/@agileDevv" style={underlineLink}>HashNode</a>.
            <br /> I coach and mentor devs that are just starting out in tech, helping them navigate their career path and the learning process through pair programming.            
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
