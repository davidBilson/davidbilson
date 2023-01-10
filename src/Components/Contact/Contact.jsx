import React from 'react'
import EmailForm from '../EmailForm/EmailForm'
import './Contact.css'

const Contact = () => {
  return (
    <section className='contact-container' id='contact'>
        <div>
            <h2>Let's work together on your next <span className="red">project</span></h2>
            <p>Get in touch with me by filling out the contact form. I will get back to you as soon as possible.</p>
        </div>
        <div>
            <EmailForm />
        </div>
    </section>
  )
}

export default Contact