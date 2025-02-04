import React, { useState } from 'react'
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'

const Navbar = () => {

    const [nav,setNav] = useState(false)

    const handleNav = () => {
        setNav(!nav)
    }


  return (
    <div className='flex justify-between items-center h-24 max-w-[1040px] mx-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#00df9a]'>REACT.</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'>Home</li>
        <li className='p-4'>Company</li>
        <li className='p-4'>Resources</li>
        <li className='p-4'>About</li>
        <li className='p-4'>Contact</li>
      </ul>

      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        
      </div>

      <div className={!nav ? 'fixed left-0 top-0 w-[60%] ease-in-out duration-500 bg-[#000300] h-full border-r border-r-gray-900' : 'fixed left-[-100%]' }>
      <h1 className='w-full text-3xl font-bold text-[#00df9a] m-4 mt-8'>REACT.</h1>
        <ul className='pt-4 uppercase'>
        <li className='p-4 border-b border-b-gray-900'>Home</li>
        <li className='p-4 border-b border-b-gray-900'>Company</li>
        <li className='p-4 border-b border-b-gray-900'>Resources</li>
        <li className='p-4 border-b border-b-gray-900'>About</li>
        <li className='p-4 border-b border-b-gray-900'>Contact</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
