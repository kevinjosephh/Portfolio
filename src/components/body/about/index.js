import React from 'react';
import Line from '../line';
import Card from '../about/card';

function About() {
  return (
    <div className='about'>
      <Line/>
      <label className='section-title'>About Me</label>
      <div className='about-div'>
      <Card />
      </div>

    </div>
  );
}

export default About;
