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

const CartItems = ({ cart, history }) => {
  const classes = useStyles();

  return (
    <div>
      <Paper className={classes.root}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell className={classes.header}>Product image</TableCell>
              <TableCell className={classes.header} agline="center">
                Product title
              </TableCell>
              <TableCell className={classes.header} agline="center">
                View product
              </TableCell>
              <TableCell className={classes.header} align="center">
                Quantity
              </TableCell>
              <TableCell className={classes.header} align="center">
                Price
              </TableCell>
              <TableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
};

export default CartItems;
