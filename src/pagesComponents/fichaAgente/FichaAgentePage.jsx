import BuscarPersona from '../../components/BuscarPersona'
import CabeceraPersona from '../../components/agentes/CabeceraPersona'
import DatosPersona from '../../components/agentes/DatosPersona'
import React from 'react'


const FichaAgentePage = () => {
  return (
    <>
      <BuscarPersona />
      <CabeceraPersona titulo='Inforormación Agente'/>
      <DatosPersona />
      
    </>
  )
}

export default FichaAgentePage