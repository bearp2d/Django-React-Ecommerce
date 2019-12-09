import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import LoadingButton from "../layouts/LoadingButton";

const useStyles = makeStyles(theme => ({
  sticky: {
    position: "-webkit-sticky",
    position: "sticky",
    bottom: 0
  },
  price: {
    float: "right",
    margin: theme.spacing(2)
  },
  button: {
    margin: theme.spacing(1)
  }
}));

const Cart = () => {
  const {
    cart,
    ui: { loadingUI }
  } = useSelector(state => state);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  if (loadingUI === true) {
    return null;
  }

  if (cart.items_count === 0) {
    return <EmptyCart />;
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <CartItems items={cart.items} editable />
        <Box
          className={classes.sticky}
          boxShadow={3}
          bgcolor="background.paper"
        >
          <LoadingButton
            className={classes.button}
            component={Link}
            to={"/order"}
            variant="contained"
            color="primary"
            size="large"
            display="inline"
          >
            Continue shopping
          </LoadingButton>
          <Typography
            variant="caption"
            display="inline"
            className={classes.price}
          >
            Total price: {cart.total_price}$
          </Typography>
        </Box>
      </Grid>
      <Grid item md={3}>
        <CartSummary cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Cart;
