import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ShopingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import PersonIcon from "@material-ui/icons/PersonOutline";
import StarIcon from "@material-ui/icons/StarBorder";
import CommentIcon from "@material-ui/icons/ModeCommentOutlined";
import AddressIcon from "@material-ui/icons/RoomOutlined";
import NotificationIcon from "@material-ui/icons/NotificationsOutlined";
import PersonalInfoIcon from "@material-ui/icons/PortraitOutlined";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(3)
  }
}));

const Sidebar = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid container spacing={2}>
      <Grid item md="auto">
        <Paper className={classes.root}>
          <List component="nav">
            <ListItem>
              <ListItemText primary="Your account" />
            </ListItem>
            <Divider />
            <ListItem button>
              <ListItemIcon>
                <PersonIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <ShopingCartIcon color="action" />
              </ListItemIcon>
              <ListItemText primary="All orders" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <StarIcon />
              </ListItemIcon>
              <ListItemText primary="Favorite Products" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <CommentIcon />
              </ListItemIcon>
              <ListItemText primary="Your comments" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <AddressIcon />
              </ListItemIcon>
              <ListItemText primary="Addresses" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <NotificationIcon />
              </ListItemIcon>
              <ListItemText primary="Notifications" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <PersonalInfoIcon />
              </ListItemIcon>
              <ListItemText primary="Personal Info" />
            </ListItem>
          </List>
        </Paper>
      </Grid>
      <Grid item md>
        {children}
      </Grid>
    </Grid>
  );
};

export default Sidebar;
