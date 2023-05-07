import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { BsFiletypeJson, BsFiletypeSql, BsFiletypePhp, BsGithub } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';


const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="Caracteristicas" des="Lo que hago" />

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                <Card 
                    icon= {<AiFillAppstore />}
                    title="Desarrollo Web"
                    des="Desarrollo de aplicaciones web con React.Js, Angular.Js, Laravel, MySQL, HTML5,
                    JavaScript, Tailwind CSS y BootsTrap."
                />

                <Card
                    icon={<BsFiletypeJson />}
                    title="Consultas JSON"
                    des="Creación, manipulación, formateo, análisis e integración de consultas avanzadas que
                    requieran ser escritas en lenguaje JSON."
                />

                <Card
                    icon={<TbApi />}
                    title="Manipulación de API"
                    des="Creación de contenido con varias API´s, entre ellas GIPHY, PokéAPI, Rick and Morty API y
                    Breaking Bad Quotes API, utilizando React.JS, Angular.JS y Laravel"
                />

                <Card
                    icon={<BsFiletypeSql />}
                    title="SQL"
                    des="Manejo de gestores de Bases de Datos como lo son MySQL, PostgreSQL, PHPMyAdmin,
                    tanto para las consultas como para la integración de datos"
                />

                <Card
                    icon={<BsFiletypePhp />}
                    title="PHP"
                    des="Solidos conocimientos en el lenguaje PHP, para la creación de código avanzado y desarrollo
                    de aplicaciones o programas en especifico"
                />

                <Card
                    icon={<BsGithub />}
                    title="GitHub"
                    des="Creación de repositorio, trabajo en equipo y alto entendimiento
                    en sus comandos como lo son git push, pull, branch, etc..."
                />
            </div>
        </section>
    )
}

export default Features