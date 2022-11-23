import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React from 'react';
import { useForm } from 'react-hook-form';


export function Form6() {

    const { register, handleSubmit } = useForm();

    const onSubmit = handleSubmit ( (values) => {
        console.log (values) });

    

  return (
    
    <div className = 'zonaForm' id='contacto'>
    <h2> Mantengámonos en contacto </h2>

    <Form onSubmit = { onSubmit } id="formulario">


        <Form.Group className = "mb-3" controlid = "formName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control 
          type="text" 
          placeholder="Ingrese su nombre" 
          id="nombre" 
          {...register('nombre', {
          required: true,
          minLength: 2,
          maxLength:30,
          })} />

        </Form.Group>


        <Form.Group className="mb-3" controlid="formLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="text" 
          placeholder="Ingrese su(s) apellido(s)" 
          id="apellido" 
          {...register('apellido', {
          required: true,
          minLength: 2,
          maxLength: 30,
          })} />

        </Form.Group>


        <Form.Group className="mb-3" controlid="formEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email" 
          placeholder="Ingrese su mail" 
          id= "email"  
          {...register('mail', {
          required: true,
          })}/>

        </Form.Group>


        <Form.Group className="mb-3" controlid="formComentario">
        <Form.Label id = "labelComentario">Comentario</Form.Label>
        <Form.Control 
          type="textarea" 
          placeholder="Déjenos su mensaje" 
          id= "comentario" 
          {...register('comentario')} />
        </Form.Group>

        <Button type= "submit">
          Enviar
        </Button>
    </Form>

    </div>
  );
}
