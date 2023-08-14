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
    <div className='w-11/12 max-w-[500px] h-64 md:h-96 shadow-1 rounded-lg flex flex-col justify-end' style={cardBackground}>
      <div className={ ` flex flex-col items-center justify-between text-white bg-[#083953] rounded-b-lg backdrop-filter backdrop-blur-sm bg-opacity-80`  }>
        <div className="  bg-[#083953] h-12 w-full justify-center flex items-center">
          <h2 className='text-center flex-grow'>{props.title}</h2>
          <div className="ml-auto ">
            <AiOutlineArrowUp 
            className=' justify-self-end self-end mr-2' 
            onClick={handleToggle} 
            style={{ cursor: 'pointer',
                    transform: active ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.5s ease-in-out', }} />
          </div>        
        </div>
        <div className={`w-full flex flex-col justify-center items-center px-2 md:ml-4  ${active ? 'transition-opacity ease-in-out duration-500' : 'opacity-0'}`}>
          {active &&  (
            <div className='my-4'>
              <p className='text-center mb-4'>{props.description}</p>
              <ul className='flex justify-center flex-wrap mt-2 gap-2'>
                {props.tags.map((tag, index) => (
                  <li className=' text-xs mx-2 border-solid border border-[#EDB88B] rounded-full p-3' key={index}>{tag}</li>
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