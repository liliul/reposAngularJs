import React, { useContext } from 'react';
import { MyContext } from './MyProvider'; 

export const MyComponent = () => {
  const { value, setValue } = useContext(MyContext); 

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('Novo valor!')}>Alterar Valor</button>
    </div>
  );
};
