import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import CloseIcon from "@material-ui/icons/Close";

import CreateAddress from "../../../profile/Addresses/CreateAddress";
import CreateAddressButton from "../../../profile/Addresses/CreateAddress/CreateAddressButton";
import EditAddress from "../../../profile/Addresses/EditAddress";
import DeleteAddress from "../../../profile/Addresses/DeleteAddress";

const useStyles = makeStyles(theme => ({
  closeButton: {
    border: "2px solid gray",
    margin: theme.spacing(1)
  },
  space: {
    margin: theme.spacing(2)
  },
  paper: {
    border: "1px solid #e0e0e0",
    margin: theme.spacing(2)
  },
  actions: {
    margin: theme.spacing(2)
  },
  button: {
    borderWidth: "1px 0 0 0",
    border: "solid #e0e0e0"
  }
}));

const ChangeAddress = ({ setOpen, addresses, setAddress }) => {
  const [edit, setEdit] = useState(false);
  const [create, setCreate] = useState(false);
  const classes = useStyles();

  const handleClick = address => {
    setAddress(address);
    setOpen(false);
  };

  return (
    <Card>
      <CardHeader
        action={
          <IconButton
            size="small"
            onClick={() => setOpen(false)}
            className={classes.closeButton}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        }
        title="Select the address you would like to deliver:"
      ></CardHeader>
      <div className={classes.space}>
        <CreateAddressButton noIcon setOpen={setCreate} />
        <CreateAddress open={create} setOpen={setCreate} noIcon />
      </div>
      {addresses.map(address => (
        <Paper className={classes.paper} key={address.id}>
          <List>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "h6" }}
                primary={address.reciver_full_name}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "body2" }}
                primary={`${address.state}, ${address.city}, ${address.postal_address}`}
              />
            </ListItem>
            <ListItem>
              <ListItemText
                primaryTypographyProps={{ variant: "body2" }}
                primary={`Postal code: ${address.postal_code} | Phone number: ${address.reciver_phone_number}`}
              />
              <ListItemSecondaryAction>
                <Button
                  className={classes.actions}
                  onClick={() => setEdit(true)}
                  size="small"
                  variant="contained"
                  color="primary"
                >
                  Edit
                </Button>
                <EditAddress open={edit} setOpen={setEdit} address={address} />
                <DeleteAddress classes={classes} id={address.id} />
              </ListItemSecondaryAction>
            </ListItem>
          </List>
          <Button
            onClick={() => handleClick(address)}
            className={classes.button}
            variant="outlined"
            fullWidth
          >
            send order to this address
          </Button>
        </Paper>
      ))}
    </Card>
  );
};

export default ChangeAddress;
