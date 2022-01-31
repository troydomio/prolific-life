import React from 'react';
import Servicebox from './Servicebox';

const One = () => {
  return(
    <div className='service_body'>
        <Servicebox title="Shampoo & Style (Relaxed)" desc="A shampoo and styling session for client's with relaxed hair." time="90" price = "55" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://t3.ftcdn.net/jpg/02/22/15/10/360_F_222151023_1AwgD3YNKxqVsisQZEiFs0r0mX9F3iEu.jpg"/>

        <Servicebox title="Shampoo & Thermal Straightening" desc="A shampoo and thermal straightening session for client's with any hair type." time="90" price = "70" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://media.istockphoto.com/photos/beautiful-black-woman-with-long-straight-hair-picture-id469576495?k=20&m=469576495&s=170667a&w=0&h=9YseP9Qf-nMYsum_rVbUiuDPqI02BgG9sctPXw6up3A="/>

        <Servicebox title="Shampoo (Extensions)" desc="A shampoo and styling session for client's with hair extensions." time="150" price = "55" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.beautetrade.com/uploads/images/products/1/3/large-stock-100-unprocessed-sangita-synthetic-hair-bellami-hair-extensions1-0892837001569144242.jpg"/>

        <Servicebox title="Natural Twists Style" desc="A shampoo and heat-less styling session for client's with natural hair." time="65" price = "45" link="https://www.schedulicity.com/scheduling/BSSED9/services" img="https://www.cossma.com/typo3temp/pics/sh_720115021_afc543b2bc.jpg"/>
    </div>
  ) 
};

export default One;
