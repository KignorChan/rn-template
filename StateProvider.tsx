import React, { createContext, useContext, useReducer } from "react";

interface GlobalState {

}

const defaultGlobalState: GlobalState = {

};
const GlobalStateContext = createContext(defaultGlobalState);
const DispatchStateContext = createContext<any>(undefined);

export const useGlobalState = (): [GlobalState, any] => [
  useContext(GlobalStateContext),
  useContext(DispatchStateContext),
];

const GlobalStateProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(
    (state: any, newValue: any) => ({ ...state, ...newValue }),
    defaultGlobalState
  );
  return (
    <GlobalStateContext.Provider value={state}>
      <DispatchStateContext.Provider value={dispatch}>
        {children}
      </DispatchStateContext.Provider>
    </GlobalStateContext.Provider>
  );
};

export default GlobalStateProvider;
