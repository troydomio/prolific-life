import React from 'react';
import './Header.css'
const Header = () => {
  return(
    <div className='header'>

      {/* <div className='parheader'></div> */}
      <div className='headertitle'>
        <h4>Prolific Shop</h4>
        <p>Gregory's Hair & Nails </p>
        <p>2021 N Hampton Rd, DeSoto, TX 75115 </p>
        <p>214-315-4477</p>
        <div className='fb'> <a href='https://www.facebook.com/berrysweetstylez' target='_blank'><img src="https://live.staticflickr.com/65535/51930851684_c762488c40_b.jpg" alt="image of facebook icon"></img></a></div>
        </div>
      <div><img src="https://live.staticflickr.com/65535/51930587593_88e290604a_b.jpg" alt="header photo"/></div>
      </div>
  
  ) 
};

export default Header;
