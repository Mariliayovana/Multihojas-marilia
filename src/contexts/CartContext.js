import React, { createContext, useState } from "react";

export const CartContext = createContext();
const {Provider} = CartContext;

const CartProvider = ({ children}) => {
  const [productos, setProductos] = useState([]);

  const IsInLista =(id) => {
    const producto = productos.find(p => p.id === id)
    return producto !== undefined
  }

  const addProducto = (newProducto) => {
    if (IsInLista(newProducto.id)) {
      const newProductos = productos.map(p => {
        const newQuantity = p.quantity + newProducto.quantity
        return p.id !== newProducto.id ? p : ({
          ...p,
          quantity: newQuantity > p.stock ? p.stock : newQuantity
        })
      })
      setProductos(newProductos)
    } else {
      setProductos([...productos, newProducto])
    }
  }
  const removeProducto = (id) => {
    const newProductos = productos.filter(p => p.id !== id)
    setProductos(newProductos)
  }

  const resetLista = () =>{
    setProductos([]);
  }

  return(
    <Provider value={{productos, addProducto, removeProducto, resetLista, IsInLista }}>
      {children}
    </Provider>
  )
}
export default CartProvider