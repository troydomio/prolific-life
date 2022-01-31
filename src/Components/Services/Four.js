import React from 'react';
import Servicebox from './Servicebox';

const Four = () => {
  return(
    <div className='service_body'>
        <Servicebox title="Protein Treatment" desc="Protein treatment description." time="25" price = "20" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
        
        <Servicebox title="Deep Conditioning Treatment" desc="Protein treatment description." time="15" price = "10" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
    </div>
  ) 
};

export default Four;
