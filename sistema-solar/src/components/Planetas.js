import React from 'react';
import '../stylesheets/descripciones.css';
import data from "../data.json"
import '../stylesheets/reset.css';


 export const Planetas = ( ) =>   {

  return (


    data.map (e =>
    <div className= 'contenedor-planeta'>
      <img className= 'imagen-planeta'
      src = {require (`../imagenes/${e.imagen}.jpg`)  } alt = 'planeta' />
    
      <div className= 'contenedor-texto-planeta'>
        <p className= 'nombre-planeta'>
        <strong> { e.nombre } </strong> </p>
        <p className= 'descripcion-planeta'> { e.descripcion } </p>
        </div>
    </div>
    )
    
  )
  
}



