import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React, { useState } from 'react';
import Error from './Error';




export const Form5 = () => {
    

    const [nombre, setNombre] = useState ("");
    const [apellido, setApellido] = useState ("");
    const [email, setEmail] = useState ("");
    const [comentario, setComentario] = useState ("");

    

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setValues ({
            ...values,
            [name] : value,
        });

    const handleForm = (event) => {

          event.preventDefault();
          const [nombre, setNombre] = useState ("");
          const [apellido, setApellido] = useState ("");
          const [email, setEmail] = useState ("");
          const [comentario, setComentario] = useState ("");
    };
};
     
    


 

  return (
    
    <div className = 'zonaForm' id='contacto'>
    <h2> Mantengámonos en contacto </h2>
    <Form onSubmit = { handleForm }>
    


        <Form.Group className = "mb-3" controlid = "formName">
        <Form.Label controlid = "nombre" required>Nombre</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su nombre"
        name="nombre"
        value= {values.nombre}
        onChange = { handleInputChange } />

        </Form.Group>

        <Form.Group className="mb-3" controlid="formLastname">
        <Form.Label controlId = "apellido">Apellido</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Ingrese su(s) apellido(s)"
        name="apellido"
        value= {values.apellido}
        onChange = { handleInputChange } />

        </Form.Group>

      <Form.Group className="mb-3" controlid="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Ingrese su mail"
        name="email" 
        value= {values.email}
        onChange = { handleInputChange } />
      </Form.Group>

      <Form.Group className="mb-3" controlid="formComentario">
        <Form.Label id = "labelComentario">Comentario</Form.Label>
        <Form.Control 
        type="textarea" 
        placeholder="Déjenos su mensaje"
        id= "comentario" 
        value= {values.comentario}
        onChange = { handleInputChange } />
        
        </Form.Group>

      <Button type= "submit">
        Enviar comentario
      </Button>
    </Form>

    </div>
  );
  };