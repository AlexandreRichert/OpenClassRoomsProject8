import React from 'react'
import { Link } from 'react-scroll';
import {AiFillHome} from "react-icons/ai";



function Navbar() {
    return (
        <nav className='sticky z-50 top-0 w-full h-[100px] flex justify-between items-center px-2 bg-[#0a192f] text-gray-300'>
            <div>
                <Link to='main' smooth={true} duration={500}>
                    <AiFillHome className=' cursor-pointer text-2xl ml-1 hover:text-[#EDB88B] ease-in-out duration-300' alt="Accueil"/>
                </Link>
            </div>
            <ul className='flex px-2 space-x-10'>
                <Link to='about' smooth={true} duration={500}>
                    <li className=' cursor-pointer whitespace-nowrap hover:text-[#EDB88B] ease-in-out duration-300'>A propos</li>
                </Link>
                <Link to='portfolio' smooth={true} duration={500}>
                    <li className=' cursor-pointer whitespace-nowrap hover:text-[#EDB88B] ease-in-out duration-300'>Portfolio</li>
                </Link>
                <Link to='contact' smooth={true} duration={500}>
                    <li className='cursor-pointer whitespace-nowrap hover:text-[#EDB88B] ease-in-out duration-300'>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar;