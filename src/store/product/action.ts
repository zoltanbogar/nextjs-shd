import {ADD_PRODUCTS} from "./type";

export const addProducts = (prevProducts: any) => (dispatch: (arg0: { type: string; payload: any[]; }) => any) => {
  const newProducts = [...prevProducts];

  return dispatch({
    type: ADD_PRODUCTS,
    payload: newProducts,
  });
};
