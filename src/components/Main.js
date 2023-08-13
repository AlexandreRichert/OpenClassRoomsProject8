import React from 'react';
import photo from '../assets/photo.png';
import background from '../assets/shape.svg';
import {AiFillDownCircle} from "react-icons/ai";


function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`, 
  };
  
  return (
    <div className=" w-full h-screen pb-20 flex flex-col-reverse justify-center items-center bg-cover bg-no-repeat gap-6 " style={backgroundStyle}>
      <button className='my-7 w-28 h-8 rounded-lg shadow-2xl bg-blue-300 hover:bg-[#EDB88B] ease-in-out duration-300'><a href="#portfolio"><AiFillDownCircle className='mx-auto'/></a></button>
      <div className='flex flex-col justify-center items-center'>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RICHERT Alexandre
        </h1>
        <h2 className='text-4xl sm:text-7xl  text-center font-bold text-[#8892b0]'>
          Développeur web junior
        </h2>
      </div>
      <div>
        <img src={photo} alt="Développement front-end" className='w-52 h-auto rounded-full bg-[#075C74]' />
      </div>

    </div>
  )
}

export default Main