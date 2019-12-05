import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";

import RemoveFromCart from "./RemoveFromCart";
import UpdateQuantity from "./UpdateQuantity";

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

const CartItem = ({ editable, item, item: { product } }) => {
  return (
    <TableRow key={product.id}>
      <TableCell
        component={Link}
        to={`/products/${product.slug}`}
        align="center"
      >
        <img
          alt={product.slug}
          height="75"
          width="60"
          style={{ objectFit: "contain" }}
          src={product.photo_main}
        />
      </TableCell>
      <TableCell>
        <Typography
          style={{ textDecoration: "none" }}
          color="inherit"
          component={Link}
          to={`/products/${product.slug}`}
        >
          {product.title} - size {item.size.size}
        </Typography>
      </TableCell>
      <TableCell align="center">
        {editable ? (
          <UpdateQuantity
            id={item.id}
            available_count={item.size.available_count}
            quantity={item.quantity}
          />
        ) : (
          item.quantity
        )}
      </TableCell>
      <TableCell align="center">{getPrice(product)}</TableCell>
      <TableCell align="center">{item.total_price}</TableCell>
      {editable && (
        <TableCell align="center">
          <RemoveFromCart id={item.id} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default CartItem;
