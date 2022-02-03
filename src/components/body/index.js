import React from 'react';
import About from './about/index';
import Contact from './contact/index';
import Projects from './projects/index';
import Work from './work/index';
import Main from './main';
import './body.css'

function Body() {
  return (
  
  <div className='body'>
    <section id='main'>
      <Main />
    </section>
    <section id='about'>
      <About/>
    </section>
    <section id='work'>
      <Work/>
    </section>
    <section id='projects'>
      <Projects/>
    </section>
    <section id='contact'>
      <Contact/>
    </section>
  </div>
  );
}

export default Body;
