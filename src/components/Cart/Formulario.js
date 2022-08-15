import { TextField } from "@mui/material";
import React  from "react";

const Formulario = ({ cambiarDatos, datosUsuario }) => {
  return (
    <>
      <TextField label="Nombre" variant="outlined" value={datosUsuario.nombre} onChange={(e) => cambiarDatos("nombre", e.target.value)} />
      <TextField label="Numero" variant="outlined" value={datosUsuario.numero} onChange={(e) => cambiarDatos("numero", e.target.value)} />
      <TextField label="Correo" variant="outlined" value={datosUsuario.correo} onChange={(e) => cambiarDatos("correo", e.target.value)} type='email' />
    </>
  )
}

export default Formulario
  