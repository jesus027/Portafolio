import React, { useState } from 'react';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMenu } from 'react-icons/hi';
import { MdClose } from 'react-icons/md';
import { Link } from 'react-scroll';
import { logo } from '../../assets/index';
import { navLinksdata } from '../../constants';

const Navbar = () => {

    const [showMenu, setShowMenu] = useState(false);

    return (
        <div className='w-full h-24 sticky top-0 bg-bodyColor z-50 mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
            <div>
                <img src={logo} alt='logo' />
            </div>
            <div>
                <ul className='hidden md:inline-flex items-center gap-6 lg:gap-10'>
                    {navLinksdata.map(({_id, title, link}) => (
                            <li 
                                className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                                hover:text-designColor duration-300' 
                                key={_id}
                            >
                                <Link
                                    activeClass="active"
                                    to={link}
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    {title}
                                </Link>
                            </li>
                    ))}
                </ul>
                <span
                    onClick={() => setShowMenu(!showMenu)}
                    className='text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center
                rounded-full text-designColor cursor-pointer'
                >
                    <HiOutlineMenu />
                </span>
                {showMenu && (
                    <div className='w-[80%] h-screen overflow-scroll absolute top-0 left-0 bg-gray-900 p-4
                    scrollbar-hide'>
                        <div className='flex flex-col gap-8 py-2 relative'>
                            <div>
                                <img src={logo} alt='logo' className='w-20' />

                                <p className='text-sm text-gray-400 mt-2'>
                                Profundo conocimiento en JavaScript, React JS, Next JS, Node.js, Redux, MongoDB, MySQL, Docker, Angular.js, Vue.js, Laravel, TypeScript, Tailwind CSS y Bootstrap.
                                </p>
                            </div>

                            <ul className='flex flex-col gap-4'>
                                {
                                    navLinksdata.map((item) => (
                                        <li
                                            key={item._id}
                                            className='text-base font-normal text-gray-400 tracking-wide
                                            cursor-pointer  hover:text-designColor duration-300' 
                                        >
                                            <Link
                                                onClick={() => setShowMenu(false)}
                                                activeClass="active"
                                                to={item.link}
                                                spy={true}
                                                smooth={true}
                                                offset={-70}
                                                duration={500}
                                            >
                                                {item.title}
                                            </Link>
                                        </li>
                                    ))
                                }
                            </ul>

                            <div className='flex flex-col gap-4'>
                                <h2 className='text-base font-titleFont uppercase mb-4'>Contáctame</h2>
                                
                                <div className='flex gap-4'>
                                    <a href='https://www.linkedin.com/in/jesus-pinero-b521a521b/' rel="noopener noreferrer" target='_blank'>
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

                            <span
                                onClick={() => setShowMenu(false)}
                                className='absolute top-4 right-4 text-gray-400 hover:text-designColor
                                duration-300 text-2xl cursor-pointer'
                            >
                                <MdClose />
                            </span>
                        </div>

                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar