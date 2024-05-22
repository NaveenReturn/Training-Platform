import React from 'react';
import {useNavigate} from "react-router-dom";

const Home = () => {

    const navigate = useNavigate();
  const handleNave = (url)=>{
         navigate(`/${url}`)
  }
  return (
    <div className='praath-main-container py-2 bg-info'>  
          <div>
              <h1 className='text-white'>Welcome Praathe </h1>
              <p className='text-white'>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
              Animi voluptates excepturi laborum quidem itaque eveniet 
              harum assumenda, ipsa corrupti tempora.
              </p>
              <div className='traint'>
                 <div className='cart'>
                     <h2>Backend</h2>
                     <p>Price <span>10%</span></p>
                     <p>Offer <span>45%</span></p>
                     <p>lorem ipush</p>
                     <button className='btn btn-primary'>Free Training</button>
                 </div>
              </div>
          </div>
    </div>
 
  )
}

export default Home;