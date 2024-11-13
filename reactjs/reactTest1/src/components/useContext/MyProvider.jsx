import React, { createContext, useState } from 'react';

export const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [value, setValue] = useState('Texto do Contexto');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider