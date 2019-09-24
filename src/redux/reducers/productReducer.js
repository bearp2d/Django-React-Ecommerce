import { FETCH_PRODUCTS } from "../types";

const initialState = {
  pagesCount: null,
  productsCount: null,
  perPage: null,
  current: null,
  next: null,
  previous: null,
  products: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        pagesCount: payload.pages_count,
        productsCount: payload.products_count,
        perPage: payload.per_page,
        current: payload.current,
        next: payload.next,
        previous: payload.previous,
        products: payload.products
      };
    default:
      return state;
  }
};
