import React from 'react'
import { FaGithub, FaLinkedin, FaTwitterSquare} from 'react-icons/fa' 
import homeImage from '../image/home3.jpg'
import Typed from 'react-typed';
import { Link } from 'react-scroll'

function Home () {
    return(
        <div name='home' className='w-full h-screen relative'>
            <img className='w-full h-full object-cover' src={homeImage} alt='A computer' />
            <div className='absolute w-full h-full left-0 top-0 bg-gray-900/40'></div>
            <div className='absolute w-full top-0 h-full flex flex-col justify-center text-center text-white p-4'>
                <h1>Hey, I'm Tomi Ogunsan</h1>
                
                <div className='flex  justify-center items-center py-1'>
                    <p className='font-semibold text-xl '>A </p>
                    <Typed className='font-semibold text-xl px-2' strings={['diligent', 'versatile', 'detailed', 'enthusiastic']} 
                    typeSpeed={120} 
                    backSpeed={140}
                    loop/>
                    <p className=' font-bold text-xl'>Frontend Developer</p>
                </div>

            {/* icons div */}
                <div className='flex py-1 justify-center items-center text-white'>
                   <a href='https://github.com/Tomiogunsan' target="_blank" rel="noreferrer">
                    <FaGithub size={30} className='text-blue-400'/>
                    </a>
                   <a href='https://www.linkedin.com/in/tomi-ogunsan-546320101/' target="_blank" rel="noreferrer">
                    <FaLinkedin size={30} />
                    </a>
                   <a href='https://twitter.com/Pretomia2'target="_blank" rel="noreferrer">
                    <FaTwitterSquare size={30} className='text-pink-600'/>
                    </a>
                </div>
                
                <button className='mx-auto p-2 w-[130px] border bg-gradient-to-r from-pink-700 to-pink-400 text-white rounded-md'>
                    <Link to="project"  smooth={true}  duration={500}>View Project</Link>
                </button>
                
            </div>

        </div>
    )
}


export default Home