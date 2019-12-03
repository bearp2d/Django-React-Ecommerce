import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Badge from "@material-ui/core/Badge";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";
import CartIcon from "@material-ui/icons/ShoppingCart";

import Search from "../products/Filters/Search";
import ProfileIcon from "@material-ui/icons/Person";

const useStyles = makeStyles(theme => ({
  rightItems: {
    marginLeft: "auto"
  },
  button: {
    marginLeft: "10px"
  },
  margin: {
    margin: theme.spacing(1)
  }
}));

const Header = () => {
  const classes = useStyles();
  const { isAuthenticated, user } = useSelector(state => state.auth);

  const authNav = (
    <div className={classes.rightItems}>
      <IconButton component={RouterLink} to="/profile" color="inherit">
        <ProfileIcon />
      </IconButton>
      <IconButton component={RouterLink} to="/cart" color="inherit">
        <Badge color="secondary" badgeContent={user && user.cart_items_count}>
          <CartIcon />
        </Badge>
      </IconButton>
    </div>
  );

  const guestNav = (
    <div className={classes.rightItems}>
      <Button component={RouterLink} to="/login" color="inherit">
        Login
      </Button>
      <Button component={RouterLink} to="/register" color="inherit">
        Register
      </Button>
    </div>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Link
          component={RouterLink}
          to="/"
          variant="h6"
          color="inherit"
          className={classes.title}
          underline={"none"}
        >
          Home
        </Link>
        <Button
          className={classes.button}
          component={RouterLink}
          to="/products"
          color="inherit"
        >
          Products
        </Button>
        <Search />
        {isAuthenticated === false ? guestNav : authNav}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
