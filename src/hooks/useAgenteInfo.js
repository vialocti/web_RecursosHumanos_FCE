import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'


export const useAgenteInfo = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  const [agente, setAgente]=useState(null)
  const[loading, setLoading]=useState(true)  
  const [error, setError] = useState('')
  

   useEffect(() => {
      traerAgenteApi()
    
   
      
   },[legajo])


   //
   const traerAgenteApi =async()=>{
     const urlbio='http://200.12.136.74:4000/biometrico/'
     
    try{
      //console.log(`${urlbio}agente_leg/${legajo}`)
      const {data} = await axios.get(`${urlbio}agente_leg/${legajo}`)
      //console.log(data)
      setAgente(data[0])
    }catch(err){
      setError(err)
    }finally{
      setLoading(false)
    }

   
   }
  
    
  
    return {error, loading, agente}
}
