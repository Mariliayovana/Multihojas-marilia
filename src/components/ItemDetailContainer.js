import React from "react";
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'
import plantas from '../plantas.json'
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

const getItem = (id) => (new Promise((resolve, reject) => {
  const productoCollection = doc(db, 'productos', id);
  getDoc(productoCollection)
  .then(resultado => {
    const data = resultado.data()
    resolve(data)
  })
}));

const ItemDetailContainer = () => {
  const [planta, setPlanta] = useState(null);
  let { id } = useParams()

  useEffect(() => {
    getItem(id).then((data) => {
      setPlanta(data);
    }).catch(() => {
      console.log('no paso');
    })
  }, [id]);

  return(
    <>
      {planta && (
        <ItemDetail {...planta } />
      )}
    </>
  )   
}
export default ItemDetailContainer