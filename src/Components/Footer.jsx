import React from 'react'

const Footer = () => {
  return (
    <footer className='lg:flex bg-sky-900 justify-center items-center mt-[50px] md:pl-[40px] sm:block'>
        <div className='my-[50px] flex flex-col justify-center items-center'>
            <h2 className='text-2xl text-white font-bold mb-4'>Apparel</h2>
            <p className='text-slate-400'>We create the possibilities <br /> for the connected world. <br /><p className='font-bold text-white'>Be Bold.</p></p>
        </div>
        <div className='grid lg:grid-cols-4 mx-[150px] justify-center items-center text-gray-400 md:grid-cols-2  sm:grid-cols-2'>
            <div className='mx-[20px] mb-[20px]'>
                <p className='font-bold text-white'>Explore</p>
                <p>Home</p>
                <p>About</p>
                <p>Contact</p>
            </div>
            <div className='mx-[20px] mb-[20px]'>
                <p className='font-bold text-white'>Visit</p>
                <p>E-sans</p>
                <p>californiya</p>
                <p>USA , +321 423</p>
            </div>
            <div className='mx-[20px] mb-[20px]'>
                <p className='font-bold text-white'>Follow</p>
                <p>Instagram</p>
                <p>Twitter</p>
                <p>LinkledIn</p>
            </div>
            <div className='mx-[20px] mb-[20px]'>
                <p className='font-bold text-white'>Legal</p>
                <p>Terms</p>
                <p>Privacy</p>
                <p>Privacy</p>
                
            </div>
        </div>
    </footer>
  )
}

export default Footer