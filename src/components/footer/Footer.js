import React from 'react';
import { logo } from '../../assets/index';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
    return (
        <div className='w-full h-auto py-20 boder-b-[1px] border-b-black grid grid-cols-1 md:grid-cols-2
        lgl:grid-cols-4 gap-8'>
            <div className='w-full h-full flex flex-col gap-8 items-center'>
                <img className='w-20' src={logo} alt='logo' />

                <div className='flex gap-4'>
                    <a href='https://www.linkedin.com/in/jes%C3%BAs-pi%C3%B1ero-b521a521b/' rel="noopener noreferrer" target='_blank'>
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </a>
                    
                    <a href='https://www.instagram.com/jesusgt77/' rel="noopener noreferrer" target='_blank'>    
                        <span className='bannerIcon'>
                            <FaInstagram />
                        </span>
                    </a>

                    <a href='https://api.whatsapp.com/send?phone=584125943159' rel="noopener noreferrer" target='_blank'>    
                        <span className='bannerIcon'>
                            <FaWhatsapp />
                        </span>
                    </a>
                </div>
            </div>

            <div className='w-full h-full'>
                <h3 className='text-xl uppercase text-designColor tracking-wide'>
                    Quick Link
                </h3>

                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            Home
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>

                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            Features
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>

                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            Projects
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>

                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            Resume
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>

                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            Contact 
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>
                </ul>
            </div>

            <div className='w-full h-full'>
                <h3 className='text-xl uppercase text-designColor tracking-wide'>
                    Resources
                </h3>

                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <a href='https://react-icons.github.io/react-icons/' rel='noopener noreferrer' target='_blank'>
                        <li>
                            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                            relative group'>
                                React Icons
                                <span className='absolute h-[1px] w-full inline-flex
                            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                            transition-transform duration-300'></span>
                            </span>
                        </li>
                    </a>

                    <a href='https://www.npmjs.com/package/react-scroll' rel='noopener noreferrer' target='_blank'>
                        <li>
                            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                            relative group'>
                                React Scroll
                                <span className='absolute h-[1px] w-full inline-flex
                            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                            transition-transform duration-300'></span>
                            </span>
                        </li>
                    </a>
                    
                    <a href='https://www.npmjs.com/package/react-simple-typewriter' rel='noopener noreferrer' target='_blank'>
                        <li>
                            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                            relative group'>
                                React Simple Typewriter
                                <span className='absolute h-[1px] w-full inline-flex
                            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                            transition-transform duration-300'></span>
                            </span>
                        </li>
                    </a>

                    <a href='https://tailwindcss.com/' rel='noopener noreferrer' target='_blank'>
                        <li>
                            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                            relative group'>
                                Tailwind CSS
                                <span className='absolute h-[1px] w-full inline-flex
                            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                            transition-transform duration-300'></span>
                            </span>
                        </li>
                    </a>

                    <a href='https://www.emailjs.com/docs/sdk/installation/' rel='noopener noreferrer' target='_blank'>
                        <li>
                            <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                            relative group'>
                                EmailJS
                                <span className='absolute h-[1px] w-full inline-flex
                            bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                            transition-transform duration-300'></span>
                            </span>
                        </li>
                    </a>
                </ul>
            </div>

            <div className='w-full h-full'>
                <h3 className='text-xl uppercase text-designColor tracking-wide'>
                    Copyright
                </h3>

                <ul className='flex flex-col gap-4 font-titleFont font-medium py-6 overflow-hidden'>
                    <li>
                        <span className='w-full text-lg hover:text-designColor duration-300 cursor-pointer
                        relative group'>
                            © 2023 Jesús Piñero | Website Portfolio
                            <span className='absolute h-[1px] w-full inline-flex
                        bg-designColor -bottom-1 left-0 -translate-x-[100%] group-hover:translate-x-0
                        transition-transform duration-300'></span>
                        </span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer