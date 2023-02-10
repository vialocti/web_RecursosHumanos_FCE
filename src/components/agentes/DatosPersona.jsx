
import React,{ useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Label } from '../../styles-components/formularios/FormAgente'

const DatosPersona = () => {
  const legajo =useSelector(state=>state.agente.legajo)
 
  useEffect(()=>{

  },[])
 
  return (
    <div className='container m-4'>
        
        <div className="row">
              <div className='col-md-3'>
                <Label>Legajo: {legajo}</Label>
              </div>

            <div className='col-md-3'>
              <Label>Nombre: {legajo}</Label>
            </div>

            <div className='col-md-2'>
              <Label>Tipo Documento: {legajo}</Label>
            </div>

            <div className='col-md-2'>
              <Label>Nro. Documento: {legajo}</Label>
            </div>

            <div className='col-md-2'>
              <Label>Nro. Cuil: {legajo}</Label>
           </div>
          </div>

          <div className="row">
        
            <div className='col-md-2'>
            <Label>Sexo:{legajo}</Label>
            </div>

            <div className='col-md-3'>
            <Label>Fecha Nacimiento: {legajo}</Label>
            </div>

            <div className='col-md-3'>
            <Label>Email Contacto: {legajo}</Label>
            </div>
        
        
            <div className='col-md-3'>
              <Label>Telefono contacto: {legajo}</Label>
            </div>

         </div>
        

    </div>

  )
}

export default DatosPersona