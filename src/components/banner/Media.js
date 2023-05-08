import React from 'react';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { SiReact, SiLaravel, SiHtml5, SiAngularjs } from 'react-icons/si';

const Media = () => {
    return (
        <div className='flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between'>
                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        BUSCAME EN
                    </h2>

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

                <div>
                    <h2 className='text-base uppercase font-titleFont mb-4'>
                        MIS HABILIDADES
                    </h2>

                    <div className='flex gap-4'>
                        <span className='bannerIcon'>
                            <SiReact />
                        </span>

                        <span className='bannerIcon'>
                            <SiLaravel />
                        </span>

                        <span className='bannerIcon'>
                            <SiAngularjs />
                        </span>

                        <span className='bannerIcon'>
                            <SiHtml5 />
                        </span>
                    </div>
                </div>
        </div>
    )
}

export default Media