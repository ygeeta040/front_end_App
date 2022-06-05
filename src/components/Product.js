import React from 'react'
import img4 from '../images/pro1.jpg';

const Product = () => {
  return (
    <div> 
    <img src={img4} alt='product'/>
   <div className='text-center'>
   <h2 className=' text-lg font-bold py-2'>Havana Special</h2>
    <span className='bg-gray-200 py-1 rounded-full text-sm px-4'>Small</span>
   </div>
    <div className='flex justify-between items-center mt-4'>
        <span className='font-bold'>₹ 500</span>
        <button className='bg-orange-500 py-1 px-4 rounded-full font-bold '>ADD</button>
    </div>
</div>
  )
}

export default Product;