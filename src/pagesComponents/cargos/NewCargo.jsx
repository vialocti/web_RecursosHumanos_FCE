import React from 'react'
import CabeceraPersona from '../../components/agentes/CabeceraPersona'
import BuscarPersona from '../../components/BuscarPersona'
import CargosVigentes from '../../components/cargos/CargosVigentes'
import FormularioCargo from '../../components/cargos/FormularioCargo'


const NewCargo = () => {
  return (
    <>
    <BuscarPersona />
    <CabeceraPersona />
    <CargosVigentes />
    <FormularioCargo />
    </>
  )
}

export default NewCargo