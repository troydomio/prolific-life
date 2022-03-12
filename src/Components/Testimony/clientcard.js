import React from 'react';

const clientcard = ({img,name,review}) => {
  return(
    <div className='card'>
        <img src={img} alt="image of happy client"/>
        <h3>{name}</h3>
        <p>{review}</p>
    </div>
  ) 
};

export default clientcard;
