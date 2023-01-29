import React, { createContext, useContext, useReducer } from "react";

//Dis ist die Data Layer / Creation of data layer
export const StateContext = createContext();

//We Wrap our app now with a Provider
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );

//Data Layer se info pull kar rahe
export const useStateValue = () => useContext(StateContext);