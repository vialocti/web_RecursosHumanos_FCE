import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';
import { Label, LabelF } from '../styles-components/formularios/FormAgente';

const RenovacionCargoForm = ({dato}) =>{ 
  console.log(dato)
    return (
      <Formik
        initialValues={{ fechabaja: 'aaaa-mm-dd', fechaalta: 'aaaa-mm-dd',resubaja:'',resualta:'' }}
        
        validationSchema={Yup.object({
          resualta: Yup.string()
            .min(5, 'deben ser 5 al menos caracteres')
            .required('Required'),
          resubaja: Yup.string()
            .min(5, 'deben ser 5 al menos caracteres')
            .required('Required'),
          fechaalta:Yup.string()
            .min(10, 'deben ser diez caracteres')
            .required('Required'),
            fechabaja:Yup.string()
            .min(10, 'deben ser diez caracteres')
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
         
         <div className='container'>
            <div className='row'>
              <h2>Renovacion de Cargo</h2>
            </div>

            <div className='row'>
                <div className='col-md-3'>
                    
                    <div className="form-group">
                        <h4>DATOS CARGO</h4>
                    </div>

                  <div className="form-group">
                    <Label>LEGAJO: {dato?dato.legajo:null}</Label>
                  </div>
              
                  <div className="form-group">
                    <Label>NRO.CARGO: {dato?dato.nc:null}</Label>
                  </div>
                
                  <div className="form-group">
                    <Label>CARGO: {dato?dato.ca:null}</Label>
                  </div>

                  <div className="form-group">
                    <Label>CLAUSTRO: {dato?dato.es:null}</Label>
                  </div>

                  <div className="form-group">
                    <Label>PPAL: {dato?dato.ppal:null}</Label>
                  </div>
              
                  <div className="form-group">
                    <Label>NIVEL: {dato?dato.nv:null}</Label>
                  </div>
                  <div className="form-group">
                    <Label>PLAN: {dato?dato.pl:null}</Label>
                  </div>
                
                  <div className="form-group">
                    <Label>COD MAT: {dato?dato.mat:null}</Label>
                  </div>

                  <div className="form-group">
                    <Label>FECHA ALTA: {dato?dato.fechaAlta:null}</Label>
                  </div>
                
                  <div className="form-group">
                    <Label>NRO.RESOL.ALTA: {dato?dato.nresa:null}</Label>
                  </div>

              </div>
                
              <div className='col-md-2'>

                  




                <LabelF>Renovacion por cambio Plan</LabelF>
                <div class="form-check">
                    <input type="checkbox" class="form-check-input" id="cambioplanCk" />
                    <label class="form-check-label" for="cambioplanCk">SI</label>
                </div>
            </div>

              <div className='col-md-4'>
              <div className="form-group">
                  <Label htmlFor="fechabaja">FECHA DE BAJA</Label>
                  <Field className="form-control" name="fechabaja" type="text" />
                  <ErrorMessage name="fechabaja" />
                </div>
              
              
              <div className="form-group">
                <Label htmlFor="resubaja">RESOLUCION BAJA</Label>
                <Field className="form-control" name="resubaja" type="text" />
                <ErrorMessage name="resubaja" />
              </div>
               <br/>
               <div className="form-group">

               <div className="form-group">
                  <Label htmlFor="fechaalta">FECHA ALTA</Label>
                  <Field className="form-control" name="fechaalta" type="text" />
                  <ErrorMessage name="fechaalta" />
                </div>
              
              
              <div className="form-group">
                <Label htmlFor="resualta">RESOLUCION ALTA</Label>
                <Field className="form-control" name="resualta" type="text" />
                <ErrorMessage name="resualta" />
              </div>


               <br/>

               
               <div className="form-group">
                  <Label htmlFor="plan">CODIGO PLAN</Label>
                  <Field className="form-control" name="plan" type="text" />
                  <ErrorMessage name="plan" />
                </div>
              
              
              <div className="form-group">
                <Label htmlFor="codmat">COD MATERIA</Label>
                <Field className="form-control" name="codmat" type="text" />
                <ErrorMessage name="codmat" />
              </div>
              <br/>
               <div className="form-group">
                
                 <button className="btn btn-primary" type="submit">Modificar</button>
                 
               </div>
              
            </div>

           

              </div>

             
            </div>

         </div>
         
         
         {/* */}
        </Form>
      </Formik>
    );
      };
  export default RenovacionCargoForm