import { ADD_PRODUCTS } from "./type";

const initialState = {
  server: "",
  client: "",
  products: [],
};

// Creating my reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCTS:
      return { ...state, products: action.payload };
    default:
      return state;
  }
}