import { configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "reducer";

import logger from "redux-logger";


export const store = configureStore(
    {
        reducer : rootReducer,
        devTools : process.env.NODE_ENV === 'development', // 조건식을 활용해서 boolean
        middleware : (defaultMiddleware)=> {
            if(process.env.NODE_ENV === 'development'){
                return [...defaultMiddleware(), logger]
            }
            return defaultMiddleware();
        }
    });
