import { useState } from "react";
import { isBrowser } from "browser-or-node";

export default function useLocalStorage(key, initialValue, onInit = null) {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) {
      return initialValue;
    }
    let valueFromStorage = localStorage.getItem(key);

    if (valueFromStorage) {
      try {
        valueFromStorage = JSON.parse(valueFromStorage);
        if (onInit && onInit instanceof Function) {
          onInit(valueFromStorage);
        }
        return valueFromStorage;
      } catch (error) {
        console.log(error);
        return initialValue;
      }
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);

      if (isBrowser) {
        localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}
