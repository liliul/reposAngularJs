import React, { createContext, useState } from 'react';

export const RenderizandoJson = createContext();

const RenderProvider = ( { children }) => {
    const [isJson, setIsJson] = useState([])
    return (
        <RenderizandoJson.Provider value={{ isJson, setIsJson }} >
            { children }
        </RenderizandoJson.Provider>
    )
}

export default RenderProvider