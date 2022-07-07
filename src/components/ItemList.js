import React, { useEffect, useState } from "react";
import Item from "./Item";
import plantas from '../plantas.json'

const promesas = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(plantas);
  }, 2000);
});

const ItemList = () =>{
  const [plantas, setPlantas] = useState([]);

  useEffect(() => {
    promesas.then((data) => {
      setPlantas(data);
    }).catch(() => {
      console.log('no paso');
    })
  }, [])

  return(
    <div style={{ 
      display: 'flex'
    }}>
      {plantas.map((planta)=>(
        <Item key={planta.id} {...planta} />
      ))}
    </div>
  )
}
export default ItemList