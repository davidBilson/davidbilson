import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './EmailForm.css';
import { MdOutlineSend } from 'react-icons/md';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const EmailForm = () => {
  const form = useRef();
  const sendEmail = (e) => {

    e.preventDefault();

    emailjs.sendForm('service_g3ea0qx', 'template_qfzfdfp', form.current, '0p5ukCIa4FZJtmdSE')
      .then((result) => {
          console.log(result.text);
          console.log("message sent!");
          toast.success('Message sent!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
            
          // Reset the form
          form.current.reset();  

      }, (error) => {
          console.log(error.text);
          console.log("error sending message, try again!")
          toast.error('Error sending message, try again! You can also contact me via Twiter or LinkedIn!', {
            position: "bottom-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
      }
      
      );
      form.current.reset()

  };

  return (
    <section id='emailForm'>
    <ToastContainer />
    <form ref={form} onSubmit={sendEmail} >
      <input 
      name='user_name' type="text" id="email" placeholder='Name' required />
      <input 
      name='user_email' type="email" id="email" placeholder='Email' required />
      <br />
      <textarea 
      name='user_message' id="message" placeholder='Write message...' required ></textarea>
      <br />
      <button type="submit" id='submitBtn'>Shoot <MdOutlineSend /></button>
    </form>
    </section>
  );
};
export default EmailForm;