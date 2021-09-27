import { createStore, applyMiddleware, combineReducers } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import productReducer from "./productReducer";
import cartReducer from "./orderReducer";
import orderReducer from "./orderReducer";
import thunk from "redux-thunk";

const reducer = combineReducers({
  products: productReducer,
  cart: cartReducer,
  order: orderReducer,
});

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
