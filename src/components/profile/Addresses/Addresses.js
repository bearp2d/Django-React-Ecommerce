import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import AddressItem from "./AddressItem";
import CreateAddress from "./CreateAddress";
import { fetchAddresses } from "../../../redux/actions/profileActions/AddressActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

const Addresses = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addresses = useSelector(state =>
    Object.values(state.profile.addresses)
  );

  useEffect(() => {
    dispatch(fetchAddresses());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <CreateAddress />
        </Grid>
        {addresses.map(address => (
          <Grid key={address.id} item md={6}>
            <AddressItem address={address} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default Addresses;
