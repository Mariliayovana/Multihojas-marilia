import React, { useState } from 'react';
import Swal from 'sweetalert2';

const  ItemCount = ({stock, initial, onAdd}) => {
  const [contador, setContador] = useState(Number(initial));

  const handleAumentar = () => {
    if (contador < Number(stock)) {
      setContador(contador + 1)
    }
  }

  const handleDescontar = () => {
    if (contador > 0) {
      setContador(contador - 1)
    }
  }

  const handleAgregar = () => {
    if (contador > 0) {
      onAdd(contador)
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Por favor, agrega al menos 1 producto.',
      })
    }
  }
  return(
    <>
    <div></div>
    <div>{contador}</div>
        <button onClick={handleAumentar}>Mas +</button>
        <button onClick={handleDescontar}>Menos -</button>
        <button onClick={handleAgregar}>Agregar al carrito</button>
    </>
  )
}

export default ItemCount
