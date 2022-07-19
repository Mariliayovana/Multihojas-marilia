import React, { createContext, useState } from "react";

export const CartContext = createContext();
const {Provider} = CartContext;

const CartProvider = ({ children}) => {
  const [productos, setProductos] = useState([]);

  const addProducto = (newProducto) => {
    console.log(newProducto)
    setProductos([...productos, newProducto])
  }
  const removeProducto = (id) => {
    const newProductos = productos.filter(p => p.id !== id)
    setProductos(newProductos)
  }

  const resetLista = () =>{
    setProductos([]);
  }
  const IsInLista =(id) => {
    const producto = productos.find(p => p.id === id)
    return producto !== undefined
  }
  return(
    <Provider value={{productos, addProducto, removeProducto, resetLista, IsInLista }}>
      {children}
    </Provider>
  )
}
export default CartProvider