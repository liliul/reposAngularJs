import { useContext } from "react"
import { CreateContextLogin } from "../../context/contextLogin"

export function ContextLoginComponent() {
    const {setContextLogin, setContextProfile, contextProfile, setContextSenha} = useContext(CreateContextLogin)
    console.log('contextProfile login = false: ',contextProfile);
    
    return (
        <>
            <input 
                type="text"
                placeholder="Texto"
                onChange={(event) => {
                    setContextLogin(event.target.value)
                }}
            />

            <input 
                type="password"
                placeholder="Senha"
                onChange={(event) => {
                    setContextSenha(event.target.value)
                }}
            />

            <button 
                onClick={() => setContextProfile(true)}
            >
                Fazer Login
            </button>
        </>
    )
}