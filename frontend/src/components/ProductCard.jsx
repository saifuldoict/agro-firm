import React from 'react'
import { assets } from '../assets/assets'
import { useAppContext } from '../context/AppContext'


const ProductCard = ({product}) => {
    
    const {currency, addToCart,removeFromCart, cartItems, navigate, } = useAppContext()
    
  
  return product &&(
    <div onClick={()=>{navigate(`/products/${product.category.toLowerCase()}/${product._id}`); scrollTo(0,0)}} // redirect to product Details page
    className="border-2 border-amber-500 rounded-md md:px-4 px-3 py-2 bg-white min-w-56 max-w-56 w-full shadow-xl">
            <div className="group cursor-pointer flex items-center justify-center px-0.5 pt-2 ">
                <img className="group-hover:scale-105 transition h-48 rounded-2xl" src={product.image[0]} alt={product.name} />
            </div>
            <div className="text-gray-500/60 text-sm">
                <p>{product.category}</p>
                <p className="text-gray-700 font-medium text-lg truncate w-full">{product.name}</p>
                <div className="flex items-center gap-0.5">
                    {Array(5).fill('').map((_, i) => (
                        
                            <img key={i} className='md:w-2.5 w-3 ' src={i<4 ? assets.star:assets.whiteStar} alt='icon'/>
                        
                    ))}
                    <p>({4})</p>
                </div>
                
                <div className="flex items-end justify-between mt-3">
                    <p className="md:text-xl text-base font-medium text-primary">
                        {currency}{product.offerPrice} {" "} <span className="text-gray-500/60 md:text-sm text-xs line-through">{currency}{product.price}</span>
                    </p>
                    <div onClick={(e)=>{e.stopPropagation();}} className="text-primary">
                        {!cartItems[product._id] ? (
                            <button className="flex items-center justify-center gap-1 bg-green-900 border-2 border-red-700 w-[150px]  h-[34px] rounded text-white font-medium cursor-pointer  transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-orange-800 ..." onClick={() => addToCart(product._id)} >
                                <span className=''>অর্ডার করতে চাই</span>
                                <img className='w-6.5 font-bold' src={assets.rightArrow}/>
                            </button>
                        ) : (
                            <div className="flex items-center justify-center gap-2 md:w-20 w-16 h-[34px] bg-primary/25 rounded select-none">
                                
                                <button onClick={() => {removeFromCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    -
                                    
                                </button>
                               
                                <span className="w-5 text-center text-red-500">{cartItems[product._id]}</span>
                                <button onClick={() => {addToCart(product._id)}} className="cursor-pointer text-md px-2 h-full" >
                                    +
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ProductCard