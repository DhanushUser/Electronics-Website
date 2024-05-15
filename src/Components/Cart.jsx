import React from 'react';
import Navbar from './Navbar';
import { Link } from 'react-router-dom';

const Cart = ({ cartItems }) => {
  const totalAmount = cartItems.reduce((total, item) => total + item.price, 0);

  return (
    <div id='cart' className='bg-blue-200 lg:h-[50vw] sm:h-screen w-screen fixed top-0 z-[2000]'>
      <Navbar />

      <div className='mt-[10%]'>
        <div className='grid grid-cols-4'>
          {cartItems.length ? cartItems.map(item => (
            <div key={item.id} className='mx-6 bg-gray-400 rounded-[10px] flex flex-col justify-center items-center'>
              <img src={item.img} alt={item.name} className='w-[150px]' />
              <h3 className='my-1 text-[16px] text-white'>{item.name}</h3>
              <h3 className='mb-1 text-[25px] font-bold text-green-950'>{`Rs.${item.price}`}</h3>
            </div>
          )) : <div className='lg:flex lg:flex-col sm:flex-row justify-center relative left-[150%]  items-center '> <h2 className='text-cyan-700 text-4xl my-[10px] font-semibold '>Cart Is Empty !</h2>
             <Link to='/' className='my-4 font-[20px] underline text-blue-700'>Back to Home</Link> </div>
              }
        </div>
      </div>

    {cartItems.length ? <div className='flex justify-center items-center my-10'>
        <h1 className='text-2xl font-bold'>{`Cart Total is: Rs.${totalAmount}`}</h1>
      </div> : <></>}  
    </div>
  );
};

export default Cart;
