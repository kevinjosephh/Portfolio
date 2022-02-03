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
              <img src={gmail} className='social-gmail' alt='' />
          </a>
      </div>
    <div className='social-content' >
          <a href="www.github.com/kevinjosephh">
            <div className='social-div'>
              <img src={github} className='social-icon' alt='' />
            </div>
          </a>
          <a href="www.github.com/kevinjosephh">
            <div className='social-div'>
              <img src={linkedin} className='social-icon' alt='' />
            </div>
          </a>
          <a href="www.github.com/kevinjosephh">
            <div className='social-div'>
              <img src={twitter} className='social-icon' alt='' />
            </div>
          </a>
          <a href="www.github.com/kevinjosephh">
            <div className='social-div'>
              <img src={instagram} className='social-icon' alt='' />
            </div>
          </a>
    </div>
    </div>
  );
}

export default Contact;
