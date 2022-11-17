import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import Home from './pages/Home';
import Product from './pages/Product';

const App = () => {
  
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/about' element={<AboutUs />} />
        <Route path='/product' element={<Product />} />
      </Routes>
    </Router>
  )
}

export default App