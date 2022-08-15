import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Item = ({ name, id, description, price, pictureUrl }) => {
  return (
    <Link to={'/item/' + id}>
      <Card sx={{ maxWidth: 345, textDecoration: 'none' }}>
        <CardMedia
          component="img"
          alt="arbol-alto"
          image={`/images/${pictureUrl}`}
        />
        <CardContent>
          <Typography sx={{ textDecoration: 'none' }} gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="h6" color="text.secondary">
            S/{price}
          </Typography>
        </CardContent>
      </Card>
    </Link>
  )
};

export default Item