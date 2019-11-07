import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import useReactRouter from "use-react-router";
import queryString from "query-string";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";

import { removeQuery } from "../../utils/utils";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: "7px"
  },
  remove: {
    float: "right",
    marginRight: "10px",
    cursor: "pointer",
    fontWeight: "bold"
  }
}));

const SubmittedFilters = () => {
  const { history, location } = useReactRouter();
  const parsed = queryString.parse(location.search);
  const classes = useStyles();

  if (location.search && location.search !== "?") {
    return (
      <Paper style={{ marginBottom: "10px" }}>
        <div className={classes.margin}>
          <Typography display="inline" variant="subtitle1">
            Submitted Filters:
          </Typography>
          <Typography
            onClick={() => history.push("/products")}
            color="error"
            display="inline"
            variant="subtitle1"
            className={classes.remove}
          >
            remove
          </Typography>
          <Divider />
        </div>
        {parsed.available === "true" && (
          <Button
            onClick={() => history.push(removeQuery(location, "available"))}
            className={classes.margin}
            size="small"
            variant="outlined"
          >
            Only available products
            <CloseIcon fontSize="small" color="action" />
          </Button>
        )}
        {parsed.min_price && parsed.max_price && (
          <Button
            onClick={() =>
              history.push(removeQuery(location, ["min_price", "max_price"]))
            }
            className={classes.margin}
            size="small"
            variant="outlined"
          >
            from {parsed.min_price}$ to {parsed.max_price}$
            <CloseIcon fontSize="small" color="action" />
          </Button>
        )}
        {parsed.search && (
          <Button
            onClick={() => history.push(removeQuery(location, "search"))}
            className={classes.margin}
            size="small"
            variant="outlined"
          >
            {parsed.search}
            <CloseIcon fontSize="small" color="action" />
          </Button>
        )}
      </Paper>
    );
  }
  return null;
};

export default SubmittedFilters;
