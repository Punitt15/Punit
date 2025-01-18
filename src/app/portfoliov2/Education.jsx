'use client'
import React from 'react'
import { motion } from 'framer-motion';

const Education = () => {
    return (
        <section className='flex w-full md:max-w-[1140px] 2xl:max-w-[1440px] py-40 px-5 md:px-0'>
            <div className='grid md:grid-cols-2 gap-7 md:gap-0 items-center w-full'>
                <motion.h1
                    initial={{ x: -25, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }}
                    className='text-4xl md:text-6xl 2xl:text-8xl font-black'>EDUCATION</motion.h1>
                <div className='flex flex-col gap-7'>
                    {/* {Array.from({ length: 2 }).map((_, i) =>  */}
                    <motion.div
                        key={0}
                        initial={{ y: -25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0 * 0.1 }}
                    >
                        <div className='font-bold md:text-lg 2xl:text-2xl flex gap-1 items-center justify-between'>
                            <span>BTECH - Bachelors of Technology</span>
                            <span className=''>73%</span>
                        </div>
                        <div className='flex gap-1 items-center justify-between text-sm md:text-base 2xl:text-xl text-gray-500'>
                            <span>RTU - Rajasthan Technical University</span>
                            <span>Jun 2017 - Sept 2021</span>
                        </div>
                    </motion.div>
                    {/* )} */}
                </div>
            </div>
        </section>
    )
}

export default Education