import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import teal from "@material-ui/core/colors/teal";

import { fetchProduct } from "../../redux/actions/productActions";
import { updateFavoriteProducts } from "../../redux/actions/profileActions/FavoriteProductsActions";
import LoadingButton from "../layouts/LoadingButton";

const useStyles = makeStyles(theme => ({
  root: {
    padding: "3em 2em"
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "45%"
  },
  buttonGreen: {
    color: theme.palette.common.white,
    backgroundColor: teal[500],
    "&:hover": {
      backgroundColor: teal[600]
    }
  },
  description: {
    whiteSpace: "pre-line",
    marginTop: theme.spacing(2)
  }
}));

const ProductsDetail = ({ match }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();
  const product = useSelector(state => state.products.product);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [dispatch, slug]);

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item>
          <img
            src={product.photo_main}
            alt={product.slug}
            width="400"
            height="400"
          />
        </Grid>
        <Grid item md>
          <Typography variant="h4" gutterBottom>
            {product.title}
          </Typography>
          {product.available === false ? (
            <Typography gutterBottom color="error" variant="h5" component="h2">
              unavailable
            </Typography>
          ) : (
            <React.Fragment>
              {product.discount_price ? (
                <React.Fragment>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="error"
                    component="h2"
                  >
                    {product.discount_percent}%
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    <del>{product.price}</del> {product.discount_price}
                  </Typography>
                </React.Fragment>
              ) : (
                <Typography gutterBottom variant="h5" component="h2">
                  {product.price}
                </Typography>
              )}
            </React.Fragment>
          )}
          {product.available === true && (
            <LoadingButton
              className={`${classes.button} ${classes.buttonGreen}`}
              variant="contained"
              size="large"
            >
              Add to cart
            </LoadingButton>
          )}
          <LoadingButton
            className={classes.button}
            variant="contained"
            color="secondary"
            size="large"
            onClick={() => dispatch(updateFavoriteProducts(product.id))}
          >
            {product.is_favorite_product === false
              ? "Add to favorite products"
              : "Remove from favorite products"}
          </LoadingButton>
          <Typography className={classes.description}>
            {product.description}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProductsDetail;
