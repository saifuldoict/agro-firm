import React from 'react'
import { categories } from '../assets/assets.js'
import {useNavigate} from 'react-router-dom'


const Categories = () => {
    const navigate = useNavigate()
  return (
    <div className='mt-16 '>
        <h1 className='text-2xl md:text-3xl font-medium'>আমাদের পণ্য তালিকা</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 mt-6 gap-3 '>
           {
            categories.map((category, index)=>(
                
               <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center'
               style={{backgroundColor:category.bgColor}}
               onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`)
                scrollTo(0,0)
               }}
               >
                <img src={category.image} className='group hover:scale-108 transition max-w-[100%] h-50 rounded-2xl'/>
                
                <p className='text-sm font-medium hover:text-amber-600 font-bold'>{category.text}</p>
            </div> 
            ))
           }
            
        </div>
    </div>
  )
}

export default Categories