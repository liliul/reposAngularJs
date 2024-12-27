import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import './index.css';

const SingOutButton = () => {
    const { singOut } = useContext(AuthContext)

    return (
        <div className="c-sing-out-button">
            <button onClick={singOut} className="sing-out-button">SingOut</button>
        </div>
    )
}

export default SingOutButton;