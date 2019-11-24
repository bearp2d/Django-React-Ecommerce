import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";
import moment from "moment";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import { fetchOrder } from "../../../../redux/actions/profileActions/orderActions";
import CartItemsSummary from "../../../cart/CartItems";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  wrapper: {
    padding: theme.spacing(2),
    border: "1px solid #dedede"
  },
  iconButton: {
    marginRight: theme.spacing(1)
  }
}));

const OrdersDetail = ({ match }) => {
  const id = match.params.id;
  const dispatch = useDispatch();
  const order = useSelector(state => state.profile.orders.order);
  const classes = useStyles();

  useEffect(() => {
    dispatch(fetchOrder(id));
  }, [dispatch]);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <IconButton
          component={Link}
          to="/profile/orders"
          className={classes.iconButton}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography display="inline" variant="h5">
          Order detail
        </Typography>
      </div>
      <Paper className={classes.root}>
        <Grid container>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Reciver:</Typography>
            <Typography variant="h6">
              {order.reciver && order.reciver.full_name}
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Reciver phone number:</Typography>
            <Typography variant="h6">
              {order.reciver && order.reciver.phone_number}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Reciver postal address:</Typography>
            <Typography variant="h6">
              {order.reciver && order.reciver.address}
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Items count:</Typography>
            <Typography variant="h6">
              {order.cart && order.cart.items_count}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Shpping status:</Typography>
            <Typography variant="h6">{order.shipping_status}</Typography>
          </Grid>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Ordered at:</Typography>
            <Typography variant="h6">
              {moment(order.created_at).format("MMM Do YY")}
            </Typography>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Purchase invoice:</Typography>
            <Typography variant="h6">
              {order.purchase_invoice ? "yes" : "no"}
            </Typography>
          </Grid>
          <Grid item md={6} className={classes.wrapper}>
            <Typography variant="body1">Total price:</Typography>
            <Typography variant="h6">
              {order.cart && order.cart.total_price}$
            </Typography>
          </Grid>
        </Grid>
      </Paper>
      {order.cart && <CartItemsSummary items={order.cart.items} />}
    </React.Fragment>
  );
};

export default OrdersDetail;
