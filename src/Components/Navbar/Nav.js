import React from 'react';
import './Nav.css'

const Nav = () => {
  return (
    <div className='nav'>
    <div className='logo'><a href="/home"><img src=""/></a></div>
    <a href="/home">Home</a>
    <a href="/about">About</a>
    <a href="/services">Services</a>
    <a href="/contact">Contact</a>
    <div className='book_btn'><a href="/book">Book Appointment</a></div>
    </div>
  )
};

export default Nav;
