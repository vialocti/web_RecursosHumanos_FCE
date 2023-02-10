
import React, {useState, useEffect } from 'react'
import {useSelector, useDispatch} from 'react-redux'

import axios from 'axios'
import { addAgente } from '../../dominio/store/agente-slice'
import '../../css/estilosforminasistencia.css'
import FormBusqueda from '../../components/inasistencia/FormBusqueda'
import FormInasistencia from '../../components/inasistencia/FormInasistencia'

const InasistenciaPage = () => {
  //const uri = 'http://localhost:4000/'
  const uri = 'http://200.12.136.74:4000/'
   const dispatch = useDispatch()  
   const legajo = useSelector((state) => state.agente.legajo)
   const [motivos, setMotivos]= useState(['Incompatibilidad',
    'Estudio',
   'Asistencia técnica',
    'Razones particulares',
   'Enfermedad prolongada',
   'Enfermedad',
   'Mesa examinadora',
   'Matrimonio-Nacimiento',
   'Maternidad-Fallecimiento',
   'Familiar enfermo',
   'Congresos',
    'Incapacidad',
    'Sindical',
    'Servicio militar',
    'Actividad deportiva',    
   'Licencia anual',
   'Accidente de trabajo',
   'Razones especiales',
   'Donación sangre',
   'Asignación dedicación',
   'Reducción horaria',
   'Lactancia',
   'Asistencia tribunales',
   'Sanción disciplinaria',
   'Licencia extraordinaria 25',
   'Compensación',
   'Docencia pasiva',
   'Año sabático',
   'Cambio función',
   'Alta médica',
   'Permiso particular',
   'Permiso excepcional',
   'Licencia unificación',
   'Renuncia condicionada',
   'Comisión de servicio',
])


   useEffect(()=>{
      //traer motivos de inasistencias
      
      const getMotivos =async ()=>{
        let url=`${uri}cargos/motina`
        try {
          const resu =  await axios.get(url)
          console.log(resu.data)
          setMotivos(resu.data)
      } catch (error) {
        console.log(error) 
      }
    }
    
      dispatch(addAgente(null))
     // getMotivos()
    },[dispatch])
  
  return (
    <div className="container">

    <div className="row" style={{height:'50px', alignItems:'center'}}>
      <FormBusqueda />
    </div>
    
      <hr/>
 
    <div className="inasistencia">
      {legajo &&
      <FormInasistencia agente={legajo} motivos={motivos}/>
      }
      </div>
    </div>
  )
}

export default InasistenciaPage