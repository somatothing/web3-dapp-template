import React, { createContext, useReducer } from "react";

const GlobalStateContext = createContext();

const initialState = {
  stakingData: null,
  tokenPrices: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_STAKING_DATA":
      return { ...state, stakingData: action.payload };
    case "SET_TOKEN_PRICES":
      return { ...state, tokenPrices: action.payload };
    default:
      return state;
  }
};

export const GlobalStateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <GlobalStateContext.Provider value={{ state, dispatch }}>
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = () => React.useContext(GlobalStateContext);
