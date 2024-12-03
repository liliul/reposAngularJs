import { useContext } from "react"
import { CreateContextLogin } from "../../context/contextLogin"

export function ContextProfileComponent() {
    const {contextLogin} = useContext(CreateContextLogin)
    return (
        <>
            <h2>Profile Component</h2>

            <p>Usuario: {contextLogin}</p>
            <p>Senha: </p>
        </>
    )
}