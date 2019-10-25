import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

import EditAddress from "../../../profile/Addresses/EditAddress";

const useStyles = makeStyles(theme => ({
  button: {
    marginLeft: theme.spacing(2)
  },
  right: {
    marginLeft: "auto"
  }
}));

const SelectedAddress = ({ address, setChange }) => {
  const [edit, setEdit] = useState(false);
  const classes = useStyles();

  return (
    <Paper>
      <List>
        <ListItem>
          <Typography display="inline">{`Reciver: ${address.reciver_full_name}`}</Typography>
          <Button
            onClick={() => setEdit(true)}
            className={classes.button}
            size="small"
            variant="outlined"
          >
            Edit this address
          </Button>
          <EditAddress open={edit} setOpen={setEdit} address={address} />
          <Button
            onClick={() => setChange(true)}
            className={classes.right}
            color="secondary"
            size="small"
            variant="outlined"
          >
            Change address
          </Button>
        </ListItem>
        <ListItem>
          <Typography>
            phone number: {address.reciver_phone_number} | postal code:
            {address.postal_code}
          </Typography>
        </ListItem>
        <ListItem>
          <Typography>
            {address.state}, {address.city}, {address.postal_address}
          </Typography>
        </ListItem>
      </List>
    </Paper>
  );
};

export default SelectedAddress;
