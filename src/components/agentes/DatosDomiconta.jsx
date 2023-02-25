import React from 'react'
import {useAgenteInfoDomiConta} from '../../hooks/useAgenteInfoDomiConta'

import { Label } from '../../styles-components/formularios/FormAgente'
const DatosDomiconta = () => {

    const {loading,error,datosDomiContaAgente} = useAgenteInfoDomiConta()
   
    if(loading) return <p>Cargando datos .....</p>
    if(error) return <p>Error de Carga</p> 
    
  return (
    <div className='container'>
    <hr/>
    {datosDomiContaAgente?
    <>
    <div className="row">
          <div className='col-md-3'>
            Domicilio<Label>{datosDomiContaAgente.domicilio}</Label>
          </div>

        <div className='col-md-3'>
          Localidad<Label> {datosDomiContaAgente.localidad}</Label>
        </div>

        <div className='col-md-2'>
        C.Postal.<Label> {datosDomiContaAgente.cp}</Label>
        </div>
        <div className='col-md-2'>
          Telefono<Label>{datosDomiContaAgente.telefonoFijo}</Label>
        </div>
       
        <div className='col-md-2'>
           Tel.Movil<Label>{datosDomiContaAgente.telefonoCelular}</Label>
        </div>
       </div>
     
     <div className='row'>
       
            
        <div className='col-md-3'>
        Email Personal<Label>{datosDomiContaAgente.emailPersonal}</Label>
        </div>
        <div className='col-md-3'>
        Email Institu.<Label>{datosDomiContaAgente.emailfe}</Label>
        </div>
       

     </div>
     </>
     :
     <div className='row'>
     <label>Sin Datos Domicilio y Contacto</label>
     <button className='button'>Agregar</button>
  </div>
     }
</div>
  )
}

export default DatosDomiconta