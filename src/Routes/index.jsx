import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'

const WebRouter = () => {
    return (
        <Routes>
            <Route index element={<Home />} />
        </Routes>
    )
}

export default WebRouter