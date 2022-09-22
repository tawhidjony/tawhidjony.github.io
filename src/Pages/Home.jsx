import React from 'react'
import bgHome from '../assets/images/home_bg.png'
import Layouts from '../Components/Layouts'
const Home = () => {
    return (
        <Layouts>
            <div className='h-full relative top-0 left-0'>
                <div className='container mx-auto h-full z-50 justify-start items-stretch flex flex-col md:flex-row'>
                    <div className='md:w-3/6 w-full mt-24 md:mt-36 space-y-4 md:p-0 p-4'>
                        <div className='space-y-1'>
                            <h2 className='text-base font-semibold'>Hi i am </h2>
                            <h2 className='text-xl font-extrabold md:text-2xl md:font-bold'>Rayhan Dall</h2>
                        </div>
                        <h2 className='md:text-4xl text-xl font-extrabold md:mt-4 capitalize'>I build web app application </h2>
                        <div className='space-x-6 mt-4 md:mt-0'>
                            <button className='py-1 px-2 md:px-3 md:py-2 rounded bg-green-500 md:text-lg font-normal text-white hover:bg-green-600 shadow drop-shadow-text-lg'>Hire Me</button>
                            <button className='py-1 px-2 md:px-3 md:py-2 rounded bg-green-500 md:text-lg font-normal text-white hover:bg-green-600 shadow drop-shadow-2xl'>Contact us</button>
                        </div>
                    </div>
                    <div className='w-3/6 hidden md:block'>
                        <div className='h-52 w-52  border-2 border-green-500 rounded-full mt-44'></div>
                    </div>
                </div>
                <div className='absolute z-40' style={{
                    backgroundImage: `url('${bgHome}')`,
                    backgroundRepeat: 'no-repeat',
                    bottom: 0,
                    left: 0,
                    height: '425px',
                    width: '100%',
                }}>
                </div>
            </div>
        </Layouts>
    )
}

export default Home
