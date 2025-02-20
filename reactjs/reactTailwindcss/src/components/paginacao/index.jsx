import { useState, useEffect } from "react"

function Paginacao({}) {
    const [api, setApi] = useState([])
    
    async function apiJsonServer() {
        try {
            const req = await fetch('http://localhost:8081/produtos')
            if (!req.ok) {
                throw new Error('Api nao estar OK')
            }
            
            const res = await req.json()
            
            setApi(res)

        } catch {
            alert("Erro na api mock server json")
        }
    }
    
    console.log(api);
    

    useEffect(() => {
        apiJsonServer()
    },[])
    
    return (
        <>
            <h1>Paginação </h1>
            
            <div>
                {api.map(({id, nome}) => (
                    <div key={id}>
                        {nome}
                    </div>
                ))}
            </div>
        </>
    )
}

export default Paginacao