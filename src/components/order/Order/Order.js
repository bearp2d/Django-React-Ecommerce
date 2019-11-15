import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import { fetchCart } from "../../../redux/actions/cartActions";
import { fetchAddresses } from "../../../redux/actions/profileActions/AddressActions";
import SelectAddress from "../SelectAddress";
import CartItemsSummary from "../../cart/CartItems";
import CartSummary from "../../cart/CartSummary";

const Order = ({ history }) => {
  const {
    cart,
    ui: { loadingUI },
    profile: { addresses }
  } = useSelector(state => state);
  const [address, setAddress] = useState(addresses[0] || "");
  const [checked, setChecked] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (cart.items_count === 0) {
      history.push("/cart");
    }
  }, [cart.items_count]);

  useEffect(() => {
    dispatch(fetchCart());
    dispatch(fetchAddresses());
  }, [dispatch]);

  useEffect(() => {
    setAddress(addresses[0] || "");
  }, [addresses]);

  if (loadingUI === true) {
    return null;
  }

  return (
    <Grid container spacing={2}>
      <Grid item md={9}>
        <SelectAddress
          setAddress={setAddress}
          address={address}
          addresses={addresses}
        />
        <CartItemsSummary items={cart.items} />
        <Paper style={{ marginTop: "10px" }}>
          <FormControlLabel
            style={{ margin: "8px" }}
            control={
              <Checkbox
                color="primary"
                checked={checked}
                onChange={e => setChecked(e.target.checked)}
              />
            }
            label="Send purchase invoice"
          />
        </Paper>
        <Button
          style={{ marginTop: "10px" }}
          component={Link}
          to="/cart"
          variant="outlined"
        >
          Back to cart
        </Button>
        <Button
          style={{ marginTop: "10px", float: "right" }}
          component={Link}
          to="/order"
          variant="outlined"
        >
          Check out
        </Button>
      </Grid>
      <Grid item md={3}>
        <CartSummary to="/order" cart={cart} />
      </Grid>
    </Grid>
  );
};

export default Order;
