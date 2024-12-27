import SingOutButton from "../../components/singOutButton";

import "./styles.css";

export const LayoutComponents = (props) => {
  return (
    <div className="container">
      <div className="container-login">
        <SingOutButton />
        
        <div className="wrap-login">{props.children}</div>
      </div>
    </div>
  );
};
