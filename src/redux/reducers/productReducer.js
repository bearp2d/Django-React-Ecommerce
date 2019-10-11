import {
  FETCH_PRODUCTS,
  FETCH_PRODUCT,
  UPDATE_FAVORITE_PRODUCTS,
  ADD_TO_CART
} from "../types";

const initialState = {
  pagesCount: null,
  productsCount: null,
  ordering: null,
  maxPrice: null,
  minPrice: null,
  current: null,
  next: null,
  previous: null,
  products: [],
  product: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_PRODUCTS:
      return {
        ...state,
        pagesCount: payload.pages_count,
        productsCount: payload.products_count,
        ordering: payload.ordering,
        maxPrice: payload.max_price,
        minPrice: payload.min_price,
        current: payload.current,
        next: payload.next,
        previous: payload.previous,
        products: payload.products
      };
    case FETCH_PRODUCT:
      return {
        ...state,
        product: payload
      };
    case UPDATE_FAVORITE_PRODUCTS:
      return {
        ...state,
        product: { ...payload }
      };
    case ADD_TO_CART:
      return {
        ...state,
        product: { ...state.product, is_in_cart: true }
      };
    default:
      return state;
  }
};
