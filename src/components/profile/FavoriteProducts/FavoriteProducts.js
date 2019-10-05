import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchFavoriteProducts } from "../../../redux/actions/profileActions/FavoriteProductsActions";
import ProductItem from "../../products/ProductItem";

const FavoriteProducts = ({ history }) => {
  console.log(history);
  const dispatch = useDispatch();
  const products = useSelector(state => state.profile.favoriteProducts);

  useEffect(() => {
    dispatch(fetchFavoriteProducts());
  }, [dispatch]);

  return (
    <div style={{ marginTop: "30px" }}>
      <Grid container spacing={2}>
        {products.map(product => (
          <Grid key={product.id} item md={3}>
            <ProductItem product={product} history={history} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default FavoriteProducts;
