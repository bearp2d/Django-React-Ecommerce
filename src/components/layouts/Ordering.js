import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  paper: {
    margin: theme.spacing(3, 1),
    padding: theme.spacing(1)
  },
  button: {
    margin: theme.spacing(0.5)
  }
}));

const Ordering = () => {
  const ordering = useSelector(state => state.products.ordering);
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Button
        component={Link}
        to="/products/"
        className={classes.button}
        color="secondary"
        variant={ordering === null ? "contained" : "outlined"}
      >
        Newest
      </Button>
      <Button
        component={Link}
        to="/products/?ordering=max_price"
        className={classes.button}
        color="secondary"
        variant={ordering === "max_price" ? "contained" : "outlined"}
      >
        expensivest
      </Button>
      <Button
        component={Link}
        to="/products/?ordering=min_price"
        className={classes.button}
        color="secondary"
        variant={ordering === "min_price" ? "contained" : "outlined"}
      >
        cheapest
      </Button>
      <Button
        component={Link}
        to="/products/?ordering=best_seller"
        className={classes.button}
        color="secondary"
        variant={ordering === "best_seller" ? "contained" : "outlined"}
      >
        Bestselling
      </Button>
    </Paper>
  );
};

export default Ordering;
