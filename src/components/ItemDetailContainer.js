import React from "react";
import { useState, useEffect} from 'react';
import ItemDetail from './ItemDetail'
import plantas from '../plantas.json'

const getItem = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(plantas[0]);
  }, 2000);
});

const ItemDetailContainer = () => {
  const [planta, setPlanta] = useState({});

  useEffect(() => {
    getItem.then((data) => {
      setPlanta(data);
    }).catch(() => {
      console.log('no paso');
    })
  }, []);

  return(
    <ItemDetail {...planta} />
  )   
}
export default ItemDetailContainer