import React from "react";
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Swal from'sweetalert2'
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const getItem = (id) => (new Promise((resolve, reject) => {
  const productoCollection = doc(db, 'productos', id);
  getDoc(productoCollection)
  .then(resultado => {
    const data = resultado.data()
    resolve({
      id: resultado.id,
      ...data
    })
  })
}));

const ItemDetailContainer = () => {
  const [planta, setPlanta] = useState(null);
  let { id } = useParams();

  useEffect(() => {
    getItem(id).then((data) => {
      setPlanta(data);
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        text: 'No ingreso!', 
      })
    })
  }, [id]);

  return(
    <>
      {planta ? (
        <ItemDetail {...planta } />
      ) : (
        <LoadingSpinner />
      )}
    </>
  )   
}

export default ItemDetailContainer