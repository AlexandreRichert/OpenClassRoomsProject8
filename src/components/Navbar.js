import React from 'react'
import photo from '../assets/photo.jpg'

function Navbar() {
    return (
        <nav className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
            <div>
                <img src={photo} alt="Richert Alexandre" 
                style={{
                    width: '60px',
                    borderRadius: '50px' }}/>
            </div>
            <ul className='flex px-2'>
                <li>A propos</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;