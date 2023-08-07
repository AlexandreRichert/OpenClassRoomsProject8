import React from 'react';
import photo from '../assets/photo.jpg';

function Main() {
  return (
    <div className='w-full h-screen bg-red-900 flex'>
      <div className='flex flex-col justify-center items-center w-1/2 h-full '>
        <p className='text-white'>Je suis</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          RICHERT Alexandre
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          Développeur web junior
        </h2>
      </div>
      <div className='flex justify-center items-center w-1/2'>
        <img src={photo} alt="Développement front-end" className='w-80 h-auto rounded-full' />
      </div>
    </div>
  )
}

export default Main