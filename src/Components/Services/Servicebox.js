import React from 'react';

const Servicebox = ({title, desc, time, price, link}) => {
  return(
<div className='box'>
    <img src=""/>
    <h3>{title}</h3>
    <p>{desc}</p>
    <p>{time} min</p>
    <p>${price}</p>
    <div><a href={link}>Book</a></div>
</div>
  ) 
};

export default Servicebox;
