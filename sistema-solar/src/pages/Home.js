import '../App.css';
import React from 'react';

import { LinksExample } from '../components/Links.js';
import { Carrusel } from '../components/Carousel.js';


export const Home = () => {
    return (
        <>
            <div className="containercarousel">
            <Carrusel/>
            </div>

            <h1 id='vialactea'>ENCICLOPEDIA GALÁCTICA</h1>
            <div>
            <p id= 'textoprincipal'>Bienvenid@ a la Enciclopedia Galáctica! En esta página podrá encontrar la información más precisa y variada sobre diferentes tópicos que conciernen a nuestra galaxia.
                El mejor material de lectura, videos explicativos y una sección en la que usted podrá suscribirse a nuestro newsletter y también hacernos los comentarios que desee para ayudarnos a seguir creciendo.
            </p>
            </div>

            

            <LinksExample />
            
        
        
        </>
    )
} 