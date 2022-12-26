import React from 'react'
import PortBoxes from './PortBoxes'
import './WebPortf.css'



const WebPortf = () => {
  return (
    <section className='portfolio-section' id='portfolio'>
        <div className='about-heading'>
                <h2 data-aos="fade-in" className='gradient-two'>My latest work</h2>
                <span className='line'></span>
        </div>

        <section className='port-container'>
            <PortBoxes />
        </section>
    </section>
  )
}

export default WebPortf