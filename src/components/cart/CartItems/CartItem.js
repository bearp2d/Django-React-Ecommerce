import React from "react";
import { Link } from "react-router-dom";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import IconButton from "@material-ui/core/IconButton";
import ViewIcon from "@material-ui/icons/Visibility";

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
      <TableCell>
        <img
          alt={product.slug}
          height="75"
          width="60"
          style={{ objectFit: "contain" }}
          src={product.photo_main}
        />
      </TableCell>
      <TableCell>
        {product.title} - size {item.size.size}
      </TableCell>
      <TableCell agline="center">
        <IconButton component={Link} to={`/products/${product.slug}`}>
          <ViewIcon />
        </IconButton>
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
        <TableCell agline="center">
          <RemoveFromCart id={item.id} />
        </TableCell>
      )}
    </TableRow>
  );
};

export default CartItem;
