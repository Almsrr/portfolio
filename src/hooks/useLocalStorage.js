import { useState } from "react";
import { isBrowser } from "browser-or-node";

export default function useLocalStorage(key, initialValue, callback = null) {
  const [storedValue, setStoredValue] = useState(() => {
    if (!isBrowser) {
      return initialValue;
    }
    let valueFromStorage = localStorage.getItem(key);

    if (valueFromStorage) {
      try {
        valueFromStorage = JSON.parse(valueFromStorage);
        if (callback && callback instanceof Function) {
          callback(valueFromStorage);
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
