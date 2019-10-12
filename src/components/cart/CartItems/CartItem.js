import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import ViewIcon from "@material-ui/icons/Visibility";

import RemoveFromCart from "./RemoveFromCart";

const getPrice = product => (
  <React.Fragment>
    {product.available === false ? (
      <span style={{ color: "red" }}>unavailable</span>
    ) : (
      <React.Fragment>
        {product.discount_price ? (
          <React.Fragment>
            <div>
              <del style={{ color: "grey" }}>{product.price}</del>
            </div>
            <span>{product.discount_price}</span>
          </React.Fragment>
        ) : (
          product.price
        )}
      </React.Fragment>
    )}
  </React.Fragment>
);

const CartItem = ({ item }) => {
  return (
    <TableRow key={item.product.id}>
      <TableCell>
        <img
          alt={item.product.slug}
          height="75"
          width="60"
          src={item.product.photo_main}
        />
      </TableCell>
      <TableCell>{item.product.title}</TableCell>
      <TableCell agline="center">
        <IconButton component={Link} to={`/products/${item.product.slug}`}>
          <ViewIcon />
        </IconButton>
      </TableCell>
      <TableCell align="center">{item.quantity}</TableCell>
      <TableCell align="center">{getPrice(item.product)}</TableCell>
      <TableCell align="center">{item.total_price}</TableCell>
      <TableCell agline="center">
        <RemoveFromCart id={item.id} />
      </TableCell>
    </TableRow>
  );
};

export default CartItem;
