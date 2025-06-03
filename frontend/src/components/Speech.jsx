import React from 'react'
import { speech } from '../assets/assets.js'
import {useNavigate} from 'react-router-dom'


const Speech = () => {
    const navigate = useNavigate()
  return (
    <div className='mt-20 w-58'>
        
        <div className='flex-row justify-center items-center  '>
           {
            speech.map((category, index)=>(
                
               <div key={index} className='group cursor-pointer py-5 px-3 gap-2 rounded-lg flex flex-col justify-center items-center '
               style={{backgroundColor:category.bgColor}}
               onClick={()=>{
                navigate(`/products/${category.path.toLowerCase()}`)
                scrollTo(0,0)
               }}
               >
              
                    <h1 className='bg-green-400 w-full text-center text-white p-2'>{category.post}</h1>
                  <img src={category.image} className='group hover:scale-108 transition max-w-[100%] h-50 rounded-2xl'/>
                  <h2>{category.name}</h2>
                  
                  <p className='text-sm font-medium hover:text-amber-600 font-bold'>{category.text}</p>
                  <button onClick={()=>navigate('/')}  className='bg-primary text-white p-3 rounded-2xl w-full  hover:bg-primary/80'>details</button>
                
            </div> 
            
            ))
           }
            
        </div>
    </div>
  )
}

export default Speech