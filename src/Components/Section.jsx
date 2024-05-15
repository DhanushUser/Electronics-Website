import React from 'react'
import fridge from '../assets/fridge.png'
import speaker from '../assets/speaker.png'
import mobile from '../assets/mobile.png'
import smart from '../assets/smart.png'
import camera from '../assets/camera.png'
import iron from '../assets/iron.png'
import wired from '../assets/wired.png'
import destop from '../assets/destop.png'

const Section = () => {
  return (
    <div id='Section'>
        <div className=' flex justify-center items-center flex-col'>
            <h1 className='mt-[110vh] font-semibold lg:text-[28px] sm:text-[17px]'>Find Exactly What you Need</h1>
            <hr className='w-[60px] bg-blue-500 h-1 my-1'/>
        <div className=' grid lg:grid-cols-6 gap-[20px] my-10 md:grid-cols-4 sm:grid-cols-3'>
            <div className='bg-blue-100 w-[150px]'>
                <img src={fridge} alt="" className='w-[120px] ml-[15px] mt-4'/>
                <div className='flex justify-center my-3'>
                <h4 >Electronics</h4>
                </div>
            </div>
            <div className='bg-blue-100 w-[150px] '>
                <div className='flex flex-col justify-center  mt-[-15px]'>
                    <img src={speaker} alt="" className='w-[100px] ml-[25px] mt-5 '/>
                    <h4 className='ml-[30%] '>Electronics</h4>
                </div>
            </div>
            <div className='bg-blue-100 w-[150px] '>
                <div className='flex flex-col justify-center my-3 '>
                    <img src={mobile} alt="" className='w-[90px]'/>
                    <h4 className='ml-[15%]'>Electronics</h4>
                </div>
            </div>
            <div className='bg-blue-100 w-[150px] '>
                <div className='flex flex-col justify-center my-3 '>
                    <img src={smart} alt="" className='w-[100px]'/>
                    <h4 className='ml-[15%]'>Electronics</h4>
                </div>
            </div>
            <div className='bg-blue-100 w-[150px]'>
                <img src={iron} alt="" className='w-[80px] ml-[35px] mt-4'/>
                <div className='flex justify-center my-3'>
                <h4 >Electronics</h4>
                </div>
            </div>
            <div className='bg-blue-100 w-[150px] '>
                <div className='flex flex-col justify-center my-3 '>
                    <img src={camera} alt="" className='w-[120px] mt-[20%]'/>
                    <h4  className='ml-[10%] mt-[20%]'>Electronics</h4>
                </div>
            </div>
        </div>   
            
        </div>
        <div className='lg:flex mb-[100px] md:flex sm:block  '>
        <div className='lg:w-1/2 md:w-1/2 bg-blue-100 flex lg:mx-6 my-5 l sm:w-full sm:mx-0'>
            <div className='mt-[20%] ml-[10%]'>
                <h2 className='text-[29px] font-bold text-sky-600'>Earbuds</h2>
                <h4 className='font-semibold'>Best Products</h4>
                <button className='bg-sky-600 py-2 px-4 my-3 text-white rounded hover:bg-transparent border hover:border-black hover:text-black transition-[.5s] '>Shop Now</button>
            </div>
            <div className='ml-[10%]'>
                <img src={wired} alt="" className='w-[350px] bg-cover bg-center'/>
            </div>
        </div>
        <div className='lg:w-1/2 md:w-1/2 bg-blue-100 flex lg:mx-6 my-5 sm:w-full sm:mx-0'>
            <div className='mt-[20%] ml-[10%]'>
                <h2 className='text-[29px] font-bold text-sky-600'>Monitor</h2>
                <h4 className='font-semibold'>Flat 30% Off</h4>
                <button className='bg-sky-600 py-2 px-4 my-3 text-white rounded hover:bg-transparent border hover:border-black hover:text-black transition-[.5s] '>Shop Now</button>
            </div>
            <div className='ml-[10%]'>
                <img src={destop} alt="" className='w-[350px]'/>
            </div>
        </div>
        </div>
        
        
    </div>
  )
}

export default Section