import React from 'react'

function Contact() {
    return (
        <div name="contact" className='w-full h-screen bg-gradient-to-b from-[#212529] to-[#adb5bd] text-white pt-12 md:pt-0'>
            <div className='flex flex-col justify-center h-full p-4 max-w-screen-lg mx-auto'>
                <div className='pb-8'>
                    <p className='font-bold text-4xl border-b-4 border-gray-500 inline-block'>Contact me!</p>
                    <p className='py-6'>Submit the form below to get in touch with me</p>
                </div>

                <div className='flex justify-center items-center'>
                    <form action="https://getform.io/f/d2d065cd-128f-424a-b9a1-750074a6ca25" method='post' className='flex flex-col w-full md:w-1/2'>
                        <input
                            placeholder='Enter your name'
                            name='name'
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        />
                        <input
                            type='email'
                            placeholder='Enter your email'
                            name='email'
                            className='my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        />
                        <textarea
                            placeholder='Enter your message'
                            name="message"
                            rows="10"
                            className='p-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        ></textarea>

                        <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'>Let's talk</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact