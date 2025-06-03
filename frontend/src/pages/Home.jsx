import React from 'react'
import Categories from '../components/Categories'
import BestSellers from '../components/BestSellers'
import MainBanner from '../components/MainBanner'
import BottomBanner from '../components/BottomBanner'
import NewsLetter from '../components/NewsLetter'
import ImageGallery from '../components/ImageGallery'
import Speech from '../components/Speech'


const Home = () => {
  return (
    <div className='mt-10 shadow-2xl w-auto'>
      <MainBanner/>
      <div className='flex flex-row gap-3'>
            
          <div className='basis-2.5/3 '>
            <Categories/>
            <BestSellers/>
            
            
            
          </div>
          <div className=' w-65 bg-gray-100 mt-3 ml-4 '>
            <Speech/>
          </div>
      </div>
      <BottomBanner/>
      <NewsLetter/>
      <ImageGallery/>
    </div>
  )
}

export default Home