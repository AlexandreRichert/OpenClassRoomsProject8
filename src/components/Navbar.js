import React from 'react'
import {AiFillHome} from "react-icons/ai";


function Navbar() {
    return (
        <nav className='sticky top-0 w-full h-[100px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300'>
            <div>
                <AiFillHome className='text-4xl ml-3' alt="Accueil"/>
            </div>
            <ul className='flex px-2 space-x-10'>
                <li>A propos</li>
                <li>Portfolio</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
}

export default Navbar;