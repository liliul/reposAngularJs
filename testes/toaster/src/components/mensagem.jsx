
import React from 'react';
import { toast } from '../hooks/to-toast';

export const SomeComponent = () => {
    const handleClick = () => {
        // Chama a função success do toast
        toast.success('Operação realizada com sucesso!');
    };

    return <button onClick={handleClick}>Clique aqui</button>;
};
