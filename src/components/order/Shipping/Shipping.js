import React from "react";

import Grid from "@material-ui/core/Grid";

import SelectAddress from "./SelectAddress";
import CartSummary from "../../cart/CartSummary";

const Shipping = ({ address, addresses, setAddress, cart }) => {
  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <SelectAddress
          setAddress={setAddress}
          address={address}
          addresses={addresses}
        />
      </Grid>
      <Grid item md={3}>
        <CartSummary to="/order" cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Shipping;
