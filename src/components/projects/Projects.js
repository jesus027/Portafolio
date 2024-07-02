import React from 'react';
import Title from '../layouts/Title';
import ProjectCards from './ProjectCards';
import { projectOne, projectThree, projectTwo, projectFor, projectFive } from '../../assets';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center items-center text-center'>
                <Title
                    title="VISIT MY GITHUB REPOSITORY"
                    des="Proyectos completados"
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCards
                    title="Landin Page"
                    des="Es un proyecto de página de destino diseñada para presentar información y promocionar un producto o servicio de manera atractiva y efectiva. Cuenta con una interfaz minimalista y moderna, diseñada para llamar la atención del usuario y guiarlo hacia la acción deseada."
                    src={projectThree}
                    git="https://github.com/jesus027/Landin-Page"
                    ver="https://landin-page-sepia.vercel.app/"
                />

                <ProjectCards
                    title="Ecommercer"
                    des="El proyecto es una tienda en línea construida utilizando React.Js, Redux y Tailwind CSS. La página web tiene un diseño minimalista con un enfoque en la simplicidad y la facilidad de uso. El diseño es responsivo, lo que significa que se adapta a diferentes tamaños de pantalla y dispositivos."
                    src={projectTwo}
                    git="https://github.com/jesus027/React-y-TailwindCss-Ecomerce"
                    ver="https://react-y-tailwind-css-ecomerce.vercel.app/"
                />

                <ProjectCards 
                    title="MERN Dashboard Empresarial"
                    des="Este proyecto es una aplicación de panel de control (dashboard) utilizando el stack MERN (MongoDB, Express, React y Node.js). Autenticación de usuarios utilizando JWT (JSON Web Tokens), API RESTful para la comunicación entre el frontend y el backend, y Conexión a una base de datos MongoDB para almacenar la información de los usuarios y proyectos."
                    src={projectFor}
                    git="https://github.com/jesus027/mern-dashboard"
                    ver="https://mern-dashboard-react.onrender.com"
                />

                <ProjectCards 
                    title="Traductor Web"
                    des="Es una aplicación web de traducción de texto que utiliza inteligencia artificial (MyMemory API), cuenta con una interfaz de usuario fácil de usar y minimalista. La aplicación permite a los usuarios escribir un texto en un idioma y recibir una traducción instantánea en otro idioma, desarrollada utilizando la tecnologías moderna de ReactJS y Material UI."
                    src={projectFive}
                    git="https://github.com/jesus027/google-translate-clon"
                    ver="https://translate-self.vercel.app"
                />

                <ProjectCards 
                    title="Poke-API | Pokedex"
                    des="El proyecto Pokedex es una aplicación web que permite a los usuarios explorar y buscar información sobre diferentes especies de Pokémon. Cuenta con una interfaz de usuario intuitiva y fácil de usar, que permite a los usuarios buscar y filtrar Pokémon por nombre, tipo y otras características."
                    src={projectOne}
                    git="https://github.com/jesus027/Pokedex"
                    ver="https://pokedex-jade-seven.vercel.app/"
                />
            </div>
        </section>
    )
}

export default Projects