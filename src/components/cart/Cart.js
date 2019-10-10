import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";

const Cart = () => {
  const items = useSelector(state => state.cart.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <CartItems items={items} />
      </Grid>
      <Grid item md={3}>
        Cart summary
      </Grid>
    </Grid>
  );
};

export default Cart;
