import { Planetas } from './Planetas';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../stylesheets/descripciones.css';


export function InfoPlanetas () {

    return (
        <>
        <h1 id='planetas'>PLANETAS DEL SISTEMA SOLAR</h1>
        <Planetas/>
        </>
    )
};


