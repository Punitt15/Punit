'use client'
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
const Projects = ({ theme }) => {
    const MotionImage = motion(Image);

    const rotateAnimation = {
        rotate: [0,
            90, 90, 90, 90,
            180, 180, 180, 180,
            270, 270, 270, 270,
            360, 360, 360, 360
        ],
        transition: {
            duration: 5,
            repeat: Infinity,
            ease: "linear",
        },
    };

    const projects = [
        {
            project_name: 'Recovr',
            description: `Developed and deployed Recovr, comprising two distinct web applications: a gym member management
                portal and a content management system (CMS) for fitness resources. Designed rolebased
                access control for Coach, Studio Manager, and Gym Owner within the portal, and implemented
                a robust CMS allowing users to add, edit, and delete fitness content (e.g., accessories, exercises, workouts),
                with seamless multimedia integration (images, videos) stored in AWS S3. Conducted extensive
                unit and integration testing using Jest to ensure functionality, reliability, and scalability. Documented
                the architecture, APIs, and workflows comprehensively to streamline onboarding and maintenance.
                Delivering a cohesive solution tailored to the fitness industry’s needs.`,
            image: '/recovr.jpg',
            tech_stack: ['Reactjs', 'Nodejs', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Redux', 'AWS S3'],
            link: 'https://retention.recovr.com/'
        },
        {
            project_name: 'Archi City',
            description: `Designed and developed the Archi City website,
                incorporating functionalities for various user types into a unified login interface. Managed the storage
                and retrieval of over 200+ product images from AWS. Additionally, communicated and collaborated
                effectively with Japanese clients, ensuring precise execution of project requirements and successful
                implementation.`,
            image: '/archi-city.jpg',
            tech_stack: ['Reactjs', 'Nodejs', 'Prime React', 'JavaScript', 'MySQL', 'Redux', 'AWS S3', 'Sass'],
            link: ''
        },
        {
            project_name: 'Easy Referencing',
            description: `Designed and developed the Easy Referencing website using React.Js, Redux-Saga, and Sass to
                ensure a smooth user experience for referencing tasks. Seamlessly integrated Google Ads to boost
                revenue without compromising the user-friendly interface. 100+ students use this as paid customers.`,
            image: '/easy-referencing.jpg',
            tech_stack: ['Reactjs', 'Nodejs', 'AdSense', 'JavaScript', 'MongoDB', 'Redux-SAGA', 'Sass'],
            link: 'https://easyreferencing.com/#/live'
        },
        {
            project_name: 'Employee Management System',
            description: `Designed and developed the Employee Management System, a user-friendly dashboard with features 
                like HRApp, Project Activity, Personal Activity, Support Tickets, Leave and WFH management, serving over 
                500 employees. Also, introduced a Dark/Light theme option for users, enhancing the user experience for 90 
                percentage of active users.`,
            image: '/ems.jpg',
            tech_stack: ['Reactjs', 'Nodejs', 'Bootstrap', 'Prime-React', 'JavaScript', 'MySQL', 'Redux', 'Sass'],
            link: ''
        },
    ]

    return (
        <motion.section
            id="projects"
            initial={{ width: 'fit-content' }}
            whileInView={{ width: "100%" }}
            className='flex justify-center rounded-3xl bg-[#ADFF26] my-40'>
            <div className='w-full rounded-3xl md:max-w-[1140px] 2xl:max-w-[1440px] bg-[#ADFF26] p-8 pb-16 flex flex-col gap-10'>
                <div className='flex items-center justify-between'>
                    <div className={cn("text-black")}>
                        <motion.h1
                            initial={{ x: -25, opacity: 0 }} whileInView={{ x: 0, opacity: 1 }} viewport={{ amount: 0.5 }} className='text-4xl md:text-6xl 2xl:text-8xl font-black'>PROJECTS</motion.h1>
                        <motion.p initial={{ y: 25, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }} viewport={{ amount: 0.5 }} className='text-sm 2xl:text-xl'>
                            Here are the few selected works.
                        </motion.p>
                    </div>
                    <MotionImage
                        className="size-20 md:size-32 2xl:size-48"
                        whileInView={rotateAnimation}
                        viewport={{ amount: 0.5 }}
                        src={"/shine.svg"} width={200} height={200} alt="shine" />
                </div>
                <div className='flex flex-col gap-20'>
                    {projects.length > 0 && projects.map((project, i) => {
                        const even = i % 2 === 0
                        return (
                            <div key={i} className={cn('flex flex-col justify-center items-center md:flex-row gap-6 2xl:gap-14', even ? 'md:flex-row' : 'md:flex-row-reverse')}>
                                <MotionImage initial={{ x: -25, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    src={`${project?.image}`}
                                    width={600} height={600}
                                    alt="p1"
                                    className='rounded-2xl object-cover aspect-video cursor-pointer' />
                                <motion.div
                                    initial={{ x: 25, opacity: 0 }}
                                    whileInView={{ x: 0, opacity: 1 }}
                                    className='flex flex-col gap-4' >
                                    <h2 className={cn('font-semibold text-2xl 2xl:text-4xl text-black', even ? 'md:text-left' : 'md:text-right')}> {project?.project_name}</h2>
                                    <p className='text-gray-700 text-sm 2xl:text-base'>{project?.description}</p>
                                    <div className={cn('flex gap-2 flex-row-reverse  justify-between', even ? 'md:flex-row ' : 'md:flex-row-reverse')} >
                                        <Link href={project?.link} className='bg-black text-white rounded-full h-fit p-2 hover:scale-110 transition-all'>
                                            <ArrowUpRight size={34} className={cn("md:size-7 2xl:size-9", even ? 'md:-rotate-90' : 'md:rotate-270')} />
                                        </Link>
                                        <div className={cn('flex flex-wrap items-center gap-2 ', even ? 'md:justify-end ' : 'md:justify-start')}>
                                            {project?.tech_stack?.map((tech, i) => <span key={i} className='py-0.5 2xl:py-1 px-1 2xl:px-2 hover:shadow-xl hover:scale-110 transition-all hover:bg-slate-100 border border-gray-900 hover:border-transparent text-gray-800 hover:text-gray-950 cursor-pointer rounded-full text-sm 2xl:text-base'>{tech}</span>)}
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        )
                    })}
                </div>
            </div >
        </motion.section >
    )
}

export default Projects;