import React, { useState } from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";


function Card(props) {
  const cardBackground = {
    backgroundImage: `url(${props.imageUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  const [active, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!active);
  };


  return (
    <div className='w-full max-w-[500px] h-64 md:h-96 shadow-1 rounded-lg flex flex-col justify-end' style={cardBackground}>
      <div className={ `flex flex-col items-center justify-between text-white bg-[#083953] rounded-b-lg backdrop-filter backdrop-blur-sm bg-opacity-80`  }>
        <div className="  bg-[#083953] h-16 w-full justify-center flex items-center">
          <h2 className='text-center flex-grow'>{props.title}</h2>
          <div className="ml-auto ">
            <AiOutlineArrowUp className=' justify-self-end self-end mr-2' onClick={handleToggle} style={{ cursor: 'pointer' }} />
          </div>        
        </div>
        <div className='flex flex-col justify-center items-center mx-2 md:ml-4'>
          {active && (
            <div className='my-4'>
              <p className='text-center'>{props.description}</p>
              <ul className='flex mt-2'>
                {props.tags.map((tag, index) => (
                  <li className='mx-5' key={index}>{tag}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default Card