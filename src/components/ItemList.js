import React, { useEffect, useState } from "react";
import Item from "./Item";

const plantas = [
  {name:'Bonsái', id:0, description:'La palabra bonsái es de origen japonés que significa “plantado en una maceta poca profunda”, la terminología “Bon” que expresa “plato” o “tazón” y “Sai” que significa “plantada”.', price:12, pictureUrl:'bonsái.jpeg' },
  {name:'Helecho', id:1, description:'Se dice que los helechos son la planta más antigua sobre la tierra y a diferencia de otras plantas y son plantas perennes sin semilla, conocidas como Pteridofitos.', price:35, pictureUrl:'helecho.jpeg' },
  {name:'Medinilla', id:2, description:' La medinilla magnífica es una planta poco conocida, pero de espectacular imagen, que destaca por sus grandes hojas de vivo verde .', price:24, pictureUrl:'medinilla.jpeg' },
  {name:'Violeta', id:3, description:'Las violetas son plantas herbáceas, de la familia de las violáceas, con entre 525 y 600 especies.​​ La mayoría de las especies estan en hemisferio norte.', price:28, pictureUrl:'violeta.jpeg' },
  {name:'Cactus', id:4, description:'Los cactus tienen espinas que salen de una especie de grano, donde crecerá la flor. Las plantas que tienen hojas carnosas y que no tienen espinas o que tienen.', price:18, pictureUrl:'cactus.jpeg' },
  {name:'Bromelia', id:5, description:'Bromelia es un género tropical americano de plantas de la familia Bromeliaceae, aunque comúnmente se llama con el mismo nombre a plantas de otros géneros .', price:40, pictureUrl:'bromelia.jpeg' },
  
]
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
    <>
      {plantas.map((planta)=>(
        <Item key={planta.id} {...planta} />
      ))}
    </>
  )
}
export default ItemList