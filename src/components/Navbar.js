import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  ListItem,
  IconButton,
  ListItemText,
  ListItemIcon,
  Avatar,
  Divider,
  List,
  Typography,
  Box
} from "@material-ui/core";

import {
  Menu,
  AssignmentInd,
  Home,
  Apps,
  ContactMail
} from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";

import avatar from "../avatar.png";

import { makeStyles } from "@material-ui/core/styles";

import MobileRightMenuSlider from "@material-ui/core/Drawer";

// CSS STYLES
const useStyles = makeStyles(theme => ({
  menuSliderContainer: {
    width: 250,
    background: "whitesmoke",
    height: "100%",
    position: "relative"
  },
  avatar: {
    display: "block",
    margin: "0.5rem auto",
    border: "2px solid violet",
    width: theme.spacing(13),
    height: theme.spacing(13)
  },
  listItem: {
    color: "red"
  }
}));

const menuItems = [
  {
    listIcon: <Home />,
    listText: "Home"
  },
  {
    listIcon: <AssignmentInd />,
    listText: "Resume"
  },
  {
    listIcon: <Apps />,
    listText: "Portfolio"
  },
  {
    listIcon: <ContactMail />,
    listText: "Contacts"
  }
];

const Navbar = () => {
  const [state, setState] = useState({
    right: false
  });

  const toggleSlider = (slider, open) => () => {
    console.log("toggleSlider clicked!!!");
    setState({ ...state, [slider]: open });
  };

  const classes = useStyles();
  const sideList = slider => (
    <Box
      component="div"
      className={classes.menuSliderContainer}
      onClick={toggleSlider("right", false)}
    >
      {/*  <CloseIcon onClick={toggleSlider("right", false)} /> */}

      <Avatar src={avatar} alt="Adrian Wysocki" className={classes.avatar} />
      <Divider />
      <List>
        {menuItems.map((lsItem, key) => (
          <ListItem button key={key}>
            <ListItemIcon className={classes.listItem}>
              {lsItem.listIcon}
            </ListItemIcon>
            <ListItemText
              primary={lsItem.listText}
              className={classes.listItem}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Box
        component="nav"
        style={{
          border: "2px solid green",
          position: "fixed",
          // position: "absolute",
          width: "100%",
          zIndex: "100"
        }}
      >
        <AppBar
          position="static"
          style={{ background: "transparent", border: "2px solid blue" }}
        >
          <Toolbar style={{ border: "2px solid pink" }}>
            <IconButton
              onClick={toggleSlider("right", true)}
              style={{
                border: "2px solid green",
                position: "absolute",
                right: "0px"
              }}
            >
              <Menu style={{ color: "tomato" }}></Menu>
            </IconButton>
            <Typography
              variant="h5"
              style={{ color: "tan", border: "2px solid yellow" }}
            >
              Portfolio
            </Typography>
            <MobileRightMenuSlider
              open={state.right}
              onClose={toggleSlider("right", false)}
              anchor="right"
            >
              {sideList("right")}
            </MobileRightMenuSlider>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
