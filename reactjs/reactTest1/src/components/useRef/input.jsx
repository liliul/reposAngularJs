import React, { useEffect, useRef } from 'react';

function FocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    // Focar no campo de entrada assim que o componente for montado
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} type="text" placeholder="Foque aqui!" />;
}

export default FocusInput;
