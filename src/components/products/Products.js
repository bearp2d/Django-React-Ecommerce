import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchProducts } from "../../redux/actions/productActions";
import ProductItem from "./ProductItem";
import Pagination from "../layouts/Pagination";
import Ordering from "../layouts/Ordering";

const Products = ({ location }) => {
  const products = useSelector(state => state.products.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [location.search]);

  return (
    <React.Fragment>
      <Ordering />
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid item md={3}>
            <ProductItem product={product} />
          </Grid>
        ))}
      </Grid>
      <Pagination />
    </React.Fragment>
  );
};

export default Products;
