import React from 'react';
import './desktop.css'

function Desktop() {
  return (
      <div className='desktop'>
          <div className='header-nav'>
              <a href='#about'>
              <i class="fi fi-rr-user nav-icon"></i>About
              </a>
          </div>
          <div className='header-nav'>
              <a href='#work'>
              <i class="fi fi-rr-briefcase nav-icon"></i>Work
              </a>
          </div>
          <div className='header-nav'>
              <a href='#projects'>
              <i class="fi fi-rr-browser nav-icon"></i>Projects
              </a>
          </div>
          <div className='header-nav'>
              <a href='#contact'>
              <i class="fi fi-rr-link nav-icon"></i>Contact
              </a>
          </div>
      </div>
  );
}

export default Desktop;
