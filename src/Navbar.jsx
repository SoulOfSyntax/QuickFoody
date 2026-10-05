import React from 'react'

const Navbar = () => {
  return (
    
        <div className='flex justify-center align-center items-center left-1/2  shadow-lg z-10 py-2 fixed bg-black/60 text-white backdrop-blur-md translate-x-[-50%] top-[20px] rounded-full'>
        <ul className='flex gap-16 px-6 cursor-pointer'>
            <li className='hover:bg-black/40 hover:rounded-full p-2'><span>Home</span></li>
            <li className='hover:bg-black/40 hover:rounded-full p-2'><span>Categories</span></li>
            <li className='hover:bg-black/40 hover:rounded-full p-2'><span>Explore</span></li>
            <li className='hover:bg-black/40 hover:rounded-full p-2'><span>About</span></li>
        </ul>
    </div>
    
    
  )
}

export default Navbar