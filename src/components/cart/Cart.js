import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";

const Cart = () => {
  const cart = useSelector(state => state.cart.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <CartItems cart={cart} />
      </Grid>
      <Grid item md={3}>
        Cart summary
      </Grid>
    </Grid>
  );
};

export default Cart;
