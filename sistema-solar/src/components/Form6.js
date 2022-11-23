import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../stylesheets/form.css';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';

export function Form6() {


    const { register, formState: { errors }, handleSubmit } = useForm();
    const [stateSub, setStateSub] = useState (false);

    const onSubmit = handleSubmit ( (values) => {
        console.log (values) 
        if (setStateSub === "false") {
            setStateSub(true);
            console.log(stateSub); 
          }
    else {
     setStateSub(false);
     console.log(stateSub);
     alert ( "Los siguientes datos han sido ingresados a la base de datos:" + JSON.stringify(values));
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
    });

    

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

        {errors.nombre?.type === 'required' && <p id="obligatorios"> *El campo nombre es obligatorio </p>}
        {errors.nombre?.type === "maxLength" && <p id="obligatorios"> *El número máximo de caracteres es 30. Inténtelo nuevamente</p> }
          
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

            {errors.apellido?.type === 'required' && <p id="obligatorios"> *El campo apellido es obligatorio </p>}
            {errors.apellido?.type === "maxLength" && <p id="obligatorios"> *El número máximo de caracteres es 30. Inténtelo nuevamente</p> }
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

            {errors.mail?.type === 'required' && <p id="obligatorios"> *El campo Email es obligatorio </p>}
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
