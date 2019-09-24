import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import NextIcon from "@material-ui/icons/ChevronRight";
import PreviousIcon from "@material-ui/icons/ChevronLeft";

const useStyles = makeStyles(theme => ({
  root: {
    margin: theme.spacing(5)
  },
  button: {
    margin: theme.spacing(0.5)
  }
}));

const Pagination = () => {
  const { current, next, previous, pagesCount } = useSelector(
    state => state.products
  );
  const classes = useStyles();

  const getPageQuery = page => {
    if (next) {
      return next.split(next.slice(-1)).join(page);
    } else if (previous) {
      return previous.split(previous.slice(-1)).join(page);
    }
  };

  var Buttons = [];
  if (pagesCount) {
    for (var i = 1; i < pagesCount + 1; i++) {
      if (i === current) {
        Buttons.push(
          <Button
            key={i}
            component={Link}
            to={getPageQuery(i)}
            variant="outlined"
            className={classes.button}
            size="small"
            color="inherit"
          >
            {i}
          </Button>
        );
        continue;
      }
      Buttons.push(
        <Button
          key={i}
          component={Link}
          to={getPageQuery(i)}
          variant="outlined"
          className={classes.button}
          size="small"
        >
          {i}
        </Button>
      );
    }
  }

  return (
    <div className={classes.root}>
      <Grid container alignItems="center" justify="center">
        <Grid item>
          <Button
            component={Link}
            to={`/products/${previous}`}
            disabled={previous === null}
            variant="outlined"
            className={classes.button}
            size="small"
          >
            <PreviousIcon />
          </Button>
          {Buttons}
          <Button
            disabled={next === null}
            component={Link}
            to={`/products/${next}`}
            variant="outlined"
            size="small"
            className={classes.button}
          >
            <NextIcon />
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default Pagination;
