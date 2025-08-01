import React, { useState } from 'react';
import { FaBars, FaBeer, FaTimes } from 'react-icons/fa'
import { Link } from 'react-scroll';

function NavBar() {
    const [nav, setNav] = useState(false);
    const links = [
        { id: 1, link: "home" },
        { id: 2, link: "about" },
        { id: 3, link: "portfolio" },
        { id: 4, link: "experience" },
        { id: 5, link: "contact" }
    ]
    return (
        <div className='flex justify-between items-center w-full h-20 px-4 text-white fixed  bg-[#212529] z-20'>
            <div>
                <h1 className='font-signture text-5xl ml-2'>Frankleen</h1>
            </div>

            <ul className="hidden md:flex">
                {links.map(({ id, link }) => <li key={id} className='px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200'>
                    <Link
                        to={link}
                        duration={500}
                        smooth
                    >{link}</Link>
                </li>)}
            </ul>

            <div className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden" onClick={() => setNav(prev => !prev)}>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
            </div>


            {nav && <ul className='flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500'>
                {links.map(({ id, link }) => (
                    <li key={id} className='px-4 cursor-pointer capitalize py-6 text-4xl'>
                        <Link
                            onClick={() => setNav(false)}
                            to={link}
                            duration={500}
                            smooth
                        >
                            {link}
                        </Link>
                    </li>
                ))}
            </ul>}
        </div>
    )
}

export default NavBar