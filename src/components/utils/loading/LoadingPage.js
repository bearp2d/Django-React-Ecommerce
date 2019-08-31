import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

const Loading = () => {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justify="center"
      style={{ minHeight: "97vh" }}
    >
      <Grid item xs={3}>
        <CircularProgress size={50}></CircularProgress>
      </Grid>
    </Grid>
  );
};

export default Loading;
