import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
export function Formulario() {
  return (
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

      <Button type="submit">
        Enviar
      </Button>
    </Form>
  );
}
