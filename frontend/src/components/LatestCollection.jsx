import React, { useContext, useEffect, useState } from 'react'
import {ShopContext} from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const LatestCollection = () => {

const {products}=useContext(ShopContext);

const [latestProducts,setLatestProducts]=useState([]);
useEffect(()=>{
 setLatestProducts(products.slice(0,10))
},[])

  return (
    <div className='my-10 flex flex flex-col justify-center items-center'>
        <div className='text-center py-8 '></div>
        <Title text1={'LATEST'} text2={'COLLECTIONS'}/>
        <div className='mt-4 w-3/4 text-center'>
        <p className='text-xs sm:text-sm md:text-base text-gray-600'>
          Discover the latest additions to our collection, handpicked to bring you the best of style and comfort. Browse through a curated selection of timeless pieces designed to elevate your wardrobe.
        </p>
      </div>

{/* Rendering Products */}
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                 {
                    latestProducts.map((item,index)=>(
                        <ProductItem  key={index} id={item._id} image={item.image} name={item.name} price={item.price}/>
                    ))
                 }
                 </div>
    </div>
  )
}

export default LatestCollection