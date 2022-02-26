import React, {useState} from 'react';
import './Services.css';
import Servicebox from './Servicebox';


const Services = () => {


  return(
    <div className='service'>
    
   <Servicebox title="Natural Hair"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
   <Servicebox title="Hair Extensions"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
   <Servicebox title="Hair Cut Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
   <Servicebox title="Color Services"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
   <Servicebox title="Relaxer Treatments"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
   <Servicebox title="Shampoo & Style"  link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
    
    </div>
  ) 
};

export default Services;
