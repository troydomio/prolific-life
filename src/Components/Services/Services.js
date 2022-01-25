import React from 'react';
import './Services.css'
import Servicebox from './Servicebox';

const Services = () => {
  return(
    <div>
        <h1>Services</h1>
        <Servicebox title="test" desc="haha" time="30" price = "100" link="https://www.google.com/"/>
    </div>
  ) 
};

export default Services;
