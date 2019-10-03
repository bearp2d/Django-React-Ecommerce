import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../redux/actions/productActions";

const ProductsDetail = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [dispatch, slug]);

  return (
    <div>
      <h1>detail page</h1>
    </div>
  );
};

export default ProductsDetail;
