import React,{useEffect, useState} from 'react'
//import moment from 'moment'
import { Container, Table } from 'react-bootstrap'
//import { CSVLink } from 'react-csv'

const ReporteAsistenciaPage = ({datosasistencia}) => {
  
  const [asistencia, setAsistencia] = useState([])


  useEffect(() => {
    
    setAsistencia(datosasistencia)
  }, [datosasistencia])
  
  
  return (
       <Container fluid>
      
      <Table striped bordered hover size="sm" className='table'>
      <thead>
        <tr>
          
          <th>Legajo</th>
          <th>Nombre</th>
          <th>Fecha</th>
          <th>Entrada</th>
          <th>Salida</th>
        </tr>
      </thead>
      <tbody>
      {asistencia.map((ele, ind) =>
      
      <tr key={ind}>
          <td>{ele.legajo} </td>
          <td>{ele.apellido}</td>
          <td>{ele.fecha}</td>
          <td>{ele.Hentrada}</td>
          <td>{ele.Hsalida}</td>

      </tr>
      
      )}
      </tbody>
      </Table>
      
     </Container>  
  )
}

export default ReporteAsistenciaPage