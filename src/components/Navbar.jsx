import React, {useState} from 'react'
import { Link } from 'react-scroll'
import logo from '../image/logo.jpg'
import { FaBars, FaTimes} from 'react-icons/fa'

function Navbar() {
const [nav, setNav] = useState(false)

const handleNav = () => {
    setNav(!nav)
}

  return (
    <div className='w-full h-[80px] flex justify-between items-center px-4 absolute z-10 text-white'>
      <div>
        <img src={logo} alt='Logo' style={{width: '50px'}}/>
      </div>

      <ul className=' hidden md:flex justify-center items-center'>
        <li>
        <Link  to="home"  smooth={true}  duration={500}>Home</Link>
         </li>
        
        <li>
        <Link  to="about"  smooth={true}  duration={500}>About</Link>
        </li>

      <li>
      <Link  to="skills"  smooth={true}  duration={500}>Skills</Link>
      </li>
        
        <li>
        <Link  to="project"  smooth={true}  duration={500}>Project</Link>
        </li>
        
        <li>
        <Link  to="contact"  smooth={true}  duration={500}>Contact</Link>
        </li>
      </ul>

{/* Hamburger menu */}
      <div onClick={handleNav} className='md:hidden z-10'>
      {!nav ?  <FaBars/>:  <FaTimes/>} 
       </div>

       {/* mobile menu */}
       <ul onClick={handleNav} className={ !nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-pink-600'} >
       <li className='py-4'>
       <Link onClick={handleNav} to="home"  smooth={true}  duration={500}>Home</Link>
       </li>
        
        <li className='py-4'>
        <Link onClick={handleNav} to="about"  smooth={true}  duration={500}>About</Link>
        </li>
        
        <li className='py-4'>
        <Link onClick={handleNav} to="skills"  smooth={true}  duration={500}>Skills</Link>
        </li>
        
        <li className='py-4'>
        <Link onClick={handleNav} to="project"  smooth={true}  duration={500}>Project</Link>
        </li>
        
        <li className='py-4'>
        <Link onClick={handleNav} to="contact"  smooth={true}  duration={500}>Contact</Link>
        </li>
       </ul>
    </div>
  )
}

export default Navbar
