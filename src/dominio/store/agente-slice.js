import { createSlice } from "@reduxjs/toolkit";



const initialState={
    legajo:'',

    }

const agenteSlice = createSlice({
    name:"agente",
    initialState,
    reducers:{
        addAgente:(state, action)=>({
        legajo:action.payload,  
        
           })
    }
})

export const  {addAgente} = agenteSlice.actions

export default agenteSlice.reducer
