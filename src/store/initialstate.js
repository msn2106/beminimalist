import { dummyProducts } from "../constants/products";

export const initialstate = {
  loggedinuser: {
    name: "Mayank",
    code: "msn2106",
    jwt: "",
  },
  products: dummyProducts,
  orders: {},
  knowledge: {},
};
