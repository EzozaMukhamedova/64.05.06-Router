import { createContext, useState, useContext } from "react";

export const NameContext = createContext({
  isDark: false,
  setIsDark: () => {},
  token: undefined,
  setToken: () => {},
});

export function useNameContext() {
  return useContext(NameContext);
}

export function NameProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [token, setToken] = useState(undefined);

  return (
    <NameContext.Provider value={{ isDark, setIsDark, token, setToken }}>
      {children}
    </NameContext.Provider>
  );
}
