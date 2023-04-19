import { createContext, useContext, useState } from "react";

const StoreContext = createContext();

export function StoreProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegulaminOpen, setIsRegulaminOpen] = useState(false);

  function handleOpen() {
    // change previous state to opposite
    setIsOpen(!isOpen);
  }

  function handleRegulaminOpen() {
    // change previous state to opposite
    setIsRegulaminOpen(!isRegulaminOpen);
  }

  return (
    <StoreContext.Provider
      value={{
        isOpen,
        setIsOpen,
        handleOpen,
        isRegulaminOpen,
        setIsRegulaminOpen,
        handleRegulaminOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  return useContext(StoreContext);
}
