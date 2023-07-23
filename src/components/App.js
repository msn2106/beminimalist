import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Login, ProductDetails, Products, Signup, CheckoutPage } from '../pages'
import Navbar from './Navbar';
import Footer from './Footer';
import './App.css';


const App = () => {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/details/:id' element={<ProductDetails />} />
          <Route path='/products' element={<Products />} />
          <Route path='/checkout' element={<CheckoutPage />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
};

export default App;
