import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

import { fetchCart } from "../../redux/actions/cartActions";
import CartItems from "./CartItems";
import CartSummary from "./CartSummary";
import EmptyCart from "./EmptyCart";
import LoadingButton from "../layouts/LoadingButton";

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
        <Box
          boxShadow={3}
          bgcolor="background.paper"
          style={{
            position: "-webkit-sticky",
            position: "sticky",
            bottom: 0
          }}
        >
          <LoadingButton
            style={{ margin: "8px", minWidth: "320px" }}
            component={Link}
            to={"/order"}
            variant="contained"
            color="primary"
            size="large"
            display="inline"
          >
            Continue the shopping process
          </LoadingButton>
          <Typography
            display="inline"
            style={{
              float: "right",
              margin: "16px"
            }}
          >
            The amount payable: {cart.total_price}$
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
