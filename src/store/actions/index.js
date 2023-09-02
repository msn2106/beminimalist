// action types
export const GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
export const PUT_USER = "PUT_USER";

// action creators
export function getProducts(products) {
  return {
    type: GET_ALL_PRODUCTS,
    products,
  };
}

export function putUser(user) {
  return {
    type: PUT_USER,
    user,
  };
}
