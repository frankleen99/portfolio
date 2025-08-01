import React from 'react'
import { MdOutlineKeyboardArrowRight } from "react-icons/md"
import { Link } from 'react-scroll'

function Home() {
    return (

        <div name="home" className='h-screen w-full bg-gradient-to-b from-[#343a40] via-black to-[#adb5bd] pt-20'>
            <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
                <div className='flex flex-col justify-center h-full'>
                    <h2 className='text-4xl sm:text-7xl font-bold text-white'>I am a Frontend Developer </h2>
                    <p className='text-gray-500 py-4 max-w-md'>
                        👋🏾 Hey there, I’m Franklyn — I love building digital experiences that feel smooth, thoughtful, and fun to use.
                    </p>
                    <div>
                        <Link to='portfolio' duration={500} offset={-60} smooth>
                            <button className='group text-white px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer gap-1 w-fit md:animate-bounce'>
                                <span>Portfolio</span>
                                <span className='group-hover:rotate-90 duration-300'>
                                    <MdOutlineKeyboardArrowRight size={25} />
                                </span>
                            </button>
                        </Link>
                    </div>
                </div>

                <div>
                    <img src="" alt="my profile" className='rounded-2xl mx-auto w-2/3 md:w-full' />
                </div>
            </div>
        </div>
    )
}

export default Home

