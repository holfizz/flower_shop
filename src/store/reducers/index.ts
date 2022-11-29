import {combineReducers} from "@reduxjs/toolkit";
import select from "./select";
import CartControl from "./CartControl";


export const rootReducer = combineReducers({
    select : select,
    cartControl:CartControl
})
export type RootReducer = ReturnType<typeof rootReducer>