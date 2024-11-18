// Styles
import { useSelector } from "react-redux";
import CartItem from "../cart-item/index";

import * as Styles from "./styles";
import { selectProductsTotalPrice } from "../../redux/card/cart.selectors";

const Cart = ({ isVisible, setIsVisible }) => {
  const handleEscapeAreaClick = () => setIsVisible(false);

  const { products } = useSelector((rootReducer) => rootReducer.cartReducer)
  console.log('asd',products)

  const productsTotalPrice = useSelector(selectProductsTotalPrice)
  console.log('dd',productsTotalPrice);
  
  return (
    <Styles.CartContainer isVisible={isVisible}>
      <Styles.CartEscapeArea onClick={handleEscapeAreaClick} />
      <Styles.CartContent>
        <Styles.CartTitle>Seu Carrinho</Styles.CartTitle>

        {products.map((product) => (
          <CartItem product={product} key={product.id} />
        ))}

        <Styles.CartTotal>total R${productsTotalPrice}</Styles.CartTotal>
      </Styles.CartContent>
    </Styles.CartContainer>
  );
};

export default Cart;
