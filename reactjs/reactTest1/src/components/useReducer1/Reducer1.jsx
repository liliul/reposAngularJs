import { useReducer, useState } from "react"

const initialState = { contar: 0 }

const actions = {
    double: 'multiplica',
    half: 'divisao',
    limpar: 'limpar',

    custom: 'custom',
}

function reducer(state, action) {
    switch (action.type) {
        case 'decrement':
            return { contar: state.contar -  1 }
        case 'increment':
            return { contar: state.contar + 1 }

        case actions.double:
            return { contar: state.contar * 2 }
        case actions.half:
            return { contar: state.contar / 2 }
        case actions.limpar:
            return { contar: initialState.contar }
        
        case actions.custom:
            return { contar: action.payload }
        default:
            return state;
    }
}

export function ContandoComReducer() {
    const [state, dispatch] = useReducer(reducer, initialState)
    const [customContar, setCustomContar] = useState(0)

    function handleSubmit(e) {
        e.preventDefault()
        console.log('contar', customContar);
        
        dispatch({ type: actions.custom, payload: customContar })
    }

    return (
        <>
            <div>
                <h1>Contando com useReducer</h1>

                <strong>{state.contar}</strong>
                <br />

                <button onClick={() => dispatch({type: 'decrement'})}>-</button>
                <button onClick={() => dispatch({type: 'increment'})}>+</button>

                <br />

                <button onClick={() => dispatch({type: actions.double})}>*</button>
                <button onClick={() => dispatch({type: actions.half})}>/</button>

                <br />

                <button onClick={() => dispatch({type: actions.limpar})}>Limpar</button>

                <br />
                <hr />

                <form onSubmit={handleSubmit}>
                    <label htmlFor="custom_value">Inserir valor custom</label>
                    <input 
                        id="custom_value"
                        type="number" 
                        value={customContar}
                        onChange={(e) => setCustomContar(e.target.value)}
                    />

                    <button type="submit">Novo valor</button>
                </form>
            </div>
        </>
    )
}