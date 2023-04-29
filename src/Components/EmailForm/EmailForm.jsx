import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';
import { MdOutlineSend } from 'react-icons/md';
const EmailForm = () => {
  const errorMessageStyle = {
    color: "yellow",
    fontSize: "12px",
    fontWeight: "bold",
    marginTop: "-12px",
  }
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    setErrorMessage('');
    emailjs.sendForm('service_g3ea0qx', 'template_qfzfdfp', form.current, '0p5ukCIa4FZJtmdSE')
      .then((result) => {
          console.log(result.text);
          console.log("message sent!")
      }, (error) => {
          console.log(error.text);
          console.log("error sending message, try again!")
      });
  };
  return (
    <section id='emailForm'>
      <form ref={form} onSubmit={sendEmail} >
        <input name='user_email' type="email" id="email" placeholder='Email' required />
        <br />
        <textarea name='user_message' id="message" placeholder='Write message...' required >
        </textarea>
        <br />
        <button type="submit" id='submitBtn'>Shoot <MdOutlineSend /></button>
      </form>
    </section>
  );
};
export default EmailForm;