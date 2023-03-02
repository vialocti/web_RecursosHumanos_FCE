import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, {useState} from 'react'
import { faDownload, faRegistered} from '@fortawesome/free-solid-svg-icons'
import {  CabTituloCargo } from '../../styles-components/formularios/FormAgente'

//import { Container, Row, Table } from 'react-bootstrap'

import {useModal} from '../../hooks/useModal'
import { ModalComponente } from '../ModalComponente'
import RenovacionCargoForm from '../../formModales/RenovacionCargoForm'

const CargosConsulta = (props) => {

  const [isOpen,openModal,closeModal] = useModal()
   
  const [dato, setDato] = useState(null)

    const {cargos, title,tipo} = props
   // console.log(cargos)
   const bajaCargo =(nleg,id)=>{
    console.log(nleg,id)
   }

   const RenovacionCargo =(ele)=>{
    if(ele.legajo > 0){
      setDato(ele)
      openModal()
      }
   }
  
  
  
   return (
    <div className='container'>

      <ModalComponente isOpen={isOpen} closeModal={closeModal}>
         <RenovacionCargoForm dato={dato} />
      </ModalComponente> 
    <CabTituloCargo>{title}</CabTituloCargo>   
        <div  className='row'>
         
                    
         <table className='table  table-striped bordered hover size="sm' >
          <thead>
            <tr>
          
            <th>NC</th>
            <th>INST</th>
            <th>CA</th>
            <th>ES</th>
            <th>PPAL</th>
            <th>NV</th>
            <th>AD</th>
            <th>PL</th>
            <th>MAT</th>
            <th>FECHA ALTA</th>
            <th>Nro.Res.A</th>
            <th>FECHA BAJA</th>
            <th>Nro.Res.B</th>
            <th>ncg</th>
          </tr>
        </thead>
        <tbody>
        {cargos.map((ele, ind) =>
      
          <tr key={ind}>
              <td>{ele.nc} </td>
              <td>{ele.inst}</td>
              <td>{ele.ca}</td>
              <td>{ele.es}</td>
              <td>{ele.ppal}</td>
              <td>{ele.nv}</td>
              <td>{ele.ad}</td>
              <td>{ele.pl}</td>
              <td>{ele.mat}</td>
              <td>{ele.fechaAlta}</td>
              <td>{ele.nresa}</td>
              <td>{ele.fechaBaja}</td>
              <td>{ele.nresb}</td>
              <td>{ele.ncg}</td>
              {tipo===1?<>

                <td>
                  {ele.ca !=='1'?
                <button
              onClick={()=>RenovacionCargo(ele)}
            >
               <FontAwesomeIcon icon={faRegistered} />
              </button>
               :null }
              </td>
              <td>
                <button
              onClick={()=>bajaCargo(ele.legajo,ele.row_id)}
            >
               <FontAwesomeIcon icon={faDownload} />
              </button>
              </td>
                </>
              :null}

              
          </tr>
          
          )}
          </tbody>
      </table>
    </div>

    </div>
  )
}

export default CargosConsulta