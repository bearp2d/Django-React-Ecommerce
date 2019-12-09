import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import UpdateCartItem from "./UpdateCartItem";

const useStyles = makeStyles(theme => ({
  img: {
    width: "125px",
    height: "125px",
    margin: "auto",
    objectFit: "contain"
  },
  m2: {
    margin: theme.spacing(2)
  },
  mt1: {
    marginTop: theme.spacing(1)
  },
  link: {
    textDecoration: "none"
  },
  price: {
    float: "right",
    marginRight: theme.spacing(2)
  }
}));

const getPrice = product => (
  <React.Fragment>
    {product.discount_price ? (
      <Typography display="inline" variant="body1">
        <del style={{ color: "grey" }}>{product.price}$</del>{" "}
        {product.discount_price}$
      </Typography>
    ) : (
      <Typography display="inline" variant="body1">
        {product.price}$
      </Typography>
    )}
  </React.Fragment>
);

const CartItem = ({ editable, item, item: { product } }) => {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Grid container spacing={2}>
        <Grid className={classes.m2} alignContent="center" item md={2}>
          <Link to={`/products/${product.slug}`}>
            <img
              alt={product.slug}
              className={classes.img}
              src={product.photo_main}
            />
          </Link>
        </Grid>
        <Grid className={classes.m2} item md>
          <Typography
            className={classes.link}
            color="inherit"
            component={Link}
            to={`/products/${product.slug}`}
          >
            {product.title}
          </Typography>
          <Typography className={classes.mt1} variant="subtitle1">
            Size: {item.size.size}
          </Typography>
          <Typography className={classes.mt1} variant="subtitle1">
            Unit price: {getPrice(product)}
          </Typography>
          <div className={classes.mt1}>
            <Typography className={classes.price} variant="h6">
              {item.total_price}$
            </Typography>
            {editable ? (
              <UpdateCartItem
                id={item.id}
                available_count={item.size.available_count}
                quantity={item.quantity}
              />
            ) : (
              <Typography>Quantity: {item.quantity}</Typography>
            )}
          </div>
        </Grid>
      </Grid>
      <Divider />
    </React.Fragment>
  );
};

export default CartItem;
