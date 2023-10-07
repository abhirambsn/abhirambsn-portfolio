import { createContext, useContext, useEffect, useState } from "react";

export const PortfolioContext = createContext();

export const PortfolioProvider = ({ children }) => {
  const [pageVisits, setPageVisits] = useState(0);
  const [dark, setDark] = useState(true);

  const changeTheme = (dark) => setDark(dark);
  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = Number(storedCount) || 0;
    const newCount = initialCount + 1;
    setPageVisits(newCount);
    localStorage.setItem("pageVisits", newCount);
  }, []);
  return (
    <PortfolioContext.Provider
      value={{
        pageVisits,
        dark,
        changeTheme,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolioContext = () => {
  const context = useContext(PortfolioContext);

  if (!context) {
    throw new Error("useMyContext must be used within a PortfolioProvider");
  }

  return context;
};
