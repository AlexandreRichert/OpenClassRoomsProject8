import React from 'react'
import { Link } from 'react-scroll';
import {AiFillHome} from "react-icons/ai";



function Navbar() {
    return (
        <nav className='sticky z-50 top-0 w-full h-[100px] flex justify-between items-center px-4 sm:px-8 lg:px-12 bg-[#0a192f] text-gray-300'>
            <div>
                <Link to='main' smooth={true} duration={500}>
                    <AiFillHome className='cursor-pointer text-2xl hover:text-[#EDB88B] ease-in-out duration-300 sm:text-4xl lg:text-6xl' alt="Accueil"/>
                </Link>
            </div>
            <ul className='flex px-2 space-x-10 sm:text-3xl lg:text-4xl'>
                <NavItem to='about' text='A propos' />
                <NavItem to='portfolio' text='Portfolio' />
                <NavItem to='contact' text='Contact' />
            </ul>
        </nav>
    )
}

function NavItem({ to, text }) {
    return (
        <li className='whitespace-nowrap'>
            <Link to={to} smooth={true} duration={500} className='cursor-pointer hover:text-[#EDB88B] ease-in-out duration-300'>
                {text}
            </Link>
        </li>
    );
}

export default Navbar;