import React from 'react';
import { Link } from 'react-scroll';
import photo from '../assets/photo.webp';
import background from '../assets/shape.svg';
import {AiFillDownCircle} from "react-icons/ai";


function Main() {
  const backgroundStyle = {
    backgroundImage: `url(${background})`, 
  };
  
  return (
    <div id='main' className="w-full h-screen pb-20 flex flex-col-reverse justify-center items-center bg-cover bg-no-repeat gap-6 " style={backgroundStyle}>
      <Link to="portfolio" smooth={true} duration={500}>
        <button aria-labelledby='portfolio' className='my-7 w-12 h-8 sm:w-20 sm:h-12 rounded-full shadow-2xl bg-blue-300 hover:bg-[#EDB88B] ease-in-out duration-300'>
          <AiFillDownCircle className='mx-auto sm:text-4xl'/>
        </button>
      </Link>
      <div className='flex flex-col justify-center items-center gap-3'>
        <h1 className='text-4xl sm:text-7xl sm:mt-6 font-bold text-center text-white'>
          RICHERT Alexandre
        </h1>
        <h2 className='text-3xl sm:text-6xl  text-center font-bold text-[#EDB88B]'>
          Développeur web junior
        </h2>
      </div>
      <div>
        <img src={photo} alt="Développement front-end" className='w-52 sm:w-[300px] h-auto rounded-full bg-[#075C74]' />
      </div>

    </div>
  )
}

export default Main