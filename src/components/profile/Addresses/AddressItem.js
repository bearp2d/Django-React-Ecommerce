import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import Typography from "@material-ui/core/Typography";
import EmailIcon from "@material-ui/icons/EmailOutlined";
import PhoneIcon from "@material-ui/icons/PhoneIphoneOutlined";

import DeleteAddress from "./DeleteAddress";

const useStyles = makeStyles(theme => ({
  wrapperAddress: {
    padding: theme.spacing(2),
    minHeight: "120px"
  },
  wrapperInfo: {
    borderTop: "1px solid #f4f4f4"
  },
  button: {
    margin: theme.spacing(1)
  },
  list: {
    padding: 0,
    marginTop: theme.spacing(2)
  }
}));

const AddressItem = ({ address }) => {
  const classes = useStyles();

  return (
    <Paper style={{ height: "280px" }}>
      <div className={classes.wrapperAddress}>
        <Typography variant="h5">{address.reciver_full_name}</Typography>
        <Typography variant="subtitle1">
          {address.state} state, {address.city} city, {address.postal_address}
        </Typography>
      </div>
      <div className={classes.wrapperInfo}>
        <List disablePadding={true} className={classes.list}>
          <ListItem>
            <ListItemIcon>
              <EmailIcon />
            </ListItemIcon>
            <ListItemText primary={`postal code: ${address.postal_code}`} />
          </ListItem>
          <ListItem>
            <ListItemIcon>
              <PhoneIcon />
            </ListItemIcon>
            <ListItemText
              primary={`phone number: ${address.reciver_phone_number}`}
            />
            <ListItemSecondaryAction>
              <Button
                size="small"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Edit
              </Button>
              <DeleteAddress classes={classes} id={address.id} />
            </ListItemSecondaryAction>
          </ListItem>
        </List>
      </div>
    </Paper>
  );
};

export default AddressItem;
