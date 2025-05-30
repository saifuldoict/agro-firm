import React from 'react'
import ProductCard from './ProductCard'
import { useAppContext } from '../context/AppContext'

const BestSellers = () => {
  const {products} = useAppContext()
  return (
    <div className='mt-16 '>
        <p className='text-2xl md:text-3xl font-medium'>সর্বাধিক বিক্রীত পণ্য</p>
        
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3  lg:grid-cols-6 gap-6 mt-6   '>
          {products.filter((product)=>product.inStock).slice(0,6).map((product,index)=>(
            <ProductCard key={(index)} product={product}/>
          ))}
 
        </div>
    </div>
  )
}

export default BestSellers