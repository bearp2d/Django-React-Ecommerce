import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    flexGrow: 1
  }
}));

const Header = () => {
  const classes = useStyles();
  const isAuthenticated = useSelector(state => state.auth.isAuthenticated);

  const authNav = (
    <React.Fragment>
      <Button component={RouterLink} to="/profile" color="inherit">
        Profile
      </Button>
      <Button component={RouterLink} to="/logout" color="inherit">
        Logout
      </Button>
    </React.Fragment>
  );

  const guestNav = (
    <React.Fragment>
      <Button component={RouterLink} to="/login" color="inherit">
        Login
      </Button>
      <Button component={RouterLink} to="/register" color="inherit">
        Register
      </Button>
    </React.Fragment>
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
          {isAuthenticated === false ? guestNav : authNav}
        </Toolbar>
      </AppBar>
    </div>
  );
};
export default Header;
