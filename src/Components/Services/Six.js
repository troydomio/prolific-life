import React from 'react';
import Servicebox from './Servicebox';

const Six = () => {
  return(
    <div className='service_body'>
        <Servicebox title="Haircut Layers" desc="Haircut layers description." time="10" price = "20" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>

        <Servicebox title="Trim" desc="Trim description." time="5" price = "" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
        
        <Servicebox title="Short Cut" desc="Short cut description." time="15" price = "20" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
    </div>
  ) 
};

export default Six;
