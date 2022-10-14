import React from 'react'
import coin from '../image/coin-tracker.jpg'
import residence from '../image/residence-website.jpg'
import pizza from '../image/pizza.jpg'

function Projects() {

    const project =[
        {
          id: 1,
          src: coin,
          title:'Coin Tracker',
          demo:'https://crypto-tracker-sx1k.vercel.app/',
          code:'https://github.com/Tomiogunsan/crypto-tracker'
        },
        {
          id: 2,
          src: residence,
          title: 'Residence Website',
          demo:'https://residence-website.vercel.app/',
          code: 'https://github.com/Tomiogunsan/residence-website',
        },
        {
          id: 3,
          src: pizza,
          title: 'Pizza Order App',
          demo:'https://monumental-cendol-4ac3d9.netlify.app',
          code:'https://github.com/Tomiogunsan/Pizza-Shop',
        },
        ]
  return (
    <div name='project' className='w-full md:h-screen bg-gradient-to-r from-indigo-900 to-cyan-900 text-white'>
      
      {/* container */}
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full '>
      <div className='pb-8 mt-12'>
        <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Project</p>
        <p className='py-6'>Checkout some of my recent work</p>
    </div>

    <div className='grid md:grid-cols-3 gap-8'>
      {project.map((item) => (
        <div key={item.id} className='shadow-md shadow-[#001] rounded-xl md:h-[300px]'>
          <img src={item.src} alt='/' className=' mx-auto rounded-lg duration-200 hover:scale-105 p-4 '/>
          <p className='text-center font-bold text-xl'>{item.title}</p>
          <div className='flex items-center justify-between'>
            <a href={item.demo} target="_blank" rel="noreferrer">
              <button className='w-[80px] p-2 m-4 rounded-md border-2 border-blue-400'> Demo</button>
            </a>
            <a href={item.code} target="_blank" rel="noreferrer">
              <button className='w-[80px] p-2 m-4 rounded-md border-2 border-blue-400 bg-blue-400 font-bold'>Github</button>
            </a>
          </div>
        </div>
      ))}

    </div>
      </div>
    </div>
  )
}

export default Projects
