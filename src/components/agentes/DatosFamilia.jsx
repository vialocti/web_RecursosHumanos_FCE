import React from 'react'
import {useAgenteInfoFamilia} from '../../hooks/useAgenteInfoFamilia'

import { Label } from '../../styles-components/formularios/FormAgente'

const DatosFamilia = () => {
  
  const {datosFamiliaAgente,loading,error} = useAgenteInfoFamilia()

  if(loading) return <p>Cargando datos .....</p>
  if(error) return <p>Error de Carga</p>
  
  
    console.log(datosFamiliaAgente)
    return (
    <div className='container'>
        <hr/>
        {datosFamiliaAgente.length > 0?
        <div className='row'>
        <table className="table">
            <tbody>
            
                {datosFamiliaAgente.map((ele, index)=>
                    <tr key={index}>
                        
                        <td>{ele.nombre}</td>
                        <td>{ele.tdoc}</td>
                        <td>{ele.nrodoc}</td>
                        <td>{ele.vinculo}</td>
                    </tr>
                )}
            </tbody> 
        </table>    
        </div>
    :
    <div className='row'>
    <label>Sin Datos Familiares del Colaborador</label>
    <button className='button'>Agregar</button>
    </div>
    }          
    </div>
    
  )
}

export default DatosFamilia