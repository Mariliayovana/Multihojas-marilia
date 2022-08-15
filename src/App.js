import React from 'react';
import NavBar from './components/NavBar/NavBar.js';
import ItemListContainer from './components/ItemList/ItemListContainer.js';
import ItemDetailContainer from './components/ItemDetail/ItemDetailContainer.js';
import Cart from './components/Cart/Cart.js';
import CartProvider from './contexts/CartContext.js';

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

