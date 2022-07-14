import { Paper, Typography } from "@mui/material";
import React, {useState} from "react";
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';

const ItemDetail = ({name, description, price, pictureUrl}) => {
  const [muestraCompra, setMuestraCompra] = useState(false)
  const [cantidadCompra, setCantidadCompra] = useState(0)

  const handleComprar = (contador) => {
    setCantidadCompra(contador)
    setMuestraCompra(true)
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
          <ItemCount initial={0} stock={4} onAdd={handleComprar}/>
    )}
        </div>
      </Paper> 
    );
  }
  export default ItemDetail