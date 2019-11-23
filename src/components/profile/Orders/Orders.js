import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

import OrderItem from "./OrderItem";
import { fetchOrders } from "../../../redux/actions/profileActions/orderActions";

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(1)
  },
  header: {
    color: "black"
  }
}));

const Orders = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const orders = useSelector(state => state.profile.orders.orders);

  useEffect(() => {
    dispatch(fetchOrders());
  }, [dispatch]);

  return (
    <Paper className={classes.root}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={classes.header}>id</TableCell>
            <TableCell className={classes.header} align="center">
              Ordered at
            </TableCell>
            <TableCell className={classes.header} align="center">
              Total price
            </TableCell>
            <TableCell className={classes.header} align="center">
              Items count
            </TableCell>
            <TableCell className={classes.header} align="center">
              Shipping status
            </TableCell>
            <TableCell className={classes.header} align="center">
              Purchase invoice
            </TableCell>
            <TableCell align="center" className={classes.header}>
              More detail
            </TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {orders.map(order => (
            <OrderItem key={order.id} order={order} />
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default Orders;
