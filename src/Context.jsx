import { createContext, useContext } from "react";

const AppContext = createContext();

// eslint-disable-next-line react/prop-types
const AppProvider = ({ children }) => {
  const akaikumogo = "https://avatars.githubusercontent.com/u/98486553?v=4";
  const date = new Date();
  return (
    <AppContext.Provider
      value={{
        akaikumogo,
        date
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
