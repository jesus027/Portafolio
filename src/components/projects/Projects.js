import React from 'react';
import Title from '../layouts/Title';
import ProjectCards from './ProjectCards';
import { projectOne, projectThree, projectTwo } from '../../assets';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center items-center text-center'>
                <Title
                    title="VISITA MI REPOSITORIO EN GITHUB"
                    des="Projectos Realizados"
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCards
                    title="Landin Page"
                    des="Pagina web de aterrizaje desarrollada con React.JS, HTML5 y Tailwind CSS."
                    src={projectThree}
                    git="https://github.com/jesus027/Landin-Page"
                    ver="https://landin-page-sepia.vercel.app/"
                />

                <ProjectCards
                    title="Ecommercer Website"
                    des="Web E-Commerce desarrollado con React, Tailwind CSS, Redux Toolkit, con la función
                    de añadir, quitar y mostrar el precio total al carrito."
                    src={projectTwo}
                    git="https://github.com/jesus027/React-y-TailwindCss-Ecomerce"
                    ver="https://react-y-tailwind-css-ecomerce.vercel.app/"
                />

                <ProjectCards 
                    title="Poke-API | Pokedex"
                    des="Pagina Web desarrollada en JavaScript, HTML5 y CSS, en la que se Muestran todos los pokemons
                    desde la 1ra a la 9na generación y un buscador tanto por número como nombre pokemon."
                    src={projectOne}
                    git="https://github.com/jesus027/Pokedex"
                    ver="https://pokedex-jade-seven.vercel.app/"
                />
            </div>
        </section>
    )
}

export default Projects