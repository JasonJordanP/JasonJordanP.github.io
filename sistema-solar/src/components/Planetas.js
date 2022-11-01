import React from 'react';
import '../stylesheets/descripciones.css';

 export function Planetas(props) {
  return (
    <div className= 'contenedor-planeta'>
      <img className= 'imagen-planeta'
      src = {require (`../imagenes/${props.imagen}.jpg`)  } alt = 'planeta' />
    
      <div className= 'contenedor-texto-planeta'>
        <p className= 'nombre-planeta'>
        <strong> { props.nombre } </strong> </p>
        <p className= 'descripcion-planeta'> { props.descripcion } </p>
        </div>
    </div>
  );
}



