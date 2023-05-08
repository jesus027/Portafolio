import React from 'react';
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
    return (
        <motion.div 
            initial={{opacity:0}}
            animate={{opacity:1 , transition:{duration:.8}}}
            className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
        >
            {/*** Educación ***/}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2006 - 2023</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Estudios Académicos</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="Estudios Universitarios (2018-2023)"
                        subTitle='Universidad Politecnica Territorial "José Antonio Anzoátegui"'
                        result="17.64/20"
                        des="Graduado como Ing. Informático con la nota más alta del curso, 
                        con asignaturas dedicadas a la programación, formación profesional y al desarrollo de
                        proyectos socio-tecnológicos."
                    />

                    <ResumeCard
                        title="Bachillerato (2013-2018)"
                        subTitle='Unidad Educativa Privada "Carlos Soublette"'
                        result="18.80/20"
                        des="Graduado con honores como Bachiller en Ciencias con la nota más
                        alta en materias como química, física y proyecto."
                    />

                    <ResumeCard
                        title="Escuela Basica (2006-2013)"
                        subTitle='Unidad Educativa Estadal "Aníbal Dominicci"'
                        result="20/20"
                        des="Graduado con honores en estudios primarios con la nota más
                        alta en todas las materias."
                    />
                </div>
            </div>
        
            {/*** Experiencia ***/}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2018 - 2022</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Experiencia de Trabajo</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="Devdatep Consulting (2022 - 2022)"
                        subTitle="Programador React.Js y Tailwind CSS"
                        result="Devdatep"
                        des="Pasante responsable de desarrollar e implementar un sistema de
                        asistencia en React.js y Tailwind Css, trabajando con tecnologías como
                        las dependencias de React.js, Axios, Chart.js, FullCalendar, Bootstrap,
                        Github y Gitlab, con dirección a la eficiencia y funcionalidad en los
                        resultados que se esperan."
                    />

                    <ResumeCard
                        title="Curso de React.js y Tailwind CSS (2022-2022)"
                        subTitle="Curso Realizado en Udemy"
                        result="Udemy"
                        des="Curso realizado durante mi pasantia en Devdatep Consulting,
                        mediante la plataforma web de aprendizaje de Udemy."
                    />

                    <ResumeCard
                        title="Sistema de Incripción Automatizado (2022-2023)"
                        subTitle="Programa de Escritorio (Java/MySQL)"
                        result="Freelancer"
                        des="Diseño y Desarrollo de un sistema automatizado, con el lenguaje de
                        Programación Java, capaz de realizar la inscripción de los alumnos,
                        generar constancias de los alumnos inscritos y tomar la asistencia de
                        los profesores."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education