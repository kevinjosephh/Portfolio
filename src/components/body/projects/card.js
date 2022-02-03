import React from 'react';
import './card.css'

function Card() {
  return (
  <div className='project-card'>
    <div className='card'>
      <div className='project-info'>
        <label className='project-title' >Flies Chat Room</label>
        <div className='project-link'>
          <a className='btn project-live' href='https://flies-room.herokuapp.com/'>
            <div className='btn-text'><i class="fi fi-rr-network-cloud"></i>Live</div>
          </a>
          <a className=' btn project-code' href='https://github.com/kevinjosephh/Flies'>
            <div className='btn-text'><i class="fi fi-rr-notebook"></i>Code</div>
          </a>
        </div>
        <p>Public Room Web-Application. In which users can join a Room, Create a Room and Open up a new topic</p>
      </div>
      <img className='project-img' alt='' src='https://user-images.githubusercontent.com/38029772/137753113-9c643020-1894-4d17-a56e-5e5f26ac5f52.png' />
      
    </div>
    <div className='card'>
      <div className='project-info'>
        <label className='project-title' >Product Management</label>
        <div className='project-link'>
          <a className='btn project-live' href='https://product-sys.herokuapp.com'>
            <div className='btn-text'><i class="fi fi-rr-network-cloud"></i>Live</div>
          </a>
          <a className='btn project-code' href='https://github.com/kevinjosephh/Management'>
            <div className='btn-text'><i class="fi fi-rr-notebook"></i>Code</div>
          </a>
        </div>
        <p>Product Management tool on which staff member can update or keep track of all orders and user can check-in on products that were ordered by them</p>
      </div>
      <img className='project-img' alt='' src='https://user-images.githubusercontent.com/38029772/136344690-d2882a13-f64f-4856-8fa6-617cf77c2a8c.png' />
    </div>
  </div>
  );
}

export default Card;
