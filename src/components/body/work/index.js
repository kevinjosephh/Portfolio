import React from 'react';
import Line from '../line';
import Card from './card';
import './work.css'

function Work() {
  return (
    <div className='work'>
      <Line/>
      <label className='section-title'>Work Experience</label>
      <div className='work-div'>
      <Card />
      </div>
    </div>
  );
}

export default Work;
