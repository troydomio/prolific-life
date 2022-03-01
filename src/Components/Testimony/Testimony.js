import React from 'react';
import './Testimony.css'
import Clientcard from './clientcard'

const Testimony = () => {
  return(
    <>
    <h3 className='title'>Happy Clients</h3>
    <div className='reviews'>

        <div><Clientcard img="https://live.staticflickr.com/65535/51903485067_7d68360568_b.jpg" name="Victoria" review="Push thru color! Come on Natural hair with the body! Thank you Celisa I love me hair!!!"/></div>
        {/* <div><Clientcard img="https://news.wayne.edu/storage/files/whitfield-spotlight-research-photo-1-607070992a723.jpg" name="Danielle Thomas" review="Very professional!"/></div>
        <div><Clientcard img="http://hogg.utexas.edu/wp-content/uploads/2019/07/mia.png" name="Jane Doe" review="I come here every 2 weeks and can't imagine another stylist doing my hair."/></div> */}
       
    </div>
    </>
  ) 
};

export default Testimony;
