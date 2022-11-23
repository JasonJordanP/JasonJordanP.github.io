import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React, { useState } from 'react';
import Swal from 'sweetalert2';



export function Form2() {

  const [stateSub, setStateSub] = useState (false);

  const publicar = () => {

    setStateSub(true);
    console.log(stateSub);

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
        <Form.Group className = "mb-3" controlid = "formName">
        <Form.Label controlid = "nombre" required>Nombre</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su nombre" />
        </Form.Group>

        <Form.Group className="mb-3" controlid="formLastname">
        <Form.Label controlId = "apellido">Apellido</Form.Label>
        <Form.Control type="text" placeholder="Ingrese su(s) apellido(s)" />
        </Form.Group>

      <Form.Group className="mb-3" controlid="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Ingrese su mail" />
        <Form.Text className="text-muted">
          No compartiremos su Email con nadie más.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlid="formComentario">
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
