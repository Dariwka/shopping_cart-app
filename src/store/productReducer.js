import * as actionTypes from "./actions";

const productReducer = (state = [], action) => {
  switch (action.type) {
    case actionTypes.INIT_PRODUCTS:
      return action.payload;
    default:
      return state;
    case actionTypes.FILTER_BY_CATEGORY:
      return {
        ...state,
        category: action.payload.category,
        filteredItems: action.payload.items,
      };
  }
};

export default productReducer;
