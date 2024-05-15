import React from 'react';

const TopProducts = ({ products, handleCart }) => {
  return (
    <div id='products'>
      <div className='flex justify-center items-center flex-col'>
        <h1 className='mt-[10vh] font-semibold lg:text-[28px] sm:text-[17px]'>Find Exactly What you Need</h1>
        <hr className='w-[60px] bg-blue-500 h-1 my-1 mb-[100px]' />
      </div>
      <div className='grid lg:grid-cols-4 mx-6 md:grid-cols-3 sm:grid-cols-2 mb-4'>
        {products.map(product => (
          <div key={product.id} className='mb-3 mx-2'>
            <div className='bg-slate-400 h-[300px] rounded flex justify-center items-center relative'>
              <img src={product.img} alt={product.name} className='w-[200px]' />
              {product.onSale && (
                <button className='absolute top-[10px] left-[70%] bg-green-600 p-1 px-2 text-[14px] text-white'>On Sale</button>
              )}
            </div>
            <div className='mt-2'>
              <p className='text-[14px]'>{product.name}</p>
              <h3 className='font-bold mt-1 text-[19px]'>{`Rs.${product.price}`}</h3>
             
                {product.inCart ? (  <button
                onClick={() => handleCart(product.id)}
                className='bg-red-500 py-2 px-3 my-2 text-white rounded hover:bg-red-600'
              >Remove from Cart  </button>):  (<button
              onClick={() => handleCart(product.id)}
              className='bg-sky-600 py-2 px-3 my-2 text-white rounded hover:bg-sky-700'
            > Add Cart</button>)  }
              
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopProducts;
