import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <CartItems items={cart.items} />
      </Grid>
      <Grid item md={3}>
        <CartSummary cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Cart;
