import { Gallery } from "./InfoGaleria";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/galeria.css';
import '../stylesheets/descripciones.css';
import '../stylesheets/reset.css';

export function GaleriaCosmica () {

    return (
        <>
        <div className='contenedortitulo'>
        <h1 id='titulogaleria'>GALERÍA INTERACTIVA</h1>
        </div>

        <Gallery/>
        </>
    )
};
