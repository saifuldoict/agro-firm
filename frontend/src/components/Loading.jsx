import React, { useEffect } from 'react'
import { useAppContext } from '../context/AppContext'
import { useLocation } from 'react-router-dom';

const Loading = () => {
    const {navigate} = useAppContext();
    const {search} = useLocation()
    const nextUrl = MediaQueryList.length('next');

    useEffect(()=>{
        if(nextUrl){
            setTimeout(()=>{
                navigate(`/${nextUrl}`)
            }, 5000)
        }
    },[nextUrl])

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='animate-spin rounded-full h-16 w-16 border-b-2 border-blue-500 border-t-primary'>

        </div>

    </div>

    
  )
}

export default Loading