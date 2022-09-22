import React from 'react'
import { FiMenu } from 'react-icons/fi'
import { Link, useLocation } from 'react-router-dom'

const Layouts = ({ children }) => {
    const { pathname } = useLocation()
    return (<>


        <header className='bg-white md:h-[70px] h-14 shadow drop-shadow-lg flex'>
            <div className='md:basis-[20%]'>
                <div className='flex md:h-[70px] h-14 items-center space-x-4 mx-2'>
                    <span className='md:hidden md:px-6 md:text-3xl md:font-extralight'><FiMenu size={20} className="text-green-600" /></span>
                    <span className='md:px-6 md:text-3xl md:font-extralight text-base font-black'>Tawhidjony</span>
                </div>
            </div>
            <div className='basis-[85%] hidden md:block'>
                <ul className='flex justify-end items-center px-4 h-full space-x-6 uppercase font-medium'>
                    {[
                        { name: 'Home', path: '/' },
                        { name: 'Project', path: '/project' },
                        { name: 'About us', path: '/about' },
                        { name: 'Contact us', path: '/contact' },
                        { name: 'Download Resume', path: '/resume' },
                    ].map((item, index) => (<>
                        <li key={index} className={`${pathname === item.path && 'active'} last:border last:border-green-500  rounded px-3 py-2 `} ><Link to={item.path}>{item.name}</Link></li>
                    </>))}
                </ul>
            </div>

        </header>


        <div className='relative bg-slate-100 h-[calc(100vh-70px)]'>{children}</div>
    </>)
}

export default Layouts