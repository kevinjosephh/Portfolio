import React from 'react';
import Desktop from './desktop';
import './header.css'
import Phone from './phone';

function Header() {
  return (
  <div className='header' >
    <div className='menu'>
      <div className='first-view'>
        <Desktop/>
      </div>
      <div className='secound-view'>
        <Phone/>
      </div>
    </div>
  </div>
  
  );
}

export default Header;
