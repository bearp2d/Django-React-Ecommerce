import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import AddLocationIcon from "../../icons/AddLocation";
import AddressItem from "./AddressItem";
import { fetchAddresses } from "../../../redux/actions/profileActions/AddressActions";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  },
  addLocation: {
    width: "100%",
    border: "4px dashed #b8b8b8",
    height: "280px",
    alignItems: "center",
    fontSize: "1.5rem",
    color: "rgba(0, 0, 0, 0.54)",
    fontWeight: "bold"
  },
  addLocationIcon: {
    fontSize: "75px"
  }
}));

const Addresses = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const addresses = useSelector(state => state.profile.addresses);

  useEffect(() => {
    dispatch(fetchAddresses());
  }, []);

  return (
    <div className={classes.root}>
      <Grid container spacing={2}>
        <Grid item md={6}>
          <Button className={classes.addLocation}>
            <AddLocationIcon
              className={classes.addLocationIcon}
              color="action"
            />
            Add new address
          </Button>
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
