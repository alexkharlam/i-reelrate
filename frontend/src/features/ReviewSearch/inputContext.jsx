import { createContext, useState } from "react";
import { useQueryString } from "../../hooks/useQueryString";

export const InputContext = createContext();

export const InputProvider = ({ children }) => {
  const initialQuery = useQueryString()?.query || "";

  const [inputValue, setInputValue] = useState(initialQuery);

  return (
    <InputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </InputContext.Provider>
  );
};
