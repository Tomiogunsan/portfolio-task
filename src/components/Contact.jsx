import React from 'react'

function Contact() {
  return (
    <div name='contact' className='w-full h-screen flex justify-center items-center p-4 text-white bg-gradient-to-r from-indigo-900 to-cyan-900'>
    
     {/* form container */}
      <form method='POST' action='https://getform.io/f/3b6c1127-78a4-40cd-b803-e64c55e59805'  className='flex flex-col max-w-[600px] w-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>Contact</p>
            <p className='py-4'>Submit the form below or shoot me an email - tomiafolayan@gmail.com</p>
        </div>

        <input placeholder='Name' type='text' name='name' className='shadow-md p-2 shadow-cyan-600'/>
        <input placeholder='Email' type='email' name='email' className='my-2 p-2  shadow-md shadow-cyan-600 ' />
        <textarea placeholder='Message' name='message' cols='30' rows='10' className=' shadow-md shadow-cyan-600'></textarea>
        <button className='border-2 m-8 p-2 font-bold w-[100px] mx-auto rounded-md bg-gradient-to-r from-pink-700 to-pink-400'>Let's Talk</button>
      </form>
    </div>
  )
}

export default Contact
