import React from 'react';
import './contact.css'
import instagram from './icons/instagram.png'
import linkedin from './icons/linkedin.png'
import twitter from './icons/twitter.png'
import github from './icons/github.png'
import gmail from './icons/gmail.png'
import Line from '../line';

function Contact() {
  return (
    <div className='contact'>
      <Line/>
      <label className='section-title'>Contact</label>
      <div className='contact-info'>
        <p>Want to get in touch? Leave a mail</p>
          <a href="mailto:josephkevin04@gmail.com">
              <img src={gmail} className='social-gmail' alt='Gmail Icon' />
          </a>
      </div>
    <div className='social-content' >
          <a href="https://github.com/kevinjosephh">
            <div className='social-div'>
              <img src={github} className='social-icon' alt='Github Icon' />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/kevin-joseph-a75489214/">
            <div className='social-div'>
              <img src={linkedin} className='social-icon' alt='Linkedin Icon' />
            </div>
          </a>
          <a href="https://twitter.com/josephhkevin">
            <div className='social-div'>
              <img src={twitter} className='social-icon' alt='Twitter Icon' />
            </div>
          </a>
          <a href="https://www.instagram.com/kevinjosephh/">
            <div className='social-div'>
              <img src={instagram} className='social-icon' alt='Instagram Icon' />
            </div>
          </a>
    </div>
    </div>
  );
}

export default Contact;
