import React from 'react';
import Title from '../layouts/Title';
import ProjectCards from './ProjectCards';
import { projectOne, projectThree, projectTwo } from '../../assets';

const Projects = () => {
    return (
        <section id='projects' className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center items-center text-center'>
                <Title
                    title="VISIT MY GITHUB REPOSITORY"
                    des="Completed Projects"
                />
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14'>
                <ProjectCards
                    title="Landin Page"
                    des="Landing web page developed with React.JS, HTML5 and Tailwind CSS."
                    src={projectThree}
                    git="https://github.com/jesus027/Landin-Page"
                    ver="https://landin-page-sepia.vercel.app/"
                />

                <ProjectCards
                    title="Ecommercer Website"
                    des="Web E-Commerce developed with React, Tailwind CSS, Redux Toolkit, with the function
                    to add, remove and show the total price to the cart."
                    src={projectTwo}
                    git="https://github.com/jesus027/React-y-TailwindCss-Ecomerce"
                    ver="https://react-y-tailwind-css-ecomerce.vercel.app/"
                />

                <ProjectCards 
                    title="Poke-API | Pokedex"
                    des="Web page developed in JavaScript, HTML5 and CSS, in which all the pokemons are shown
                    from the 1st to the 9th generation and a search engine both by pokemon number and name."
                    src={projectOne}
                    git="https://github.com/jesus027/Pokedex"
                    ver="https://pokedex-jade-seven.vercel.app/"
                />
            </div>
        </section>
    )
}

export default Projects