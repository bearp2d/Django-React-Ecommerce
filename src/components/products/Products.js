import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "../../redux/actions/productActions";
import ProductItem from "./ProductItem";
import Grid from "@material-ui/core/Grid";

const Products = () => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item md={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
    </React.Fragment>
  );
};

export default Products;
