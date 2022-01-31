import React from 'react';

const Servicebox = ({img,title, desc, time, price, link}) => {
  return(
<div className='box'>
    <img src={img}/>
    <h3 className='titlebox'>{title}</h3>
    <p className='des'>{desc}</p>
    <p>{time} minutes</p>
    <p className='up'>${price}</p>
    <div className='bookbtn'><a href={link} target="_blank">Book</a></div>
</div>
  ) 
};

export default Servicebox;
