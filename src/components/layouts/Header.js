import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

import Search from "./Filters/Search";

const useStyles = makeStyles(theme => ({
  rightItems: {
    marginLeft: "auto"
  },
  button: {
    marginLeft: "10px"
  }
}));

const Header = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const authNav = (
    <div className={classes.rightItems}>
      <Button component={RouterLink} to="/profile" color="inherit">
        Profile
      </Button>
      <Button component={RouterLink} to="/logout" color="inherit">
        Logout
      </Button>
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
    <div className={classes.root}>
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
    </div>
  );
};

export default Header;
