import { useContext } from "react";
import { CreateContextLogin } from "../../context/contextLogin";

export function ContexInfo() {
    const {contextLogin } = useContext(CreateContextLogin)
    console.log('ci', contextLogin);
    
    return (
        <>
            <h2>Infos via context api do react js</h2>

            <p>Email: {contextLogin}</p>
        </>
    )
}