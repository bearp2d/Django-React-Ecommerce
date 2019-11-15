import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Sticky } from "react-sticky";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1),
    padding: theme.spacing(2),
    maxWidth: "290px"
  },
  right: {
    float: "right"
  },
  divider: {
    margin: theme.spacing(1)
  },
  control: {
    marginBottom: theme.spacing(2)
  }
}));

const CartSummary = ({ cart, to }) => {
  const classes = useStyles();

  return (
    <Sticky>
      {({ style }) => (
        <Paper style={style} className={classes.root}>
          <div className={classes.control}>
            <Typography display="inline">
              Total Price ({cart.items_count} product)
            </Typography>
            <Typography display="inline" className={classes.right}>
              {(cart.total_price + cart.total_customer_profit).toFixed(2)}$
            </Typography>
          </div>
          <div className={classes.control}>
            <Typography color="primary" display="inline">
              Your profit
            </Typography>
            <Typography
              color="primary"
              display="inline"
              className={classes.right}
            >
              {cart.total_customer_profit}$
            </Typography>
          </div>
          <Divider className={classes.divider} />
          <div className={classes.control}>
            <Typography align="center" className={classes.center}>
              The amount payable:
            </Typography>
            <Typography variant="h6" align="center" className={classes.center}>
              {cart.total_price}$
            </Typography>
          </div>
          <Button
            component={Link}
            to={to}
            variant="contained"
            color="primary"
            size="large"
            fullWidth
          >
            Check out
          </Button>
        </Paper>
      )}
    </Sticky>
  );
};

export default CartSummary;
