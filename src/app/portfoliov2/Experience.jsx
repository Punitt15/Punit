'use client'
import { motion } from 'framer-motion';

const Experience = () => {
    const experience = [
        {company_name: 'BrightForce Technologies Pvt Ltd', duration: 'Dec 2023 - Present', designation: 'Software Developer'},
        {company_name: 'Plutus Technologies Pvt Ltd', duration: 'Jan 2023 - Nov 2023', designation: 'Software Developer'},
        {company_name: 'ClustTech Innovations Pvt Ltd', duration: 'Dec 2021 - Dec 2022', designation: 'Junior Software Developer'},
    ]
    return (
        <section className='flex md:max-w-[1140px] w-full 2xl:max-w-[1440px] py-40 px-5 md:px-0'>
            <div className='grid md:grid-cols-2 gap-7 md:gap-0 items-center w-full'>
                <motion.h1
                    initial={{ x: -25, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    className='text-4xl md:text-6xl 2xl:text-8xl font-black' >3 YEARS OF EXPERIENCE</motion.h1>
                <div className='flex flex-col gap-7'>
                    {experience.length > 0 && experience.map((company, i) => <motion.div
                        key={i}
                        initial={{ y: -25, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: i * 0.1 }}
                    >
                        <div className='font-bold md:text-lg 2xl:text-2xl'>{company?.company_name}</div>
                        <div className='flex items-center justify-between text-sm md:text-base 2xl:text-xl text-gray-500'>
                            <span>{company?.designation}</span>
                            <span>{company?.duration}</span>
                        </div>
                    </motion.div>)}
                </div>
            </div>
        </section>
    )
}

export default Experience