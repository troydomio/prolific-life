import React, {useState} from 'react';
import './Services.css';
import Servicebox from './Servicebox';


const Services = () => {


  return(
    <div className='service'>
    <p className='title'> Our Services</p>
    <div className='flexme'>
   <Servicebox title="Natural Hair"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904970950_8f5d63c4de_b.jpg"/>
   <Servicebox title="Hair Extensions"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904330396_b434397696_b.jpg"/>
   <Servicebox title="Hair Cut Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904330386_440d4a7889_b.jpg"/>
   <Servicebox title="Color Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904775224_fc07a761f6_b.jpg"/>
   <Servicebox title="Updo & Wedding"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904454796_24678eff4f_b.jpg"/>
   <Servicebox title="Shampoo & Style"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://live.staticflickr.com/65535/51904651974_0d790b5d3f_b.jpg"/>
   </div>
    </div>
  ) 
};

export default Services;
