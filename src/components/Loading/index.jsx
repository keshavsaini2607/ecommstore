import React from 'react'
import loader from '../../assets/cartloader.gif';

const Loading = () => {
  return (
    <div className='w-[100vw] h-[100vh] flex items-center justify-center'>
        <img 
            src={loader}
            alt="loader"
        />
    </div>
  )
}

export default Loading