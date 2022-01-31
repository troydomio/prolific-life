import React, {useState} from 'react';
import './Services.css';
import One from './One';
import Two from './Two';
import Three from './Three';
import Four from './Four';
import Five from './Five';
import Six from './Six';

const Services = () => {
 const [active, setActive] = useState("first")

  return(
    <div className='service'>
    <h1 id="faq-1">Services</h1>
    <div className='category'>
    <p className='one' onClick={()=> setActive("first")} >Shampoo & Style</p>
    <p className='two' onClick={()=> setActive("second")} >Color </p>
    <p className='three' onClick={()=> setActive("third")} >Extensions</p>
    <p className='four' onClick={()=> setActive("fourth")} >Treatments</p>
    <p className='five' onClick={()=> setActive("fifth")} >Relaxers</p>
    <p className='six' onClick={()=> setActive("sixth")} >Cuts</p>
    </div>
      {active === "first" && <One/> }
      {active === "second" && <Two/> }
      {active === "third" && <Three/> }
      {active === "fourth" && <Four/> }
      {active === "fifth" && <Five/> }
      {active === "sixth" && <Six/> }

    
    </div>
  ) 
};

export default Services;
