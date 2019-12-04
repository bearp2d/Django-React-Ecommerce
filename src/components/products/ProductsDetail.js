import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import teal from "@material-ui/core/colors/teal";

import { fetchProduct } from "../../redux/actions/productActions";
import { addToCart } from "../../redux/actions/cartActions";
import { updateFavoriteProducts } from "../../redux/actions/profileActions/FavoriteProductsActions";
import LoadingButton from "../layouts/LoadingButton";
import ProductImages from "./ProductImages";

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
  },
  sizeButton: {
    marginLeft: theme.spacing(1)
  },
  sizes: {
    marginBottom: theme.spacing(1)
  },
  img: {
    border: "1px solid gray",
    padding: "5px",
    marginRight: "10px",
    objectFit: "contain"
  },
  activeImg: {
    border: "1px solid red",
    padding: "5px",
    marginRight: "10px"
  }
}));

const ProductsDetail = ({ match, history }) => {
  const { slug } = match.params;
  const dispatch = useDispatch();
  const {
    product,
    product: { colors, sizes }
  } = useSelector(state => state.products);
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
  const [orderSize, setOrderSize] = useState();
  const classes = useStyles();

  useEffect(() => {
    setOrderSize(product.default_size);
  }, [product]);

  useEffect(() => {
    dispatch(fetchProduct(slug));
  }, [dispatch, slug]);

  const handleAddToCart = () => {
    if (isAuthenticated) {
      dispatch(addToCart(product.id, orderSize, history));
    }
    history.push("/login");
  };

  const handleAddToFavProducts = () => {
    if (isAuthenticated) {
      dispatch(updateFavoriteProducts(product.id));
    }
    history.push("/login");
  };

  return (
    <div className={classes.root}>
      <Grid container spacing={8}>
        <Grid item>
          <ProductImages product={product} />
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
          {sizes.length !== 0 && (
            <div className={classes.sizes}>
              <Typography display="inline" variant="h6">
                sizes:
              </Typography>
              {sizes.map(size => (
                <Button
                  className={classes.sizeButton}
                  key={size.id}
                  variant={orderSize === size.id ? "contained" : "outlined"}
                  size="small"
                  onClick={() => setOrderSize(size.id)}
                  disabled={!size.available}
                >
                  {size.size} ({`${size.min_size} - ${size.max_size}`})
                </Button>
              ))}
            </div>
          )}
          {colors.lenght !== 0 && (
            <div className={classes.colors}>
              <Typography variant="h6">colors:</Typography>
              {colors.map(color => (
                <Link key={color.id} to={`/products/${color.slug}`}>
                  <img
                    className={classes.img}
                    height="80px"
                    width="70px"
                    src={color.photo_main}
                    alt={color.title}
                  />
                </Link>
              ))}
            </div>
          )}
          {product.available === true && (
            <LoadingButton
              className={`${classes.button} ${classes.buttonGreen}`}
              onClick={handleAddToCart}
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
            onClick={handleAddToFavProducts}
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
