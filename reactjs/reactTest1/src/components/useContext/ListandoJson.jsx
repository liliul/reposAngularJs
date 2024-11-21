import React, { useContext, useEffect } from 'react';
import { RenderizandoJson } from './RenderListJson';

const itemsDoArray = [
    {
        "name": "Naruto Uzumaki",
        "city": "konoha",
        "poder": "Rasingan"
    },
    {
        "name": "Som Goku",
        "city": "Vegeta",
        "poder": "Kame kame haa"
    },
    {
        "name": "Wolverine",
        "city": "Eua",
        "poder": "Adiamantio"
    }
]

export function ListandoJson() {
    const { isJson, setIsJson } = useContext(RenderizandoJson);
    console.log(isJson);
    
    useEffect(() => {
        setIsJson(itemsDoArray)
    }, [setIsJson])
    return (
        <>
            <h1>Context Render List</h1>

            {isJson.map((list, index) => (
                <ul key={index}>
                    <li>{list.name}</li>
                    <li>{list.city}</li>
                    <li>{list.poder}</li>
                </ul>
            ))}
        </>
    )
}