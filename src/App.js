import React from 'react';
import NavBar from './components/NavBar.js';
import ItemListContainer from './components/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetailContainer.js';
import Cart from './components/Cart.js';
import CartProvider from './components/CartContext.js';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';

const App = () => {
  return (
  <BrowserRouter>
    <CartProvider>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/category/:id' element={<ItemListContainer/>} />
        <Route path='/item/:id' element={<ItemDetailContainer/>} />
        <Route path='/Cart' element={<Cart/>} />
      </Routes>
    </CartProvider>
  </BrowserRouter>
  );
}

export default App;

