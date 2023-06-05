import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Cart from './pages/Cart/Cart';
import Checkout from './pages/Checkout/Checkout';
import ProductDetail from './pages/ProductDetail/ProductDetail';
import ProductList from './pages/ProductList/ProductList';
import Signup from './pages/Signup/Signup';
import Container from './Container';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Container />}>
          <Route path="/" element={<Main />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/product" element={<ProductDetail />} />
          <Route path="/productlist" element={<ProductList />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
