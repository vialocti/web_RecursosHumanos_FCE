import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React, { useEffect, useState } from 'react';
import { SelectorV } from '../styles-components/formularios/FormAgente';
import { darBajaCargo, grabarCargo } from '../services/f_axioscargos';




const RenovacionCargoForm = ({ dato, nrocargoG, funcion }) => {



  const [nroReg, setnroReg] = useState(0)
  const [legajo, setlegajo] = useState('')

  //const [fechaB, setfechaB] = useState('')


  //console.log(dato)
  //console.log(nrocargoG)
  const convFecha = (fecha) => {
    let fechaC = fecha.substring(6, 10) + "-" + fecha.substring(3, 5) + "-" + fecha.substring(0, 2)

    return fechaC
  }

  useEffect(() => {

    if (dato) {
      setnroReg(dato.row_id)
      setlegajo(dato.legajo)

    }


  }, [dato])

  const changemotivo = () => {

  }

  const grabarNuevo = (values) => {
    console.log(values)
    let cargoNew = {
      legajo: dato.legajo,
      ncargo: dato.nc,
      sede: dato.inst,
      tcargo: dato.ca,
      claustro: dato.es,
      ppal: dato.ppal,
      nivel: dato.nv,
      adic: dato.ad,
      plan: dato.pl,
      codmat: dato.mat,
      fechaA: values.fechaalta,
      nroresA: values.resualta,
      fechaB: values.newfechabaja,
      ncg: nrocargoG.nroCg + 1,
      titu: dato.titular

    }
    grabarCargo(cargoNew)
    funcion()

  }
  const preparardatosnuevos = (values) => {
    darBajaCargo(nroReg, legajo, '9', values.resubaja, values.fechabaja)
  }

  const valueinitial = { fechabaja: '', fechaalta: '', resubaja: '', resualta: '', newfechabaja: '' }



  return (


    <Formik
      initialValues={valueinitial}

      validationSchema={Yup.object({
        resualta: Yup.string()
          .min(5, 'deben ser 5 al menos caracteres').max(11, 'no mas de 11 caracters')
          .required('Required'),
        resubaja: Yup.string()
          .min(5, 'deben ser 5 al menos caracteres').max(11, 'no mas de 11 caracters')
          .required('Required'),
        fechaalta: Yup.string()
          .min(10, 'deben ser diez caracteres')
          .required('Required'),
        newfechabaja: Yup.string()
          .min(10, 'deben ser diez caracteres')
          .required('Required'),


      })}
      onSubmit={(values, { setSubmitting }) => {

        preparardatosnuevos(values);
        setTimeout(() => {

          grabarNuevo(values)

          setSubmitting(false);
        }, 800);

      }

      }

    >
      <Form>

        <div className='container'>
          <div className='row'>

            <h2 className='h2'>Renovacion de Cargo </h2>

          </div>

          <div className='row'>

            <div className='col-md-3'>

              <div className="form-group">
                <h5>Datos Cargo</h5>
              </div>
              <br />
              <table className='table table-striped bordered'>
                <tbody>
                  <tr>
                    <td><stronger>Legajo</stronger></td> <td>{dato ? dato.legajo : null}</td>
                  </tr>

                  <tr>

                    <td>N°Cargo</td><td>{dato ? dato.nc : null}</td>
                  </tr>

                  <tr>
                    <td>Cargo</td> <td>{dato ? dato.ca : null}</td>
                  </tr>

                  <tr>
                    <td>Claustro</td><td>{dato ? dato.es : null}</td>
                  </tr>

                  <tr>
                    <td>PPAL</td><td>{dato ? dato.ppal : null}</td>
                  </tr>

                  <tr>
                    <td>Nivel</td><td>{dato ? dato.nv : null}</td>
                  </tr>
                  <tr>
                    <td>Plan</td> <td>{dato ? dato.pl : null}</td>
                  </tr>

                  <tr>
                    <td>CodMat</td><td>{dato ? dato.mat : null}</td>
                  </tr>

                  <tr>
                    <td>Adicional</td> <td>{dato ? dato.ad : null}</td>
                  </tr>

                  <tr>
                    <td>Fecha Alta</td> <td>{dato ? dato.fechaAlta : null}</td>
                  </tr>

                  <tr>
                    <td>N.Res.Alta</td> <td>{dato ? dato.nresa : null}</td>
                  </tr>
                  <tr>
                    <td>Fecha Baja</td> <td>{dato ? dato.fechaBaja : null}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className='col-md-1'>

            </div>


            <div className='col-md-3'>

              <div className="form-group">
                <h5>Datos a Ingresar</h5>
              </div>
              <br />
              <div className="form-group">
                <label>Fecha de Baja</label>
                <Field className="form-control" name="fechabaja" type="text" />
                <ErrorMessage name="fechabaja" />
              </div>
              <br />

              <div className="form-group">
                <label>Resolución Baja</label>
                <Field className="form-control" name="resubaja" type="text" />
                <ErrorMessage name="resubaja" />
              </div>
              <br />

              <div className="form-group">
                <label>Nueva Fecha Alta</label>
                <Field className="form-control" name="fechaalta" type="text" />
                <ErrorMessage name="fechaalta" />
              </div>
              <br />

              <div className="form-group">
                <label>Resolución de Alta</label>
                <Field className="form-control" name="resualta" type="text" />
                <ErrorMessage name="resualta" />
              </div>
              <br />


            </div>
            <div className='col-md-1'>

            </div>


            <div className='col-md-3'>
              <div className="form-group">
                <br />
              </div>
              <br />
              <div className="form-group">
                <label>Nueva Fecha Baja</label>
                <Field className="form-control" name="newfechabaja" type="text" />
                <ErrorMessage name="newfechabaja" />
              </div>
              <br />



              <label htmlFor='motibaja'>Motivo Baja</label>
              <div className="form-group">
                <SelectorV name="motibaja" id='motibaja' onChange={changemotivo}>
                  <option value="1">Término de Funciones</option>
                  <option value="2">Renuncia</option>
                  <option value="3">Cesantia</option>
                  <option value="4">Prescindibilidad</option>
                  <option value="5">Exoneración</option>
                  <option value="6">Jubilación</option>
                  <option value="7">Traslado</option>
                  <option value="8">Edad límite</option>
                  <option value="9">Renovación</option>
                </SelectorV>
              </div>
              <br />


              <div className="form-group">
                <label htmlFor="plan">Plan</label>
                <Field className="form-control" name="plan" type="text" />
                <ErrorMessage name="plan" />
              </div>

              <br />
              <div className="form-group">
                <label htmlFor="codmat">Cod.Mat</label>
                <Field className="form-control" name="codmat" type="text" />
                <ErrorMessage name="codmat" />
              </div>
              <br />
              <div className="form-group">

                <button className="btn btn-primary" type="submit">Renovar</button>

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