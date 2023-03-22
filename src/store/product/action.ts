import {ADD_PRODUCTS} from "./type";

export const addProducts = (prevProducts) => (dispatch) => {
  const newProducts = [...prevProducts];

  return dispatch({
    type: ADD_PRODUCTS,
    payload: newProducts,
  });
};
