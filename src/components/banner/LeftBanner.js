import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import Media from './Media';

const LeftBanner = () => {

    const [text] = useTypewriter({
        words: ["Programador Profesional.", "Desarrollador Full-Stack."],
        loop: true,
        typeSpeed: 30,
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
                        <span>{text}</span>
                        <Cursor 
                            cursorBlinking="false"
                            cursorStyle="|"
                            cursorColor='#84cc16'
                        />
                    </h2>
                    <p className='text-base font-bodyFont leading-6 tracking-wide'>
                        Mi experiencia como programador abarca más de 4 años, durante los cuales he trabajado en una amplia variedad de proyectos. Estos incluyen la creación de aplicaciones web y móviles, así como el desarrollo de microservicios y API RESTful. Mi enfoque en la tecnología y el aprendizaje constante me han permitido adaptarme rápidamente a nuevas tecnologías y herramientas, lo cual ha sido esencial para el éxito de los proyectos en los que he trabajado.

                        Algunos de los logros y habilidades clave en mi carrera como programador web incluyen: Profundo conocimiento en JavaScript, React JS, Next JS, Node.js, Redux, MongoDB, MySQL, Docker, Angular.js, Vue.js, Laravel, TypeScript, Tailwind CSS y Bootstrap.
                    </p>
                </div>

                <Media />
        </div>
    )
}

export default LeftBanner