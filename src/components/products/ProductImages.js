import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  item: {
    width: "49.25px",
    marginRight: "5px",
    listStyle: "none outside none",
    margin: 0,
    padding: 0,
    display: "inline"
  },
  imageWrapper: {
    border: "1px solid gray"
  },
  image: {
    margin: "5px"
  },
  itemImage: {
    border: "1px solid gray",
    cursor: "pointer"
  },
  ul: {
    width: "325.5px",
    height: "61.0625px",
    listStyle: "none outside none",
    margin: 0,
    padding: 0,
    marginTop: "5px"
  }
}));

const ProductImages = ({ product }) => {
  const [image, setImage] = useState();
  const classes = useStyles();

  useEffect(() => {
    setImage(product.photo_main);
  }, [product]);

  return (
    <React.Fragment>
      <div className={classes.imageWrapper}>
        <img
          src={image}
          alt={product.slug}
          className={classes.image}
          style={{ objectFit: "contain" }}
          width="318"
          height="398"
        />
      </div>
      <div>
        <ul className={classes.ul}>
          <li className={classes.item}>
            <img
              width="47px"
              height="60px"
              onClick={() => setImage(product.photo_main)}
              className={classes.itemImage}
              src={product.photo_main}
              alt={product.title}
            />
          </li>
          {product.photo_1 && (
            <li className={classes.item}>
              <img
                width="47px"
                height="60px"
                onClick={() => setImage(product.photo_1)}
                className={classes.itemImage}
                src={product.photo_1}
                alt={product.title}
              />
            </li>
          )}
          {product.photo_2 && (
            <li className={classes.item}>
              <img
                width="47px"
                height="60px"
                onClick={() => setImage(product.photo_2)}
                className={classes.itemImage}
                src={product.photo_2}
                alt={product.title}
              />
            </li>
          )}
          {product.photo_3 && (
            <li className={classes.item}>
              <img
                width="47px"
                height="60px"
                onClick={() => setImage(product.photo_3)}
                className={classes.itemImage}
                src={product.photo_3}
                alt={product.title}
              />
            </li>
          )}
          {product.photo_4 && (
            <li className={classes.item}>
              <img
                width="47px"
                height="60px"
                onClick={() => setImage(product.photo_4)}
                className={classes.itemImage}
                src={product.photo_4}
                alt={product.title}
              />
            </li>
          )}
        </ul>
      </div>
    </React.Fragment>
  );
};

export default ProductImages;
