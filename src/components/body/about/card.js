import React from 'react';
import rdnational from './icons/rdnational.jpeg'
import './card.css'

function Card() {
  return (
    <div className='about-main'>
    <div className='about-card info'>
         <p>Passionate to write code and explore different aspects of programming, and creating web apps using Django and React</p>
      <div className='btn-intro'>
        <a className='btn' href='#contact'>
          <div className='btn-text'><i class="fi fi-rr-dollar"></i>Hire Me</div>
        </a>

        <a className='btn' download href='https://github.com/kevinjosephh/kevinjosephh/files/7995167/Resume.pdf'>
          <i class="fi fi-rr-download"></i>Resume
        </a>
      </div>
    </div>
    <div className='about-card'>
        <img alt='RD National College Logo' className='work-img' src={rdnational} />
        <div className='college-info'>
          <label className='college'>RD National College</label>
          <label className='college'>BSc Computer Science (9.43/10.00)</label>
          <div className='date'>
              <label>2020 </label>-<label> Present</label>
          </div>
          <div className='desc'>
              <p>Secound year student, currently in my 4th semester </p>
          </div>
        </div>
    </div>
    </div>
  );
}

export default Card;
