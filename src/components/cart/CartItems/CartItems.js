import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import CartItem from "./CartItem";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  header: {
    color: "black"
  }
}));

const CartItems = ({ items, editable }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>Product image</TableCell>
            <TableCell className={classes.header} align="center">
              Product title
            </TableCell>
            <TableCell className={classes.header} align="center">
              View product
            </TableCell>
            <TableCell className={classes.header} align="center">
              Quantity
            </TableCell>
            <TableCell className={classes.header} align="center">
              Price
            </TableCell>
            <TableCell className={classes.header} align="center">
              Total price
            </TableCell>
            {editable && (
              <TableCell className={classes.header}>Remove</TableCell>
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => (
            <CartItem key={item.id} item={item} editable={editable} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

CartItems.defaultProps = {
  editable: false
};

export default CartItems;
