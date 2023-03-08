import { useDispatch, useSelector } from "react-redux";

import { selectCartItems } from "../../store/cart/cart.selector";
import {
  addItemToCart,
  removeItemFromCart,
  clearItemFromCart,
} from "../../store/cart/cart.action";

import {
  CheckoutItemContainer,
  ImageContainer,
  Img,
  Detail,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from "./checkout-item.styles.jsx";

const CheckoutItem = ({ item }) => {
  const { name, imageUrl, price, quantity } = item;

  const dispatch = useDispatch();
  const cartItems = useSelector(selectCartItems);

  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems, item));
  const addItemHandler = () => dispatch(addItemToCart(cartItems, item));
  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems, item));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <Img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Detail>{name}</Detail>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <Detail>${price}</Detail>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
