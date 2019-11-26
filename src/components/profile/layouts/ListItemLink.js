import React from "react";
import useReactRouter from "use-react-router";
import { Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";

const ListItemLink = props => {
  const { location } = useReactRouter();

  return (
    <ListItem
      button
      component={Link}
      // selected={location.pathname === props.to}
      {...props}
    />
  );
};

ListItemLink.defaultProps = {
  to: ""
};

export default ListItemLink;
