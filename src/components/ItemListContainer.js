import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { db } from '../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';

const getPlantas = (categoria) => new Promise((resolve, reject) => {
  let productoCollection = null


  if (categoria) {
    productoCollection = query(collection(db, "productos"), where("category", "==", categoria))
  } else {
    productoCollection = collection(db,"productos");
  }

  getDocs(productoCollection)
  .then(resultado => {
    console.log(resultado)
    const lista = resultado.docs.map(doc => {
      return{
        id: doc.id,
        ...doc.data(),
      }
    })
    resolve(lista)
  })
});

const ItemListContainer = () => {
  const [plantas, setPlantas] = useState([]);
  let { id } = useParams()

  useEffect(() => {
    getPlantas(id).then((data) => {
      setPlantas(data);
    }).catch(() => {
      console.log('no paso');
    })
  }, [id])
  return (
    <>
    <ItemList plantas={plantas} />
  </>  
  );
}
export default ItemListContainer;