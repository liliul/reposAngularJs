import { useState, useEffect } from "react"

function Paginacao({}) {
    const [api, setApi] = useState([])
    const [paginaAtual, setPaginaAtual] = useState(0)
    
    
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
    
    console.log(api.length);
    

    useEffect(() => {
        apiJsonServer()
    },[])


    const paginas = 2
    const totalDePaginas = Math.ceil(api.length / paginas)
    console.log(totalDePaginas);
    
    const inicioPage = paginaAtual * paginas
    const finalPage = inicioPage + paginas
    const novaPagina = (index) => setPaginaAtual(index)
    const menosPagina = () => setPaginaAtual(index => index === 0 ? index : index - 1)
    const disabledPaginaInicial = paginaAtual === 0
    const maisPagina = () => setPaginaAtual(index => index + 1 === totalDePaginas ? index : index + 1)
    const disabledPaginaFinal = paginaAtual + 1 === totalDePaginas
    

    return (
        <>
            <h1>Paginação</h1>
            
            <section className="grid grid-cols-2 gap-2 place-content-center p-3">
                {api.length > 0 && api.slice(inicioPage, finalPage).map(({id, nome, descricao, preco, categoria_id}) => (
                    <article
                     className="p-3 rounded-lg border border-gray-600 w-full" 
                     key={id}
                    >
                        <span className="text-red-600">Categoria: {categoria_id}</span>

                        <h1 className="mt-4 mb-1">{nome}</h1>

                        <p className="mb-3">{descricao}</p>

                        <strong className="text-blue-600">R${preco}</strong>
                    </article>
                ))}

                
            </section>

            <div className="w-full">
                <ul className="flex gap-2 justify-center">

                    <li>
                        <button
                            disabled={disabledPaginaInicial}
                            className={disabledPaginaInicial ? 'text-red-500' : ''}
                            onClick={menosPagina}
                        >
                            {'<'}
                        </button>
                    </li>
                
                    {Array.from({length: totalDePaginas}, (_, index) => {
                        const atualPagina = paginaAtual === index
                        console.log(atualPagina);
                        console.log(paginaAtual);
                        console.log(index);
                        

                        return (
                            <li key={index}>
                                <button
                                    disabled={atualPagina}
                                    className={`rounded-sm border border-purple-500 p-1 ${atualPagina ? 'text-yellow-50 bg-red-800' : ''}`}
                                    onClick={() => novaPagina(index)}
                                >
                                    {index + 1}
                                </button> 
                            </li>
                        )    
                    })}
                    

                    <li>
                        <button
                            disabled={disabledPaginaFinal}
                            className={disabledPaginaFinal ? 'text-red-500' : ''}
                            onClick={maisPagina}
                        >
                            {'>'}
                        </button>
                    </li>
                </ul>
            </div>
        </>
    )
}

export default Paginacao