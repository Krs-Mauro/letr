import { useContext, createContext, useState, useCallback } from "react";

const AppContext = createContext();

const AppContextProvider = ({ children }) => {
  const [wordList, setWordList] = useState([]);

  const value = {
    wordList,
    setWordList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("App context must be called inside a App context provider");
  }
  return context;
};

export { AppContextProvider, useAppContext };
