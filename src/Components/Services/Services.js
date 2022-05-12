import React, {useState} from 'react';
import './Services.css';
import Servicebox from './Servicebox';


const Services = () => {


  return(
    <div className='service'>
    <p className='title'> Our Services</p>
    <div className='flexme'>
   {/* <Servicebox title="Natural Hair"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51931609642_e58f7fa099_b.jpg"/> */}
   <Servicebox title="Natural Hair"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52067399006_3e680d971b_b.jpg"/>
   <Servicebox title="Hair Extensions"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52067641169_17b9b9d6c0_b.jpg"/>
   <Servicebox title="Hair Cut Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52066368017_78dbe8c1b0_b.jpg"/>
   <Servicebox title="Color Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52067414116_1be017f2f6_b.jpg"/>
   <Servicebox title="Updo & Wedding"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52067644169_946f3df490_b.jpg"/>
   <Servicebox title="Shampoo & Style"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/52067412416_a00c2b5b88_b.jpg"/>
   </div>
    </div>
  ) 
};

export default Services;
