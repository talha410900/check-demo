// MyContext.js
import { createContext, useContext, useState } from 'react';

const MyContext = createContext();

export function useMyContext() {
  return useContext(MyContext);
}

export function Contextprovider({ children }) {
  const [state, setState] = useState({ products: [] });

  // Define your context actions and state management functions here

  return (
    <MyContext.Provider value={{ state, setState }}>
      {children}
    </MyContext.Provider>
  );
}
