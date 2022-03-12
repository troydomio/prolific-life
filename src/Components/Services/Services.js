import React, {useState} from 'react';
import './Services.css';
import Servicebox from './Servicebox';


const Services = () => {


  return(
    <div className='service'>
    <p className='title'> Our Services</p>
    <div className='flexme'>
   <Servicebox title="Natural Hair"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51931609642_e58f7fa099_b.jpg"/>
   <Servicebox title="Hair Extensions"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51932593546_f3bb51d97b_b.jpg"/>
   <Servicebox title="Hair Cut Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51934443784_00289716bf_b.jpg"/>
   <Servicebox title="Color Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51933138752_271d738975_b.jpg"/>
   <Servicebox title="Updo & Wedding"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51934120931_9b8c354781_b.jpg"/>
   <Servicebox title="Shampoo & Style"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51933138707_5721e779f8_b.jpg"/>
   </div>
    </div>
  ) 
};

export default Services;
