import React from 'react';

const Servicebox = ({img,title,link}) => {
  return(
<div className='box'>
    <div>  <img src={img} alt="image of clients with their hair styled"/> </div>
    <div>
    <div><h3 className='titlebox'>{title}</h3></div>
    <div className='bookbtn'><a href={link} target="_blank">Book</a></div>
    </div>
</div>
  ) 
};

export default Servicebox;
