import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './style.css'
import {useSnackbar} from 'notistack'

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const{enqueueSnackbar}= useSnackbar();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(name=="" || email=="" || message==""){
      enqueueSnackbar('fill the Empty Fields',{variant:"warning"})
    }else{
      
    // Send email using EmailJS
    emailjs.sendForm('service_06f70xu', 'template_s9mr11b', 'form', 'wfoC0u3T3iXT5Kyuk')
    .then((result) => {
      enqueueSnackbar('Email sent SuccessFully' ,{variant:"success"})
      console.log('Email successfully sent:', result.text,e.target);
      // Reset form fields after successful submission
      setName('');
      setEmail('');
      setMessage('');
    }, (error) => {
      enqueueSnackbar('Email not Send ',{variant:"error"})
      console.error('Email sending failed:', error.text);
    });
    }
  };

  return (
    <div className='contact' id='contact'>
      <h2>Contact Us</h2>
    <div className="contact-container">
    <div className="img">
        <img src="https://t3.ftcdn.net/jpg/06/01/17/18/360_F_601171862_l7yZ0wujj8o2SowiKTUsfLEEx8KunYNd.jpg" alt="" />
      </div>
      <form onSubmit={handleSubmit} id='form'>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="to_name"
            placeholder='your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
           
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="reply_to"
            placeholder='your email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div>
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            placeholder='write something'
            value={message}
            onChange={(e) => setMessage(e.target.value)}
         
          ></textarea>
        </div>
        <button type="submit">Send</button>
      </form>

    </div>
   </div>
  );
};

export default ContactUs;
