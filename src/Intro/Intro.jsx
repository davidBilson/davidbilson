import React from 'react'
import './Intro.css'

const Intro = () => {
  return (
    <section className='intro'>
        <p className='pre-phrase'>Hi, my name is</p>
        <h1><span className='name-top gradient'>David Bilson.</span>  <br /> <span data-aos="fade-right"> I transform ideas into <span className='gradient'> digital</span>  reality </span></h1>
        <p className='intro-preface'>I'm a software engineer, I specialize in creating intuitive and user-friendly websites that help businesses and individuals achieve their goals online. </p>
    </section>
  )
}
export default Intro