import React, { useRef, useState } from 'react';

function Timer() {
    const [resCount, setResCount] = useState(0)
    // const [resCount, setResCount] = useState()
    // const countRef = useRef(0);
    const countRef = useRef(1);
    console.log('ref', countRef);

  const increment = () => {
    console.log('Contador atual:', countRef.current);
    setResCount(countRef.current++);
  };

  return (
    <div>
        <h3>resCount: {resCount}</h3>
      <button onClick={increment}>Incrementar</button>
    </div>
  );
}

export default Timer;
