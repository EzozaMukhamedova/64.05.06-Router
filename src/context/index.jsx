import { createContext, useState, useEffect, useContext } from "react";

export const NameContext = createContext({
  isDark: false,
  setIsDark: () => {},
  token: undefined,
  setToken: () => {},
  products: [],
  addProduct: () => {},
});

export function useNameContext() {
  return useContext(NameContext);
}

export function NameProvider({ children }) {
  const [isDark, setIsDark] = useState(false);
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || undefined
  );
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const addProduct = (product) => {
    setProducts((prevProducts) => [...prevProducts, product]);
  };

  useEffect(() => {
    if (token === undefined) {
      localStorage.removeItem("token");
    } else {
      localStorage.setItem("token", token);
    }
  }, [token]);

  return (
    <NameContext.Provider
      value={{
        isDark,
        setIsDark,
        token,
        setToken,
        products,
        addProduct,
        cart,
        setCart,
      }}
    >
      {children}
    </NameContext.Provider>
  );
}
