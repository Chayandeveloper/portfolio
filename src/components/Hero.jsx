import React from 'react'
import {motion} from "framer-motion";
import img from "../assets/img2.jpg";

const container=(delay)=>({
hidden:{x: -100, opacity:0},
visible:{
    x:0,
    opacity:1,
    transition:{duration:0.5,delay:delay}
},
});
const Hero = () => {
    return (
        <div className='border-b border-neutral-100  pb-4 lg:mb-35'>
            <div className='flex flex-wrap'>
                <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <motion.h1 
                    variants={container(0)}
                    initial="hidden"
                    animate="visible"
                    className='pb-16 text-6xl font-thin  lg:mt-16 lg:text-8xl'>Chayan Biswas</motion.h1>
                    <motion.span  variants={container(0.5)}
                    initial="hidden"
                    animate="visible" className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-3xl tracking-tight text-transparent">FrontEnd Developer

                    </motion.span>
                    <motion.p  variants={container(1)}
                    initial="hidden"
                    animate="visible"
                    className='my-2 max-w-l py-6 text-blue-200 tracking-tighter'>I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.</motion.p>
                </div>
                </div>
                <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex justify-center'>
                    <img src={img} alt="k"></img> 

                </div>
                </div>
            </div>

        </div>
    )
}
  
export default Hero
