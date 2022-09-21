import React from 'react'
import bgHome from '../assets/images/home_bg.png'
const Home = () => {
  return (
    <div className='h-full relative top-0 left-0'>

      <div className='container mx-auto md:pt-32 space-y-8'>
        <div className='space-y-1'>
          <h2 className='text-xl font-semibold'>Hi i am </h2>
          <h2 className='text-3xl font-bold'>Rayhan Dall</h2>
        </div>
        <h2 className='text-5xl font-extrabold mt-4 capitalize'>I build web app application </h2>
        <div className='space-x-6'>
          <button className='px-3 py-2 rounded bg-green-500 text-lg font-normal text-slate-800 hover:bg-green-600 shadow drop-shadow-text-lg'>Hire Me</button>
          <button className='px-3 py-2 rounded bg-green-500 text-lg font-normal text-slate-800 hover:bg-green-600 shadow drop-shadow-2xl'>Contact us</button>
        </div>
      </div>


      <div className='absolute' style={{
        backgroundImage: `url('${bgHome}')`,
        backgroundRepeat: 'no-repeat',
        bottom: 0,
        left: 0,
        height: '425px',
        width: '100%',
      }}>
      </div>
    </div>
  )
}

export default Home