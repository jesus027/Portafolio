import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
    return (
        <motion.div 
            initial={{opacity:0}} 
            animate={{opacity:1 , transition:{duration:.8}}}
            className='w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20'
        >
            <div className='w-full lgl:w-1/2'>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Habilidades Front-End</h2>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>React Js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-95%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>95%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Angular Js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-75%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[75%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>75%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>JavaScript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-100%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[100%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>100%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Tailwind CSS</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-80%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[80%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>80%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Python</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-60%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[60%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>60%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>TypeScript</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-85%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>85%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
            
            <div className='w-full lgl:w-1/2'>
                <div className='py-12 font-titleFont flex flex-col gap-4'>
                    <p className='text-sm text-designColor tracking-[4px] uppercase'>Features</p>
                    <h2 className='text-3xl lgl:text-4xl font-bold'>Habilidades Back-End</h2>
                </div>

                <div className='w-full flex flex-col gap-6'>
                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Laravel</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-85%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>85%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>SQL</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-90%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>JSON</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-85%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>85%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>API REST</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-90%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>90%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Node.js</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-85%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>85%</span>
                            </motion.span>
                        </span>
                    </div>

                    <div className='overflow-x-hidden'>
                        <p className='text-sm uppercase font-medium'>Docker</p>
                        <span className='w-full h-2 bgOpacity inline-flex rounded-md mt-2'>
                            <motion.span
                                initial={{ x:"-45%" , opacity: 0 }}
                                animate={{ x: 0 , opacity: 1 }}
                                transition={{ duration: 0.5 , delay: 0.5 }}
                                className='w-[45%] h-full bg-gradient-to-r from-blue-600 via-lime-500
                            to-yellow-500 rounded-md relative'
                            >
                                <span className='absolute -top-7 right-0'>45%</span>
                            </motion.span>
                        </span>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

export default Skills