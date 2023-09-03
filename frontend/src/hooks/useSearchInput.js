import { useState } from "react";

export const useSearchInput = function () {
  const [inputValue, setInputValue] = useState("");

  const inputHandler = (e) => setInputValue(e.target.value);
  const clearInput = () => setInputValue("");

  return {
    inputValue,
    inputHandler,
    clearInput,
  };
};
