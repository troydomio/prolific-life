import React from 'react';
import './Header.css'
const Header = () => {
  return(
    <div className='header'>

      <div className='title_image'>
      <div><h1>Prolific shop</h1></div>
      <div><img src="https://images.unsplash.com/photo-1585870720832-ff6984746730?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"/></div>
      </div>

      <div className='call_action'><p>View Services</p></div>
    </div>
  ) 
};

export default Header;
