import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
      <a href="/">Home</a>
    <a href="#faq-about">About</a>
    <a href="#faq-1">Services</a>
    <a href="#faq-contact">Contact</a>
    <div className='book_btn'><a href="https://www.schedulicity.com/scheduling/BSSED9/services">Book Appointment</a></div>
    </div>
  )
};

export default Nav;
