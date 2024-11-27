import React, { useRef, useEffect, useState } from 'react';

function EvitarRecriarFunction() {
    const [timer, setTime] = useState()
   const timerRef = useRef();

  useEffect(() => {
    const intervalId = setInterval(() => {
      console.log('Timer running');
    }, 1000);
    
    setTime(timerRef.current = intervalId);

    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h1>Timer ativo ({timer})</h1>
    </div>
  );
}

export default EvitarRecriarFunction;
