import React,{useState, useEffect} from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { addAgente } from '../../dominio/store/agente-slice'


const FormBusqueda= () => {
    const dispatch = useDispatch()
    //const { legajo } = useSelector(state.legajo)

    const uri = 'http://200.12.136.74:4000/biometrico/'
    //const uri = 'http://localhost:4000/biometrico/'
    const [patronb, setPatronb] = useState('')
    const [agentes, setAgentes] = useState([])
    
    
    useEffect(()=>{
        const buscarAgentes =async ()=>{
          let rutaag = `${uri}agente_name/${patronb}`
          if (patronb.length>0){
          try{
            const res = await axios.get(rutaag)
              
                await setAgentes(res.data)
                
              
          }catch(error){
              console.log(error)
          }
        }
        }
        buscarAgentes()

    },[patronb])


    const buscardatos =()=>{
    
        let legajocondi = document.getElementById('agenteb').value
        let legajo=''
        let condi=''
        if (legajocondi.length===5){
            legajo=legajocondi.slice(0,4)
            condi =legajocondi.slice(4)
        }else if (legajocondi.length=== 6){
            legajo=legajocondi.slice(0,5)
            condi =legajocondi.slice(5)
        }

        console.log(legajo, condi)
        dispatch(addAgente(legajo))
    }

    const onhadleChange =()=>{
        setPatronb(document.getElementById("busqueda").value)
    }


  return (
      <div className="container">
        <div className="row">
            <div className='col-xs-12 col-md-3'>
                <h4>Carga Inasistencias</h4>
            </div>
            
            <div className="col-xs-12 col-md-3 ">
                    <label htmlFor='busqueda'>Ingrese Nombre</label>
                    <input 
                        className='form-control xs'
                        type="text"
                        id="busqueda"
                        onChange={onhadleChange}
                        
                    />
            </div>
            
            <div className="col-xs-12 col-md-4">
                <label htmlFor="agenteb"> Agentes </label>
                <select id="agenteb" className='form-control'>
                    { agentes.length>0 ? agentes.map((age,ind)=>
                        <option key={ind} value={age.legajo.toString() + age.condicion.toString()}>{age.apellido}</option>
                    ):null}
                </select>
            </div>
            
            <div className="col-xs-12 col-md-2">
                    <button className='btn btn-primary'
                    onClick={buscardatos}
                    style={{marginTop:'20px'}}
                    >
                        Ver Datos
                    </button>
            </div>
        </div>
        <br/>
      </div>
  )
}

export default FormBusqueda