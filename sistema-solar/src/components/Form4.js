import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React, { useState } from 'react';
import Error from './Error';
import { useForm } from 'react-hook-form';



export const Form4 = () => {

  const [nombre, setNombre] = useState ("");
  const [apellido, setApellido] = useState ("");
  const [email, setEmail] = useState ("");
  const [comentario, setComentario] = useState ("");


  const {register, formState: { errors } } = useForm (); 

  const handleSubmit = (e) => {
      e.preventDefault()
  };

 

  return (
    
    <div className = 'zonaForm' id='contacto'>
    <h2> Mantengámonos en contacto </h2>
    <Form onSubmit = { handleSubmit }>

 
        <Form.Group className = "mb-3" controlid = "formName">
        <Form.Label controlid = "nombre" required>Nombre</Form.Label>
        <Form.Control 
        type="text" 
        placeholder="Ingrese su nombre"
        name="nombre"
        {...register('nombre', { 
          required: true,
          minLength: 2,
          maxLength:30,
          })}

          {...errors.nombre?.type === 'required' && <p id="obligatorios"> *El campo nombre es obligatorio </p>}
          {...errors.nombre?.type === "maxLength" && <p id="obligatorios"> *El número máximo de caracteres es 30. Inténtelo nuevamente</p> }
        
        value= {nombre}
        onChange = {(e) => setNombre (e.target.value)} />

        </Form.Group>

        <Form.Group className="mb-3" controlid="formLastname">
        <Form.Label controlId = "apellido">Apellido</Form.Label>
        <Form.Control
        type="text" 
        placeholder="Ingrese su(s) apellido(s)"
        name="apellido"
        value= {apellido}
        onChange = {(e) => setApellido (e.target.value)}  />

        </Form.Group>

      <Form.Group className="mb-3" controlid="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control 
        type="email" 
        placeholder="Ingrese su mail"
        name="email" 
        value= {email}
        onChange = {(e) => setEmail (e.target.value)} />
      </Form.Group>

      <Form.Group className="mb-3" controlid="formComentario">
        <Form.Label id = "labelComentario">Comentario</Form.Label>
        <Form.Control 
        type="textarea" 
        placeholder="Déjenos su mensaje"
        id= "comentario" 
        value= {comentario}
        onChange = {(e) => setComentario (e.target.value)} />
        
        </Form.Group>

      <Button type= "submit">
        Enviar comentario
      </Button>
    </Form>

    </div>
  );
}
