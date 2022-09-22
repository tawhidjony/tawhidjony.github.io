import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Layouts = ({ children }) => {
    const { pathname } = useLocation()
    return (<>
        <header className='bg-white h-[70px] shadow drop-shadow-lg flex'>
            <div className='basis-[20%]'>
                <div className='flex h-[70px] items-center'>
                    <span className='px-6 text-3xl font-extralight'>Tawhidjony</span>
                </div>
            </div>
            <div className='basis-[85%] '>
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