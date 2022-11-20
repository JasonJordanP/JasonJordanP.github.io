import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';


/* function Formulario() {
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [email, setEmail] = useState("");
  const [comentario, setComentario] = useState("");

  const [error, setError] = useState(false);

   useEffect(() => {
     if (Object.keys(Form2).length > 0) {

      setNombre(Form2.nombre)
      setApellido(Form2.apellido)
      setEmail(Form2.email)
      setComentario(Form2.comentario)
      
     }
    
   }, [paciente])

   const handleSubmit = (e) => {
    e.preventDefault();

    // Validacion del formulario

    if ([nombre, apellido, email, comentario].includes("")) {
      console.log("Complete todos los campos vacíos");

      setError(true);
      return;
    }
    setError(false);

   const comentarioEnviado ={
    nombre,
    apellido,
    email,
    comentario,
   
   }
  }
};
*/

export function Form2() {

  const [stateSub, setStateSub] = useState (false);

  const publicar = () => {

    setStateSub(true);

    Swal.fire({
      title: '<strong>Mensaje enviado con éxito</strong>',
      icon: 'success',
      html:
        '¿Desearía suscribirse al newsletter?',
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText:
        '<i class="fa fa-thumbs-up"></i> Sí, deseo suscribirme',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText:
        '<i class="fa fa-thumbs-down">No quiero suscribirme</i>',
      cancelButtonAriaLabel: 'Thumbs down'
    }) 
    
      

  }

  return (
    
    <div className = 'zonaForm' id='contacto'>
    <h2> Mantengámonos en contacto </h2>
    <Form>
        <Form.Group className = "mb-3" controlId = "formName">
        <Form.Label controlId = "nombre" required>Nombre</Form.Label>
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

      <Button onClick = { publicar }>
        Enviar comentario
      </Button>
    </Form>

    </div>
  );
}
