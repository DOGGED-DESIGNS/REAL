import { createContext, useReducer, useState } from "react";
import Reducer from "./Reducer";

export const Contextprovider = createContext();

const Generalprovider = (prop) => {
  const { Real } = Reducer();

  const [proper, setProper] = useState(true);

  const [errorp, setErrorp] = useState(false);

  const [small, setSmall] = useState(false);

  const [singleLoad, setSingleLoad] = useState(true);

  const [realdata, dispatch] = useReducer(Real, []);
  return (
    <Contextprovider.Provider
      value={{
        realdata,
        proper,
        singleLoad,
        setSingleLoad,
        dispatch,
        setProper,
        errorp,
        setErrorp,
        small,
        setSmall,
      }}
    >
      {prop.children}
    </Contextprovider.Provider>
  );
};

export default Generalprovider;
