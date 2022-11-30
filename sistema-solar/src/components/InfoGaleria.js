import React from 'react';
import '../stylesheets/galeria.css';
import dataGaleria from '../dataGaleria.json';
import '../stylesheets/reset.css';

export const Gallery = ( ) => {
     
    return (


        dataGaleria.map (e =>
        <div className = 'container-a1'>
		<ul class="caption-style-1">
			<li>
				<img className = 'gallery-image'
                src= {require (`../imagenes/${e.imagen}.jpg`)  } alt=''/>
				<div className='caption'>
					<div class='blur'></div>
					<div className='caption-text'>
						<h1> {e.captitle}</h1>
						<p className= 'descripcion-img'> {e.caption} </p>
					</div>
				</div>
			</li>
		</ul>
	    </div>
        )
    );
};