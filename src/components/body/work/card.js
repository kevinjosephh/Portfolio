import React from 'react';
import './card.css'

function Card() {
  return (
      <div className='list'>
      <div className='work-card'>
          <img alt='Arustu Technology Logo' className='work-img' src='https://media-exp1.licdn.com/dms/image/C560BAQF6seCfOamrtQ/company-logo_200_200/0/1629458488211?e=2159024400&v=beta&t=RMVqprWo42vm9S1rxFziCjSOAVgaP9LfEaQP8rjKWBc' />
          <div className='work-info'>
            <label className='company'>Web Development - Arustu Technology</label>
            <div className='date'>
                <label>1-02-2022 </label>-<label> Present</label>
            </div>
            <div className='desc'>
                <p>Design Web Pages as per UI/UX Requirements using React Framework, perform version control of project.</p>
            </div>
          </div>
      </div>
      <div className='work-card'>
          <img alt='Ansrcoach Logo' className='work-img' src='https://media-exp1.licdn.com/dms/image/C560BAQGltPFv_fYKLQ/company-logo_200_200/0/1605694035237?e=2159024400&v=beta&t=FZng8GKHMD2N7_Bp2XcNksj1NA9pYsb9rlwGX2vezZA' />
          <div className='work-info'>
            <label className='company'>Web Development - Ansrcoach</label>
            <div className='date'>
                <label>1-12-2021 </label>-<label> 31-12-2021</label>
            </div>
            <div className='desc'>
                <p>Design a website for an NGO with the functionality of sending Donations through Razorpay API.</p>
            </div>
          </div>
      </div>
      </div>
      
  );
}

export default Card;
