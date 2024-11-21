import React, { useContext } from 'react';
import { MyContext } from './MyProvider'; 

export const MyComponent = () => {
  const { value, setValue } = useContext(MyContext); 
  console.log(value)
  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('novo value Som goku z')}>Alterar Valor</button>
      {/* <button onClick={() => setValue(value + 1)}>Alterar Valor</button> */}
    </div>
  );
};
