import { createContext, useReducer } from "react";

export const stateContext = createContext();

export const StateProvider = ({ initialState, reducer, children }) => {
    return <stateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </stateContext.Provider>
}
const real = "real"