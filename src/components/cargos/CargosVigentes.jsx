import React from 'react'
import {useSelector} from 'react-redux' 

const CargosVigentes = () => {
  const legajo = useSelector(state=>state.agente.legajo)  
  return (
    <div>{legajo}CargosVigentes</div>
  )
}

export default CargosVigentes
