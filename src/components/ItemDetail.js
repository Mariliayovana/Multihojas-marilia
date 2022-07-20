import { Paper, Typography } from "@mui/material";
import React, {useContext, useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import { CartContext } from "./CartContext"


const ItemDetail = ({name, description, price, pictureUrl, id, stock}) => {
  const [muestraCompra, setMuestraCompra] = useState(false)
  const [cantidadCompra, setCantidadCompra] = useState(0)
  const {addProducto}= useContext(CartContext)

  const handleComprar = (contador) => {
    setCantidadCompra(contador)
    setMuestraCompra(true)
    addProducto({id,name, description, price, pictureUrl, stock, quantity: contador})
  }

    return (
      <Paper elevation={3} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={`/images/${pictureUrl}`} alt={name}/>
        <div>
          <Typography variant="h3">{name}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h5">S/ {price}</Typography>
          {muestraCompra ? (
          <Link to="/cart"><button>Finalizar Compra</button></Link>
    ) : (
          <ItemCount initial={0} stock={stock} onAdd={handleComprar}/>
    )}
        </div>
      </Paper> 
    );
  }
  export default ItemDetail