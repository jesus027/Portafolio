import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Programador Profesional.", "Desarrollador Full-Stack."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 15,
        delaySpeed: 3500,
    });

    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>Bienvenido a mi Portafolio Web</h4>
                    <h1 className="text-5xl font-bold text-white">
                    Hola, yo soy{" "}
                        <span className='text-designColor capitalize'>Jesús Piñero</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        a <span>{text}</span>
                        <Cursor 
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#84cc16'
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        Web programmer with 4 years of experience developing web applications with React.Js,
                        Angular.Js, Laravel, MySQL, HTML5, JavaScript, Tailwind CSS and BootsTrap. do an internship
                        as a Front-End programmer at Devdatep Consulting together with the Front-End team. I
                        I always focus on finding the most efficient solutions in a robust environment and at the same time
                        scalable. It is an essential requirement to have a balanced balance between my profession and my
                        family.
                    </p>
                </div>

                <Media />
        </div>
    )
}

export default LeftBanner