import React,{useState} from 'react'
import {SelectorV, LabelF, Boton, ContenedorBoton, Formulario} from '../../styles-components/formularios/FormAgente'
import InputC from '../../elementos/InputComponent'


const cargosDocentes=[
     {
        nivel:1,
        denominacion:'Titular Exclusivo'
     },
     {
        nivel:2,
        denominacion:'Titular Semi Exclusivo'
     },
     {
        nivel:3,
        denominacion:'Adjunto Exclusivo'
     },
     {
        nivel:4,
        denominacion:'Adjunto Semi Exclusivo'
     },

]

const cargosNoDocentes =[
    {
        nivel:1,
        denominacion:'Categoria Nivel 1'
     },
     {
        nivel:2,
        denominacion:'Categoria Nivel 2'
     },
     {
        nivel:3,
        denominacion:'Categoria Nivel 3'
     },
     {
        nivel:4,
        denominacion:'Categoria Nivel 4'
     },
]


const FormularioCargo = () => {
   
    const expresiones = {
        resolucionA: /^[a-zA-Z0-9\_\ \-]{4,60}$/, // Letras, numeros, guion y guion_bajo
        // resolucionA: /^[,a-zA-ZÀ-ÿ\s]{1,50}$/, // Letras y espacios, pueden llevar acentos.
        fecha:/^\d{4}([-/.])(0?[1-9]|1[0-1-2])\1(3[01]|[12][0-9]|0?[1-9])$/,
    }

    
    const [resolucionA, setResolucionA]=useState('')
    const [claustro, setClaustro] = useState('')
    const [nivel, setNivel] = useState(cargosDocentes)
    const [sede, setSede] = useState('')
    const [tcargo, setTCargo] =useState('')
    const [fecharesu, setFecharesu] = useState('')
    const [propuesta, setPropuesta] =useState('')
    const [adicional, setadicional] =useState('')
    
    
    // eleccion claustro
    const changeClaustro =()=>{
        setClaustro(document.getElementById('claustro').value)
        if(document.getElementById('claustro').value ==='1'){
            setNivel(cargosDocentes)
        }else{
            setNivel(cargosNoDocentes)
        }
    }

    const changeSede = ()=>{

    }

    const changeTcargo =()=>{}
    
    
    const onHandleSubmit =(e)=>{
        e.preventDefault()
    }


  return (
    <div className='container mt-2'>
            <h3>Ingresar Datos Cargo</h3>
        <main>
            
            <Formulario onSubmit={onHandleSubmit}>

           

            <div>
                <LabelF htmlFor='sede'>Sede</LabelF>
                <SelectorV name="sede" id='sede' onChange={changeSede}>
                    <option value="1">Mendoza</option>
                    <option value="2">San Rafael</option>
                    <option value="3">Gral.Alvear</option>
                    <option value="4">Sede Este</option>
                </SelectorV>

            </div>
 
              <div>
                <LabelF htmlFor='claustro'>Claustro</LabelF>
                <SelectorV name="claustro" id='claustro' onChange={changeClaustro}>
                    <option value="1">Docente</option>
                    <option value="2">No Docente</option>
                    <option value="3">Gestion Coordinador</option>
                    <option value="4">Gestion Org.Ejecutores</option>
                </SelectorV>

            </div>
            <div>
                <LabelF htmlFor='tcargo'>Tipo Cargo</LabelF>
                <SelectorV name="tcargo" id='tcargo' onChange={changeTcargo}>
                    <option value="1">Efectivo</option>
                    <option value="2">Interino</option>
                    <option value="3">Contratado</option>
                    <option value="4">Remplazo Interino</option>
                </SelectorV>

            </div>
            <div>
                <LabelF htmlFor='Nivel'>Nive <InputC 
                tipo='text'
                name='nroreso'
                infoplace='Nro Resolucion de Alta'
                estado={resolucionA}
                cambiarEstado={setResolucionA}
                label='Nro.Resolición de Alta'
                leyendaErr='no menor de 4 y no mayor a 60 caracteres'
                expreg={expresiones.resolucionA}
            />l Cargo</LabelF>
                <SelectorV name="nivel" id='nivel' onChange={changeClaustro}>
                    {nivel.map((nv,index)=>(
                    <option value={nv.nivel} key={index}>{nv.denominacion}</option>
                    ))}
                </SelectorV>

            </div>

            <div>
                <LabelF htmlFor='propuesta'>Propuesta Academica</LabelF>
                <SelectorV name="propuesta" id='propuesta' onChange={changeTcargo}>
                    <option value="1701">1701-Embalajes y Envios de vinos a todo cuyo</option>
                    <option value="3231">3231-Introduccion a la Economia LA</option>
                    <option value="3241">3241-Introdiuccion a la Economia</option>
                    <option value="4120">4120-Matematica II</option>
                </SelectorV>

            </div>
            <div>
                <LabelF htmlFor='adicional'>Adicional</LabelF>
                <SelectorV name="adicional" id='adicional' onChange={changeTcargo}>
                    <option value="0">Sin Adicional</option>
                    <option value="FC">Funcion Critica Doc</option>
                    <option value="MR">Mayor Responzabilidad</option>
                    <option value="MD">Mayor Dedicacion</option>
                </SelectorV>

            </div>
            <InputC 
                tipo='text'
                name='nroreso'
                infoplace='Nro Resolucion de Alta'
                estado={resolucionA}
                cambiarEstado={setResolucionA}
                label='Nro.Resolición de Alta'
                leyendaErr='no menor de 4 y no mayor a 60 caracteres'
                expreg={expresiones.resolucionA}
            />

               

                <InputC 
                    tipo='text'
                    name='fechaResalta'
                    infoplace='aaaa-mm-dd'
                    estado={fecharesu}
                    cambiarEstado={setFecharesu}
                    label='Fecha Alta Resolucion'
                    leyendaErr='la fecha tiene que tener unformato como 2000-08-14'
                    expreg={expresiones.fecha}
                />        


            <ContenedorBoton>
                <Boton type='submit'>Enviar</Boton>
                
             </ContenedorBoton>

            </Formulario>

        </main>
        
    </div>
  )
}

export default FormularioCargo