import React from 'react'
import bg from '../assets/bg.png'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className="h-screen absolute   w-full bg-gray-200 lg:flex md:flex sm:block bg-cover bg-center mb-10" >
        <div className="lg:w-1/2 mt-24 flex flex-col justify-center items-center md:w-full sm:w-full ">
            <p className='text-gray-700 my-1'>Headphone sale</p>
            <h2 className='text-4xl text-sky-600 my-1 font-bold'>Up to 40% Off</h2>
            <h3 className='text-2xl my-1 font-semibold'>On Headphones</h3>
            <AnchorLink href="#products" offset={50}>  <button className='bg-sky-600 py-2 px-4 my-3 text-white rounded hover:bg-transparent border hover:border-black hover:text-black transition-[.5s] '>Shop Now</button> </AnchorLink>
        </div>
        <div className="lg:w-1/2 mt-24 ml-20 md:w-full sm:w-full sm:items-center sm:ml-36 ">
          <img  src={bg} alt="" className=' md:w-10/12 lg:w-10/12 sm:w-60 '/>
        </div>
    </div>
  )
}

export default Hero