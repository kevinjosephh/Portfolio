import React from 'react';
import Line from '../line';
import Card from './card'
import './projects.css'

function Projects() {
  return (
    <div className='projects' >
      <Line/>
      <label className='section-title'>Personal Projects</label>
      <div className='project-div'>
        <Card/>
      </div>
    </div>
  );
}

export default Projects;
