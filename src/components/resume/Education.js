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
                    <h2 className='text-3xl md:text-4xl font-bold'>Academic Studies</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="University Studies (2018-2023)"
                        subTitle='"José Antonio Anzoátegui" Territorial Polytechnic University'
                        result="17.64/20"
                        des="Graduated as Computer Engineer with the highest grade of the course,
                        with subjects dedicated to programming, professional training and the development of
                        socio-technological projects."
                    />

                    <ResumeCard
                        title="Bachelor (2013-2018)"
                        subTitle='Private Educational Unit "Carlos Soublette"'
                        result="18.80/20"
                        des="Graduated with honors as a Bachelor of Science with the highest grade
                        high in subjects like chemistry, physics and project."
                    />

                    <ResumeCard
                        title="Basic School (2006-2013)"
                        subTitle='State Educational Unit "Aníbal Dominicci"'
                        result="20/20"
                        des="Ggraduated with honors in primary studies with the highest grade
                        High in all subjects."
                    />
                </div>
            </div>
        
            {/*** Experiencia ***/}
            <div>
                <div className='py-6 lgl:py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px]'>2018 - 2022</p>
                    <h2 className='text-3xl md:text-4xl font-bold'>Work Experience</h2>
                </div>

                <div className='mt-6 lgl:mt-8 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex
                flex-col gap-10'>
                    <ResumeCard
                        title="Devdatep Consulting (2022 - 2022)"
                        subTitle="PReact.Js and Tailwind CSS programmer"
                        result="Devdatep"
                        des="Intern responsible for developing and implementing a system of
                        assistance in React.js and Tailwind Css, working with technologies like
                        dependencies for React.js, Axios, Chart.js, FullCalendar, Bootstrap,
                        Github and Gitlab, aimed at efficiency and functionality in the
                        expected results."
                    />

                    <ResumeCard
                        title="React.js and Tailwind CSS course (2022-2022)"
                        subTitle="Course Taken on Udemy"
                        result="Udemy"
                        des="Course done during my internship at Devdatep Consulting,
                        through the Udemy web learning platform."
                    />

                    <ResumeCard
                        title="Automated Enrollment System (2022-2023)"
                        subTitle="Desktop Program (Java/MySQL)"
                        result="Freelancer"
                        des="Design and Development of an automated system, with the language of
                        Java programming, capable of registering students, Generate records of enrolled
                        students and take the attendance of the teachers."
                    />
                </div>
            </div>
        </motion.div>
    )
}

export default Education