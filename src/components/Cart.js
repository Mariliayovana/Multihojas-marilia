import React, { useContext } from "react";
import { CartContext } from "./CartContext";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

const TAX_RATE = 0.18;

function ccyFormat(num) {
  return `${num.toFixed(2)}`;
}

function subtotal(items) {
  return items.map(({ price, quantity }) => ({price, quantity})).reduce((sum, i) => (i.price * i.quantity) + sum, 0);
}

const Cart = () =>{
  const {productos, removeProducto}= useContext(CartContext)

  const invoiceSubtotal = subtotal(productos);
  const invoiceTaxes = TAX_RATE * invoiceSubtotal;
  const invoiceTotal = invoiceTaxes + invoiceSubtotal;

  return (
    <>
      {productos.length > 0 ? (
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 700 }} aria-label="spanning table">
            <TableHead>
              <TableRow>
                <TableCell align="center" colSpan={3}>
                  CARRITO
                </TableCell>
                <TableCell align="right">Precio Total</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>Producto</TableCell>
                <TableCell align="right">Cantidad</TableCell>
                <TableCell align="right">Precio</TableCell>
                <TableCell align="right">Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {productos.map((p) => (
                <TableRow key={p.desc}>
                  <TableCell>{p.name}</TableCell>
                  <TableCell align="right">{p.quantity}</TableCell>
                  <TableCell align="right">{p.price}</TableCell>
                  <TableCell align="right">{ccyFormat(p.price * p.quantity)}</TableCell>
                  <Tooltip title="Delete">
                    <IconButton onClick={() => removeProducto(p.id)}>
                    <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableRow>
              ))}
              <TableRow>
                <TableCell rowSpan={3} />
                <TableCell colSpan={2}>Subtotal</TableCell>
                <TableCell align="right">{ccyFormat(invoiceSubtotal)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell>IGV</TableCell>
                <TableCell align="right">{`${(TAX_RATE * 100).toFixed(0)} %`}</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTaxes)}</TableCell>
              </TableRow>
              <TableRow>
                <TableCell colSpan={2}>Total a Pagar</TableCell>
                <TableCell align="right">{ccyFormat(invoiceTotal)}</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <>
          <Typography>No hay items</Typography>
          <Link to="/">Agrega un producto</Link>
        </>
      )}
    </>)
}
export default Cart