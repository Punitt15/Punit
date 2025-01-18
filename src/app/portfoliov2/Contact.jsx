'use client'
import { GitCommitVertical, Github, Globe, Linkedin, Mail, Phone, Play, Twitter } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const Contact = ({ theme }) => {
    return (
        <motion.section id="contact"
            className='px-4 flex w-full md:max-w-[1140px] 2xl:max-w-[1440px] my-20 2xl:py-40'>
            <div className={cn('flex md:h-[500px] 2xl:h-[600px] rounded-xl md:rounded-3xl flex-col gap-14 w-full bg-gradient-to-t from-[#0f0f0f] to-[#454545] text-white p-4 md:p-6 2xl:p-8'
                , theme === 'dark' ? " from-[#0f0f0f] to-[#202020]" : ""
            )}>
                <div className='grid grid-cols-1 md:grid-cols-2 h-full gap-4 md:gap-2'>
                    <div className='flex flex-col justify-between '>
                        <div className='flex flex-col gap-2'>
                            <div className='flex items-center gap-2'>
                                <h2 className='text-2xl md:text-4xl 2xl:text-6xl font-black'>CONNECT WIH ME</h2>
                                <Play className='md:size-8 2xl:size-12 fill-white' />
                            </div>
                            <div className='flex items-center gap-1'>
                                <GitCommitVertical className='md:size-4 2xl:size-8' />
                                <span className='text-xs md:text-sm 2xl:text-lg'>29, Ashish Bhawan, Sindhi Colony, Aburoad - 307026</span>
                                {/* <span className='text-xs md:text-sm 2xl:text-lg'>29, Ashish Bhawan, Sindhi Colony, Aburoad - 307026</span> */}
                            </div>
                        </div>
                        <div className='hidden gap-4 md:flex'>
                            <Link href={`tel:${'+918561022900'}`} target="_blank" rel="noopener noreferrer">
                                <Phone className='md:size-7 2xl:size-9' />
                            </Link>
                            <Link href={`mailto:${'er.punitjoshi15@gmail.com'}`} target="_blank" rel="noopener noreferrer">
                                <Mail className='md:size-7 2xl:size-9' />
                            </Link>
                            <Link href={'https://www.linkedin.com/in/punit-joshi/'} target="_blank" rel="noopener noreferrer">
                                <Linkedin className='md:size-7 2xl:size-9' />
                            </Link>
                            <Link href={'https://github.com/Punitt15'} target="_blank" rel="noopener noreferrer">
                                <Github className='md:size-7 2xl:size-9' />
                            </Link>
                            <Link href={'https://x.com/punit__joshi'} target="_blank" rel="noopener noreferrer">
                                <Twitter className='md:size-7 2xl:size-9' />
                            </Link>
                            <Link href={''} target="_blank" rel="noopener noreferrer">
                                <Globe className='md:size-7 2xl:size-9' />
                            </Link>
                        </div>

                    </div>
                    <div className='overflow-hidden rounded-2xl'>
                        <iframe
                            className="filter grayscale invert w-full h-64 md:h-full"
                            src="https://maps.google.com/maps?hl=en&amp;q=Aburoad&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
                        </iframe>
                    </div>
                    <div className='flex gap-4 md:hidden'>
                        <Link href={`tel:${'+918561022900'}`}>
                            <Phone className='md:size-7 2xl:size-9' />
                        </Link>
                        <Link href={`mailto:${'er.punitjoshi15@gmail.com'}`}>
                            <Mail className='md:size-7 2xl:size-9' />
                        </Link>
                        <Link
                            href={'https://www.linkedin.com/in/punit-joshi/'}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Punit Joshi LinkedIn profile"
                        >
                            <Linkedin className='md:size-7 2xl:size-9' />
                        </Link>
                        <Link href={'https://github.com/Punitt15'}>
                            <Github className='md:size-7 2xl:size-9' />
                        </Link>
                        <Link href={'https://x.com/punit__joshi'}>
                            <Twitter className='md:size-7 2xl:size-9' />
                        </Link>
                        {/* <Link href={'er.punitjoshi15@gmail.com'}>
                            <Globe className='md:size-7 2xl:size-9' />
                        </Link> */}
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact