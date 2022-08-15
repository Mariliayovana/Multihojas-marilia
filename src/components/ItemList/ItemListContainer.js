import React, { useEffect, useState } from 'react';
import ItemList from './ItemList';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useParams } from 'react-router-dom';
import Swal from'sweetalert2'
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const getPlantas = (categoria) => new Promise((resolve, reject) => {
  let productoCollection = null

  if (categoria) {
    productoCollection = query(collection(db, "productos"), where("category", "==", categoria))
  } else {
    productoCollection = collection(db,"productos");
  };

  getDocs(productoCollection)
  .then(resultado => {
    const lista = resultado.docs.map(doc => {
      return{
        id: doc.id,
        ...doc.data(),
      }
    });
    resolve(lista)
  })
});

const ItemListContainer = () => {
  const [plantas, setPlantas] = useState([]);
  const [loading, setLoading] = useState(true);
  let { id } = useParams()

  useEffect(() => {
    getPlantas(id).then((data) => {
      setPlantas(data);
      setLoading(false)
    }).catch(() => {
      Swal.fire({
        icon: 'error',
        text: 'No ingreso!', 
      })
      setLoading(false)
    })
  }, [id])

  return (
    <>
      {loading
        ? <LoadingSpinner />
        : <ItemList plantas={plantas} />
      }
    </>
  );
}

export default ItemListContainer;
