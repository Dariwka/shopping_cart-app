import * as actionTypes from "./actions";

const cartReducer = (state = [], action) => {
  let updatedCart;
  let updatedItemIndex;
  switch (action.type) {
    case actionTypes.INIT_CART:
      return action.payload;
    case actionTypes.ADD_PRODUCT:
      updatedCart = [...state];
      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload.id
      );
      if (updatedItemIndex < 0) {
        updatedCart.push({ ...action.payload, qyantity: 1 });
      } else {
        const updatedItem = {
          ...updatedCart[updatedItemIndex],
        };
        updatedItem.quantity++;
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;

    case actionTypes.REMOVE_PRODUCT:
      updatedCart = [...state];

      updatedItemIndex = updatedCart.findIndex(
        (item) => item.id === action.payload
      );

      const updatedItem = {
        ...updatedCart[updatedItemIndex],
      };
      updatedItem.quantity--;
      if (updatedItem.quantity <= 0) {
        updatedCart.splice(updatedItemIndex, 1);
      } else {
        updatedCart[updatedItemIndex] = updatedItem;
      }
      return updatedCart;
    default:
      return state;
  }
};

export default cartReducer;
