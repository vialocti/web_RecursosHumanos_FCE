import React from 'react'
import { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { Label } from '../../styles-components/formularios/FormAgente' 


const CabeceraPersona = ({titulo}) => {
  
  const legajo =useSelector(state=>state.agente.legajo)
  
  
  return (
    <div>
      <Label>{titulo}</Label><Label>Legajo:{legajo} Nombre</Label> 
    </div>
  )
}

export default CabeceraPersona