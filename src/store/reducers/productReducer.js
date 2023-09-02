import { initialstate } from "../initialstate";
import { GET_ALL_PRODUCTS } from "../actions";

const initialProductState = initialstate.products;
const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case GET_ALL_PRODUCTS:
      return { ...state, ...action.products };
    default:
      return state;
  }
};

export default productReducer;
