import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Grid from "@material-ui/core/Grid";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";

const Cart = () => {
  const {
    cart,
    ui: { loadingUI }
  } = useSelector(state => state);
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
      </Grid>
      <Grid item md={3}>
        <CartSummary cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Cart;
