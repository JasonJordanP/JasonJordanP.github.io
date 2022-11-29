import '../App.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Icon } from '@iconify/react';


export function NavbarDarkExample() {
  return (
    <Navbar bg="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="/">Enciclopedia Galáctica™</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            navbarScroll
          >
            <Nav.Link href="/PlanetasSistemaSolar">Planetas del Sistema Solar</Nav.Link>
            <Nav.Link href="/Video">Video</Nav.Link>
            <Nav.Link href="/Galeria">Galería Interactiva</Nav.Link>
            <Nav.Link id= "newsletter" href="/Contactenos">Suscribirse al Newsletter<Icon id="icon" icon="quill:inbox-newsletter" color="white" /></Nav.Link>

          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
