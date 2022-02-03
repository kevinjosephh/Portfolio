import React from 'react';
import './card.css'

function Card() {
  return (
    <div className='list'>
    <div className='work-card info'>
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
    <div className='work-card'>
        <img className='work-img' src='https://rdnational.ac.in/img/logo.png' />
        <div className='work-info'>
          <label className='company'>RD National College</label>
          <label className='company'>BSc Computer Science (9.43/10.00)</label>
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
