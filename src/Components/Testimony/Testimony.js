import React from 'react';
import './Testimony.css'
import Clientcard from './clientcard'

const Testimony = () => {
  return(
    <>
    <h3 className='title'>Happy Clients</h3>
    <div className='reviews'>

        <div><Clientcard img="https://content.fortune.com/wp-content/uploads/2015/04/purdie-vaughns-photo.jpeg?w=482" name="Trisha Johnson" review="Wow, I loved my hair style and had a great session."/></div>
        <div><Clientcard img="https://news.wayne.edu/storage/files/whitfield-spotlight-research-photo-1-607070992a723.jpg" name="Danielle Thomas" review="Very professional!"/></div>
        <div><Clientcard img="http://hogg.utexas.edu/wp-content/uploads/2019/07/mia.png" name="Jane Doe" review="I come here every 2 weeks and can't imagine another stylist doing my hair."/></div>
       
    </div>
    </>
  ) 
};

export default Testimony;
