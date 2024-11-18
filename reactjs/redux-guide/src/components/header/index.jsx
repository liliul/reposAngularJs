import { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux"

// Components
import Cart from "../cart/index";

// Styles
import * as Styles from "./styles";

import { loginUser, logoutUser } from "../../redux/user/actions";
import { Logando } from "../login";
// import { selectProductsCount } from "../../redux/card/cart.selectors";

function Header() {
  const [cartIsVisible, setCartIsVisible] = useState(false);

  const { currentUser } = useSelector((rootReducer) => rootReducer.userReducer);
  const { products } = useSelector((rootReducer) => rootReducer.cartReducer);

  const dispatch = useDispatch();

  const productCount = useMemo(() => {
    return products.reduce((acc, curr) => acc + curr.quantity, 0)
  }, [products])

    // const productCount = useSelector(selectProductsCount)

  console.log(currentUser);
  
  const handleCartClick = () => {
    setCartIsVisible(true);
  };

  const handleLoginClick = () => {
    dispatch(loginUser({name: "Liliul", email: "liliul@email.com"}))
  }

  const handleLogoutClick = () => {
    dispatch(logoutUser())
  }
  return (
    <Styles.Container>
      <Styles.Logo>Redux Shopping</Styles.Logo>
      <Styles.Buttons>
        {currentUser ? (
          <Styles.LogadoContainer>
            <Logando userName={currentUser.name} userEmail={currentUser.email} />
            
            <div onClick={handleLogoutClick}>Sair</div>
          </Styles.LogadoContainer>
        ): (
          <div onClick={handleLoginClick}>Login</div>
        )}
        <div onClick={handleCartClick}>Carrinho ({productCount})</div>
      </Styles.Buttons>

      <Cart isVisible={cartIsVisible} setIsVisible={setCartIsVisible} />
    </Styles.Container>
  );
}

export default Header;
