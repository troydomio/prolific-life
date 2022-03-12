import React from 'react';
import './Testimony.css'
import Clientcard from './clientcard'

const Testimony = () => {
  return(
    <>
    <h3 className='title'>Happy Clients</h3>
    <div className='reviews'>

        <div><Clientcard img="https://live.staticflickr.com/65535/51932605778_145a32d8f6_b.jpg" name="Yvette" review="You always slay my hair! Love you!"/></div>
        <div><Clientcard img="https://live.staticflickr.com/65535/51933139805_c361a6dd40_b.jpg" name="Victoria" review="Push through color! Come on Natural hair with the body! Thank you Celisa I love my hair!!!"/></div> 
       
    </div>
    </>
  ) 
};

export default Testimony;
