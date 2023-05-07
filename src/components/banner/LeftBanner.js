import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Codificador Profesional.", "Desarrollador Full-Stack."],
        loop: true,
        typeSpeed: 20,
        deleteSpeed: 10,
        delaySpeed: 2000,
    });

    return (
        <div className='w-full lgl:w-1/2 flex flex-col gap-20'>
                <div className='flex flex-col gap-5'>
                    <h4 className='text-lg font-normal'>BIENVENIDO A MI PORTAFOLIO WEB</h4>
                    <h1 className="text-5xl font-bold text-white">
                        Hola, soy{" "}
                        <span className='text-designColor capitalize'>Jesús Piñero</span>
                    </h1>
                    <h2 className='text-4xl font-bold text-white'>
                        un <span>{text}</span>
                        <Cursor 
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#84cc16'
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        Programador web con 4 años de experiencia en el desarrollo de aplicaciones web con 
                        React.Js, Angular.Js, Laravel, MySQL, HTML5, JavaScript, Tailwind CSS y BootsTrap. Realice
                        una pasantia como programador Front-End en Devdatep Consulting en conjunto conel equipo del
                        Front-End. Me enfoco siempre en buscar las soluciones más eficientes en un entorno robusto y
                        a su vez escalable. Es un requisito indispensable tener un balance equilibrado entre mi
                        profesión y mi familia.
                    </p>
                </div>

                <Media />
        </div>
    )
}

export default LeftBanner