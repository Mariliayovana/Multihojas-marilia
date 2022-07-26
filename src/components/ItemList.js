import React from "react";
import Item from "./Item";

const ItemList = ({ plantas }) =>{
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