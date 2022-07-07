import { Paper, Typography } from "@mui/material";
import React from "react";

const ItemDetail = ({name, description, price, pictureUrl}) => {  
    return (
      <Paper elevation={3} style={{ display: 'flex', alignItems: 'center' }}>
        <img src={`/images/${pictureUrl}`} alt={name}/>
        <div>
          <Typography variant="h3">{name}</Typography>
          <Typography>{description}</Typography>
          <Typography variant="h5">S/ {price}</Typography>
        </div>
      </Paper> 
    );
  }
  export default ItemDetail