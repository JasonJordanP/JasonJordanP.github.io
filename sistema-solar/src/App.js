import './App.css';

import { Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home.js';
import { InfoPlanetas } from './components/InfoPlanetas.js';
import { Form2 } from './components/Form2';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavbarDarkExample } from './components/Navbar';
import { VideoSistema } from './components/Video.js';
import { Footer } from './components/Footer.js';


function App() {
  return (
   <div className = 'App' id= 'pagina'>
        <div className= 'planetas'>

        <div className = 'navbar'>
          <NavbarDarkExample />
        </div>


        <Routes>
            <Route path= '/' element = {<Home />} />
            <Route path= '/PlanetasSistemaSolar' element = {<InfoPlanetas />} />
            <Route path= '/Video' element = {<VideoSistema />} />
            <Route path= '/Contactenos' element = {<Form2 />} />
        </Routes>

        <Footer />    

      </div>
    </div>
  );
}

export default App;
