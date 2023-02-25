import {useEffect, useState} from 'react'
import {useSelector} from 'react-redux'
import axios from 'axios'


export const useAgenteInfoPersonal = () => {
  
  const {legajo }= useSelector(state=>state.agente)  
  
  
  const [datosAgente, setDatosAgente]=useState(null)

  const [loading, setLoading]=useState(true)
  const [error, setError] = useState('')
  

   useEffect(() => {
        traerDatosAgenteApi()
    
      
   },[legajo])


  
 //
   const traerDatosAgenteApi =async()=>{
    const urlcargos='http://200.12.136.74:4000/cargos/'
    
   try{
     //console.log(`${urlbio}agente_leg/${legajo}`)
     const {data} = await axios.get(`${urlcargos}datosAgente/${legajo}`)
     //console.log(data)
     setDatosAgente(data[0])
   }catch(err){
     setError(err)
   }finally{
     setLoading(false)
   }

  
  }

  
  
  
    return {error, loading, datosAgente}
}
