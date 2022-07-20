import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { IconButton } from '@mui/material';
import Badge from '@mui/material/Badge';
import { useContext } from 'react';
import { CartContext } from './CartContext';

const CartWidget = () => {
  const {productos}= useContext(CartContext)
  const cantidad = productos.map(({ quantity }) => quantity).reduce((sum, i) => i + sum, 0);
  return (
    <IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2 }}
    >
      <ShoppingCartIcon/>
      {cantidad > 0 && (
        <Badge badgeContent={cantidad} color="primary"></Badge>
      )}
    </IconButton>
    
  )
}
export default CartWidget;