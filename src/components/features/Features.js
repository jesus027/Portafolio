import React from 'react';
import Title from '../layouts/Title';
import Card from './Card';
import { AiFillAppstore } from 'react-icons/ai';
import { BsFiletypeJson, BsFiletypeSql, BsFiletypePhp, BsGithub } from 'react-icons/bs';
import { TbApi } from 'react-icons/tb';


const Features = () => {
    return (
        <section id='features' className='w-full py-20 border-b-[1px] border-b-black'>
            <Title title="Features" des="What I Do" />

            <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20'>
                <Card 
                    icon= {<AiFillAppstore />}
                    title="Web Development"
                    des="
                    Development of web applications with React.Js, Angular.Js, Laravel, MySQL, HTML5,
                    JavaScript, Tailwind CSS and BootsTrap."
                />

                <Card
                    icon={<BsFiletypeJson />}
                    title="JSON Queries"
                    des="Creation, manipulation, formatting, analysis and integration of advanced queries that
                    require to be written in JSON language."
                />

                <Card
                    icon={<TbApi />}
                    title="API Manipulation"
                    des="Content creation with various APIs, including GIPHY, PokéAPI, Rick and Morty API and
                    Breaking Bad Quotes API, using React.JS, Angular.JS and Laravel"
                />

                <Card
                    icon={<BsFiletypeSql />}
                    title="SQL"
                    des="Management of database managers such as MySQL, PostgreSQL, PHPMyAdmin,
                    both for queries and for data integration."
                />

                <Card
                    icon={<BsFiletypePhp />}
                    title="PHP"
                    des="Solid knowledge of the PHP language, for advanced code creation and development
                    of specific applications or programs."
                />

                <Card
                    icon={<BsGithub />}
                    title="GitHub"
                    des="Repository creation, teamwork and high understanding
                    in your commands such as git push, pull, branch, etc..."
                />
            </div>
        </section>
    )
}

export default Features