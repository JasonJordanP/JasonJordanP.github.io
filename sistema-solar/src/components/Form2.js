import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';

export function Form2() {
  return (
    
    <div className = 'zonaForm' id='contacto'>
    <h2> Mantengámonos en contacto </h2>
    <Form>
        <Form.Group className = "mb-3" controlId = "formName">
        <Form.Label controlId = "nombre">Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formLastname">
        <Form.Label controlId = "apellido">Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su(s) apellido(s)" />
        </Form.Group>

      <Form.Group className="mb-3" controlId="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su mail" />
        <Form.Text className="text-muted">
          No compartiremos su Email con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formComentario">
        <Form.Label id = "comentario">Comentario</Form.Label>
        <Form.Control type="textarea" placeholder="Déjenos su mensaje" id= "comentario" />
        </Form.Group>

      <Button type="submit">
        Enviar
      </Button>
    </Form>
    </div>
  );
}
