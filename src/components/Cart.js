import React, { useContext } from "react";
import { CartContext } from "./CartContext";

const Cart = () =>{
  const {productos}= useContext(CartContext)
  console.log(productos)
  return (
    <div>{productos.map((p) =>(<p>{p.name}</p>))}</div>
  )
}
export default Cart