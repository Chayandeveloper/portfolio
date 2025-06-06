import React from 'react'
import aboutImg from "../assets/about.jpg";
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
      <h1 className='my-20 text-center text-4xl'>About Me</h1>
      <div className='flex flex-wrap'>
        <div className='w-full lg:w-1/2 lg:p-8'>
          <div className='flex items-center justify-center'>
            <img className="rounded-2xl" src={aboutImg} alt="about"></img>
          </div>

        </div>
        <div className='w-full lg:w-1/2'>
          <div className='flex justify-center lg:justify-start'>
            <p className='my-2 max-w-xl py-6'> Detail-oriented AI/ML Intern with a strong focus on developing machine learning models, data
              preprocessing, and algorithm optimization. Skilled in Python, TensorFlow, and data visualization
              techniques, with additional expertise in front-end development and image processing. Passionate about
              uncovering patterns and deriving insights from complex datasets. Proven ability to contribute meaningfully
              to innovative projects, leveraging technical expertise to excel in AI/ML and front-end roles</p>

          </div>
        </div>
      </div>
    </div>

  )
}

export default About
