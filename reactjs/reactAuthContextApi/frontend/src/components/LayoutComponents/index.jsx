import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

import SingOutButton from "../../components/singOutButton";

import "./styles.css";

export const LayoutComponents = (props) => {
  const { signed } = useContext(AuthContext)
  return (
    <div className="container">
      <div className="container-login">
        {signed === true ? <SingOutButton /> : ''}

        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
