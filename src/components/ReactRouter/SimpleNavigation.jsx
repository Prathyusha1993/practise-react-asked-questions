import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blog from './Blog';
import NoPage from './NoPage';

const SimpleNavigation = () => {
  return (
    <div>
        <h4>Simple Navigation using React Router</h4>
        <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='*' element={<NoPage />} />
        </Routes>
        </BrowserRouter>
    </div>  
  )
}

export default SimpleNavigation;