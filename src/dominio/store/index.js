import { configureStore } from "@reduxjs/toolkit";

import agenteReducer from "./agente-slice";
import loginReducer from "./login-slice";


export const store= configureStore({
    reducer:{
        agente:agenteReducer,
        login:loginReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      }),
})

