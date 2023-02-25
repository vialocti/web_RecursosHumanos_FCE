import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'


export const useAgenteCargos = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  const [cargosAgente, setCargosAgente]=useState([])
  const [cargoshAgente, setCargoshAgente]=useState([])
  const[loading, setLoading]=useState(true)  
  const [error, setError] = useState('')
  

   useEffect(() => {
      traerCargosAgenteApi()
      traerCargosHAgenteApi()
    
   
      
   },[legajo])


   //
   const traerCargosAgenteApi =async()=>{
     const urlcargos='http://200.12.136.74:4000/cargos/'
     
    try{
      
      const {data} = await axios.get(`${urlcargos}cargosvigentes/${legajo}`)
      //console.log(data)
      setCargosAgente(data)
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }

   
   }

   const traerCargosHAgenteApi =async()=>{
    const urlcargos='http://200.12.136.74:4000/cargos/'
    
   try{
     
     const {data} = await axios.get(`${urlcargos}cargoshistoricos/${legajo}`)
     //console.log(data)
     setCargoshAgente(data)
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  
  }
  
    
  
    return {error, loading, cargosAgente,cargoshAgente}
}
