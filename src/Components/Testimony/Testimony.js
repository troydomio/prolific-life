import React from 'react';
import './Testimony.css'
import Clientcard from './clientcard'

const Testimony = () => {
  return(
    <>
    <h3 className='title'>Happy Clients</h3>
    <div className='reviews'>

        <div><Clientcard img="https://live.staticflickr.com/65535/52067428231_c8463be7ae_b.jpg" /></div>
        <div><Clientcard img="https://live.staticflickr.com/65535/52067428216_786c4147ac_b.jpg" /></div> 
        <div><Clientcard img="https://live.staticflickr.com/65535/52066384082_33ce266cfc_b.jpg"/></div> 
       
    </div>
    </>
  ) 
};

export default Testimony;
