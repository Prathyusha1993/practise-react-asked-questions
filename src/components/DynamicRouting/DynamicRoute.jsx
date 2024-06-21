import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Home'
import UserProfile from './UserProfile'

const DynamicRoute = () => {
  return (
    <div>
        <h2>DynamicRoute</h2>
        <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/user/:id' element={<UserProfile />} />
        </Routes>
        </BrowserRouter>
    </div>
  )
}

export default DynamicRoute