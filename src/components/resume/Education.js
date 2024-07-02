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
                    <p className='text-sm text-designColor tracking-[4px]'>2006 - 2024</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Estudios Académicos</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="Estudios Universitarios (2018-2023)"
                        subTitle='Universidad Politécnica Territorial "José Antonio Anzoátegui"'
                        result="17.64/20"
                        des="Graduado de Ingeniero Informático, con materias dedicadas a la programación, la formación profesional y el desarrollo de proyectos sociotecnológicos."
                    />

                    <ResumeCard
                        title="Bachiller (2013-2018)"
                        subTitle='Unidad Educativa Privada "Carlos Soublette"'
                        result="18.80/20"
                        des="Graduado con honores como Bachiller en Ciencias."
                    />

                    <ResumeCard
                        title="Escuela Basica (2006-2013)"
                        subTitle='Unidad Educativa Estatal "Aníbal Dominicci"'
                        result="20/20"
                        des="Graduado en estudios primarios."
                    />
                </div>
            </div>
        
            {/*** Experiencia ***/}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2018 - 2022</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Experiencia laboral</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="BluCactus (2023 - 2024)"
                        subTitle="Diseñador Web"
                        result="BluCactus"
                        des="Diseñar y desarrollar las páginas web de los clientes, en función de
                            las necesidades requeridas junto con el equipo de trabajo."
                    />

                    <ResumeCard
                        title="Devdatep Consulting (2022 - 2022)"
                        subTitle="Programador Front-End"
                        result="Devdatep"
                        des="Practicante responsable de desarrollar e implementar un Dashboard en    React.js y Tailwind Css, trabajando con tecnologías como
                            Redux, Axios, Chart.js, FullCalendar, Bootstrap, GitHub y
                            dependencias de Gitlab, con un enfoque en la eficiencia y
                            funcionalidad en el Resultados previstos."
                    />

                    <ResumeCard
                        title="AWS Practicante de la nube"
                        subTitle="Curso de Udemy"
                        result="Udemy"
                        des="Descripción y práctica de conceptos fundamentales de la nube de Amazon Web Services, incluyendo computación, almacenamiento, bases de datos, seguridad y arquitectura de la nube. Además, se abarcan el diseño e implementación de soluciones en la nube seguras y escalables, la administración y monitoreo de recursos en la nube, y la optimización de costos y mejora de la eficiencia."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education