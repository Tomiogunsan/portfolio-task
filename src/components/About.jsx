import React from 'react'


function About () {
    return(
        <div name='about' className='w-full h-screen bg-gradient-to-r from-indigo-900 to-cyan-900 text-white'>
            
            {/* container */}
            <div className='max-w-[1000px] w-full '>
            <div className=' px-4 md:text-center py-8'>
               <p className=' text-4xl font-bold inline border-b-4 border-pink-600'>About</p> 
            </div>

            <div className=' w-full grid sm:grid-cols-2 gap-8 px-4 '>
                <div className='sm:text-right md:text-5xl text-4xl font-bold '>
                <p>Hi. I'm Tomi, nice to meet you. Please take a look around</p>
                </div>

                <div>
                    <p> I'm a versatile front-end developer passionate about technology. I've been developing and working on projects with my skills in Javascript programming using framework such as React. I'm curious about technology, passionate about solving problems and enjoy learning new skills. When i'm not coding, i'm probably hanging out with my husband, being entertained by our amazing 1 year old little boy.</p>
                </div>

            </div>
            </div>
        </div>
    )
}


export default About