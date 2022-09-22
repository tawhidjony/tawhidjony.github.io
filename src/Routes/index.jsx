import React from 'react'
import { Route, Routes } from 'react-router-dom'
import About from '../Pages/About'
import Contact from '../Pages/Contact'
import Home from '../Pages/Home'
import Projects from '../Pages/Projects'
import Resume from '../Pages/Resume'

const WebRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
            <Route path='/project' element={<Projects />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/resume' element={<Resume />} />
        </Routes>
    )
}

export default WebRouter