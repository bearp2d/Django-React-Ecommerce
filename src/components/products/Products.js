import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import { fetchProducts } from "../../redux/actions/productActions";
import ProductItem from "./ProductItem";
import Pagination from "../layouts/Pagination";
import Ordering from "../layouts/Ordering";
import Filters from "../layouts/Filters";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  products: {
    marginTop: theme.spacing(2)
  }
}));

const Products = ({ location }) => {
  const products = useSelector(state => state.products.products);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(location.search));
  }, [location.search]);

  return (
    <Grid container spacing={2} className={classes.root}>
      <Grid item md={3}>
        <Filters />
      </Grid>
      <Grid item md>
        <Ordering />
        <Grid container spacing={2}>
          {products.map(product => (
            <Grid key={product.id} item md={3} className={classes.products}>
              <ProductItem product={product} />
            </Grid>
          ))}
        </Grid>
        <Pagination location={location} />
      </Grid>
    </Grid>
  );
};

export default Products;
