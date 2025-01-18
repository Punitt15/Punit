'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { cn } from '@/lib/utils'
const Bio = ({ theme }) => {
    return (
        <section className={cn('flex flex-col items-center overflow-hidden w-full py-16 bg-gradient-to-t from-[#0f0f0f] to-[#454545] text-white', theme === 'dark' ? 'text-black from-[#c7c7c7] to-[#f2f2f2]' : 'text-white from-[#0f0f0f] to-[#454545]')}>
            <div className='w-full md:max-w-[1140px] 2xl:max-w-[1440px] flex flex-col gap-7 md:gap-12 px-4 md:px-0'>
                <motion.h1 initial={{ opacity: 0, y: 100 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className='text-4xl md:text-6xl 2xl:text-8xl font-black'>ME</motion.h1>
                <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }} className='text-sm md:text-base md:font-light 2xl:font-normal 2xl:text-lg'>
                    Software Developer with over 3 years of experience as MERN Stack Developer, eager to leverage technical
                    expertise and problem-solving skills in a dynamic, growth-oriented environment. Seeking a full-time opportunity
                    to contribute to innovative projects and collaborate with talented teams to deliver high-quality
                    software solutions.
                </motion.p>
            </div>
        </section>
    )
}

export default Bio