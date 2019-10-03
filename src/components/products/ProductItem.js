import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  imageWrap: {
    // height: "220px"
  },
  image: {
    maxWidth: "100%",
    maxHeight: "100%",
    width: "auto"
  }
}));

const ProductItem = ({ product, history }) => {
  const classes = useStyles();
  console.log(product.available);

  return (
    <Card onClick={() => history.push(`/products/${product.slug}`)}>
      <CardActionArea>
        <div className={classes.imageWrap}>
          <CardMedia
            component="img"
            src={product.photo_main}
            title={product.title}
          />
        </div>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.title}
          </Typography>
          {product.available === false ? (
            <Typography gutterBottom color="error" variant="h5" component="h2">
              unavailable
            </Typography>
          ) : (
            <React.Fragment>
              {product.discount_price ? (
                <React.Fragment>
                  <Typography
                    gutterBottom
                    variant="h6"
                    color="error"
                    component="h2"
                  >
                    {product.discount_percent}%
                  </Typography>
                  <Typography gutterBottom variant="h5" component="h2">
                    <del>{product.price}</del> {product.discount_price}
                  </Typography>
                </React.Fragment>
              ) : (
                <Typography gutterBottom variant="h5" component="h2">
                  {product.price}
                </Typography>
              )}
            </React.Fragment>
          )}
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ProductItem;
