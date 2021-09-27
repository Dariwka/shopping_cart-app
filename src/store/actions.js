import { getProducts } from "../services/products";
export const INIT_CART = "INIT_CART";
export const INIT_PRODUCTS = "INIT_PRODUCTS";
export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const FILTER_BY_CATEGORY = "FILTER_BY_CATEGORY";
export const CREATE_ORDER = "CREATE_ORDER";
export const CLEAR_ORDER = "CLEAR_ORDER";
export const FETCH_ORDERS = "FETCH_ORDERS";

export const initializeState = () => {
  return async (dispatch) => {
    const products = await getProducts();
    dispatch({
      type: INIT_PRODUCTS,
      payload: products,
    });
  };
};
export const addProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: ADD_PRODUCT,
      payload: productId,
    });
  };
};

export const removeProduct = (productId) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_PRODUCT,
      payload: productId,
    });
  };
};

export const filterProducts = (products, category) => (dispatch) => {
  dispatch({
    type: FILTER_BY_CATEGORY,
    payload: {
      category: category,
      items:
        category === ""
          ? products
          : products.filter((x) => x.availablecategory.indexOf(category) >= 0),
    },
  });
};
