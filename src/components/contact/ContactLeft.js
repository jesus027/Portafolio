import React from 'react';
import { FaLinkedinIn, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import { contactImg } from '../../assets/index';

const ContactLeft = () => {
    return (
        <div className='w-full lgl:w-[35%] h-full bg-gradient-to-r from-[#1e2024] to-[#23272b] p-4 lgl:p-8
        rounded-lg shadow-shadowOne flex flex-col gap-8 justify-center'>
            <img 
                className='w-full h-64 object-cover rounded-lg mb-2'
                src={contactImg}
                alt='img/contacto'
            />

            <div className='flex flex-col gap-4'>
                <h3 className='text-3xl mb-0 text-center font-bold text-white'>Jesús Piñero</h3>
                
                <p className='text-lg text-center font-normal text-gray-200'>
                    Desarrollador Full-Stack
                </p>

                <p className='text-base text-justify text-gray-400 tracking-wide'>
                    Profundo conocimiento en React JS, Next JS, Node.js, MongoDB, MySQL, Angular.js, Vue.js, Laravel, TypeScript, Tailwind CSS y Bootstrap. Experiencia desarrollando aplicaciones web y móviles utilizando tecnologías como React Native. Conocimiento de los servicios en la nube de AWS. Uso de herramientas para CI/CD como Jenkins y GitLab CI/CD. Diseño y desarrollo de APIs con Next JS y GraphQL.
                </p>

                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Teléfono: <span className='text-lightText'>+58 412-5943159</span>
                </p>

                <p className='text-base text-gray-400 flex items-center gap-2'>
                    Email:{" "}
                    <span className='text-lightText'>jesusparenas21@gmail.com</span>
                </p>
            </div>

            <div className='flex flex-col gap-4'>
                <h2 className='text-base font-titleFont uppercase mb-4'>Contáctame</h2>
                
                <div className='flex gap-4'>
                    <a 
                        href='https://www.linkedin.com/in/jesus-pinero-b521a521b/'
                        rel="noopener noreferrer"
                        target='_blank'
                    >
                        <span className='bannerIcon'>
                            <FaLinkedinIn />
                        </span>
                    </a>

                    <a 
                        href='https://www.instagram.com/jesusgt77/'
                        rel="noopener noreferrer"
                        target='_blank'
                    >    
                        <span className='bannerIcon'>
                            <FaInstagram />
                        </span>
                    </a>

                    <a 
                        href='https://api.whatsapp.com/send?phone=584125943159'
                        rel="noopener noreferrer"
                        target='_blank'
                    >    
                        <span className='bannerIcon'>
                            <FaWhatsapp />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default ContactLeft