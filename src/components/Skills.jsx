import React from 'react'
import html from '../image/html.jpg'
import css from '../image/css.jpg'
import tailwind from '../image/tailwind.jpg'
import javascript from '../image/javascript.jpg'
import typescript from '../image/typescript.jpg'
import react from '../image/react.jpg'

function Skills() {
  return (
    <div name='skills' className='w-full h-screen bg-gradient-to-r from-indigo-900 to-cyan-900 text-white'>
     
      {/* content container */}

     <div className='max-w-[1000px] mx-auto px-4 flex flex-col justify-center w-full h-full'>
           <div>
            <p className='text-4xl font-bold inline border-b-4  border-pink-600'>Skills</p>
            <p className='py-4 '> These are the technologies I've worked with</p>
            </div>
        
        {/* grid container */}
        <div className='grid grid-cols-2 w-full h-screen sm:grid-cols-3 gap-4'>
        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={html} alt='html logo' />
            <p className='my-4 text-center'>HTML</p>
        </div>

        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={css} alt='css logo' />
            <p className='my-4 text-center'>CSS</p>
        </div>

        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={tailwind} alt='tailwind logo' />
            <p className='my-4 text-center'>TAILWIND</p>
        </div>

        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={javascript} alt='javascript logo' />
            <p className='my-4 text-center'>JAVASCRIPT</p>
        </div>

        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={typescript} alt='typescript logo' />
            <p className='my-4 text-center'>TYPESCRIPT</p>
        </div>

        <div className='shadow-md shadow-[#001] hover:scale-110 duration-500'>
            <img className='w-20 mx-auto' src={react} alt='react logo' />
            <p className='my-4 text-center'>REACT</p>
        </div>
     </div>
     </div>
    </div>
  )
}

export default Skills
