import React, {useState} from 'react';
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';

const Resume = () => {

    const [educationData, setEducationData] = useState(true);
    const [skillData, setSkillData] = useState(false);

    return (
        <section id='resume' className='w-full py-20 border-b-[1px] border-black'>
            <div className='flex justify-center items-center text-center'>
                <Title
                    title="+4 Años de Experiencia"
                    des="Mi resumen"
                />
            </div>

            <div>
                <ul className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 justify-center items-center'>
                    <li 
                        onClick={() => 
                            setEducationData(true) &
                            setSkillData(false)
                        } 

                        className={`${
                            educationData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi`}
                    >
                        Educación
                    </li>
                    
                    <li
                        onClick={() =>
                            setEducationData(false) &
                            setSkillData(true)
                        }
                        
                        className={`${
                            skillData ? "border-designColor rounded-lg" : "border-transparent"
                        } resumeLi`}
                    >
                        Habilidades
                    </li>
                </ul>
            </div>
            
            { educationData && <Education /> }
            { skillData && <Skills /> }
        </section>
    )
}

export default Resume