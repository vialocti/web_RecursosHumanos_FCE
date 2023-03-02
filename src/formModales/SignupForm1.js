import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';
import { Label } from '../styles-components/formularios/FormAgente';

const SignupForm1 = ({dato}) =>{ 
  console.log(dato)
    return (
      <Formik
        initialValues={{ hentrada: '00:00', hsalida: '00:00' }}
        
        validationSchema={Yup.object({
          hentrada: Yup.string()
            .min(5, 'deben ser 5 caracteres')
            .required('Required'),
          hsalida: Yup.string()
            .min(5, 'deben ser 5 caracteres')
            .required('Required'),
          
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <div className="container">
            
            <div className="row">
              <h3>Modificacion Horario Colaborador</h3>
            </div>
            <br/>
            <div className="row">
              
              <div className="col-md-4">

              <div className="form-group">
                  <h4>DATOS REGISTRO</h4>
                  
                </div>
              <div className="form-group">
                  <Label>LEGAJO: {dato?dato.legajo:null}</Label>
                  
                </div>
              
                <div className="form-group">
                  <Label>NOMBRE: {dato?dato.apellido:null}</Label>
                  
                
                </div>

                <div className="form-group">
                  <Label>FECHA ASISTENCIA: {dato?dato.fecha:null}</Label>
                  
                </div>

                <div className="form-group">
                  <Label>HORARIO INGRESO: {dato?dato.Hentrada:null}</Label>
                  
                </div>
              
                <div className="form-group">
                  <Label>HORARIO SALIDA: {dato?dato.Hsalida:null}</Label>
                  
                </div>
              </div>
            
            <div className='col-md-1'>

            </div>
              
            <div className="col-md-4">
              
                <div className='form-group'>
                    <h4>INGRESE NUEVO HORARIO</h4>

                </div>   
                
                <div className="form-group">
                  <Label htmlFor="hentrada">Horario de Ingreso</Label>
                  <Field className="form-control" name="hentrada" type="text" />
                  <ErrorMessage name="hentrada" />
                </div>
              
              
              <div className="form-group">
                <Label htmlFor="hsalida">Horario de Salida</Label>
                <Field className="form-control" name="hsalida" type="text" />
                <ErrorMessage name="hsalida" />
              </div>
               <br/>
               <div className="form-group">
                
                 <button className="btn btn-primary" type="submit">Modificar</button>
                 
               </div>
              
            </div>
          </div>
          </div>
        </Form>
      </Formik>
    );
      };
  export default SignupForm1