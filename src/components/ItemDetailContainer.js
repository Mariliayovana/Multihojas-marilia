import React from "react";
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'
import plantas from '../plantas.json'
import { useParams } from "react-router-dom";

const getItem = (id) => (new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(plantas[id]);
  }, 2000);
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