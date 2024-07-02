import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { BsFiletypeJson, BsFiletypeSql, BsFiletypePhp, BsGithub } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';


const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="Features" des="Lo que hago" />

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                <Card 
                    icon= {<AiFillAppstore />}
                    title="Desarrollo Web"
                    des="
                        Profundo conocimiento en JavaScript, React JS, Next JS, Node.js, MongoDB, MySQL, Angular.js, Vue.js, Laravel, TypeScript, Tailwind CSS y Bootstrap. Experiencia desarrollando aplicaciones web y móviles."
                />

                <Card
                    icon={<BsFiletypeJson />}
                    title="Consultas JSON"
                    des="Creación, manipulación, formateo, análisis e integración de consultas avanzadas que requieren estar escritos en lenguaje JSON."
                />

                <Card
                    icon={<TbApi />}
                    title="API REST"
                    des="experiencia en la integración y Creación de API's, Utilizando tecnologías de vanguardia como: React.Js y node.Js, para crear experiencias de contenido únicas."
                />

                <Card
                    icon={<BsFiletypeSql />}
                    title="SQL"
                    des="Manejo de gestores de bases de datos como MySQL, PostgreSQL, PHPMyAdmin, MongoDB y NoSQL, tanto para consultas como para integración de datos."
                />

                <Card
                    icon={<BsFiletypePhp />}
                    title="AWS"
                    des="conceptos fundamentales de la nube de Amazon Web Services, incluyendo computación, almacenamiento, bases de datos, seguridad y arquitectura de la nube"
                />

                <Card
                    icon={<BsGithub />}
                    title="GitHub"
                    des="Creación y manejo de repositorios, trabajo en equipo y un alto entendimiento en sus comandos como add, commit, push, pull, branch, etc..."
                />
            </div>
        </section>
    )
}

export default Features