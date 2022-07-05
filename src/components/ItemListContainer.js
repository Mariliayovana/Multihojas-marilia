import React from 'react';
import ItemCount from './ItemCount';
import ItemList from './ItemList';

const ItemListContainer = () => {
  return (
    <>
    <ItemList/>
    <ItemCount stock="6" initial="1" onAdd={(contador) => console.log(contador)}/>
  </>  
  );
}
export default ItemListContainer;