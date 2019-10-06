import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import useReactRouter from "use-react-router";
import queryString from "query-string";
import InputBase from "@material-ui/core/InputBase";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import ClearIcon from "@material-ui/icons/Clear";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    alignItems: "center",
    marginLeft: "10px"
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    width: "500px"
  },
  iconButton: {
    margin: "1px"
  }
}));

const Search = () => {
  const { history, location } = useReactRouter();
  const parsed = queryString.parse(location.search);
  const [value, setValue] = useState(parsed.search || "");
  const [clear, setClear] = useState(false);
  const classes = useStyles();

  const handleSubmit = event => {
    event.preventDefault();
    history.push(`/products/?search=${value}`);
  };

  return (
    <div>
      <form
        onMouseEnter={() => setClear(true)}
        onMouseLeave={() => setClear(false)}
        onSubmit={handleSubmit}
      >
        <Paper className={classes.root}>
          {value && clear && (
            <IconButton
              className={classes.iconButton}
              onClick={() => setValue("")}
            >
              <ClearIcon fontSize="small" />
            </IconButton>
          )}
          <InputBase
            className={classes.input}
            placeholder="Search in products"
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <IconButton className={classes.iconButton} onClick={handleSubmit}>
            <SearchIcon fontSize="small" />
          </IconButton>
        </Paper>
      </form>
    </div>
  );
};

export default Search;
