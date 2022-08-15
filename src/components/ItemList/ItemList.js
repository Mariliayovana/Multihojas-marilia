import { Box } from "@mui/material";
import React from "react";
import Item from "./Item";

const ItemList = ({ plantas }) =>{
  return(
    <Box sx={{ 
      display: 'flex',
      flexWrap: 'wrap',
      padding: '20px',
    }}>
      {plantas.map((planta)=>(
        <Item key={planta.id} {...planta} />
      ))}
    </Box>
  )
};

export default ItemList