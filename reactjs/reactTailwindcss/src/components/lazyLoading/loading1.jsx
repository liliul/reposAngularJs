import React, { useEffect, useState } from 'react';

function Loading() {
    const [isTime, setIsTime] = useState('')

    useEffect(() => {
       const isLoading = setTimeout(() => {setIsTime('Goku vs Naruto')}, [3000])

       return () => clearTimeout(isLoading)
    }, [])
    
  return <div>{isTime} Lazy Loading!</div>;
}

export default Loading
