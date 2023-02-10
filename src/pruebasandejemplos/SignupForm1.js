import * as Yup from 'yup';

import { ErrorMessage, Field, Form, Formik } from 'formik';

import React from 'react';

const SignupForm1 = () =>{ 
    return (
      <Formik
        initialValues={{ firstName: '', lastName: '', email: '' }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Must be 15 characters or less')
            .required('Required'),
          lastName: Yup.string()
            .max(20, 'Must be 20 characters or less')
            .required('Required'),
          email: Yup.string().email('Invalid email address').required('Required'),
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
              <div className="col-md-4">
                <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <Field className="form-control" name="firstName" type="text" />
                <ErrorMessage name="firstName" />
              </div>
              
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <Field className="form-control" name="lastName" type="text" />
                <ErrorMessage name="lastName" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Direccion de Email</label>
                <Field className="form-control" name="email" type="email" />
                <ErrorMessage name="email" />
              </div>

              <div className="form-group">
                <label htmlFor="tcargo">Tipo de Cargo</label>
                <select className="form-control" name="tcargo" id="tcargo"> 
                  <option value="1">Efectivo</option>
                  <option value="2">interino</option>
                </select>
              </div>

              
              <div className="form-group">
                
                <button className="btn btn-primary" type="submit">Submit</button>
                
              </div>
              </div>
              </div>

          </div>
        </Form>
      </Formik>
    );
      };
  export default SignupForm1