import React from 'react';
import Servicebox from './Servicebox';

const Five = () => {
  return(
    <div className='service_body'>
        <Servicebox title="Relaxer(Virgin)" desc="Relaxer description." time="90" price = "90" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>

        <Servicebox title="Relaxer(Retouch)" desc="Relaxer description." time="75" price = "90" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
        
        <Servicebox title="Relaxer(Partial)" desc="Relaxer description." time="20" price = "25" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
    </div>
  ) 
};

export default Five;
