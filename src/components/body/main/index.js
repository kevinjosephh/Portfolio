import React, { useEffect, useRef } from 'react';
import './main.css'
import python from './img/python.png'
import go from './img/go.png'
import react from './img/react.png'
import dotnet from './img/dotnet.png'
import { init } from 'ityped'

function Main() {
  const textRef = useRef();
  useEffect(()=>{
    init(textRef.current,{
      showCursor: false,
      strings:["Python Developer","React Developer","Mern Stack Developer"],
    });
  },[]);
  return (
  <div className='main'>
      <div className='intro'>
        Hello, myself <span className='name'>Kevin Joseph</span>
        <br/>
        I am <span ref={textRef} className='typing'></span>
      </div>
      <div className='stack'>
        <img src={python} className='social-icon' alt='' />
        <img src={react} className='social-icon' alt='' />
        <img src={go} className='social-icon' alt='' />
        <img src={dotnet} className='social-icon' alt='' />
      </div>

  </div>
  );
}

export default Main;