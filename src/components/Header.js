import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";
import Typed from "react-typed";

// CSS styles
const useStyles = makeStyles(theme => ({
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
    margin: theme.spacing(1)
  },
  title: { color: "tomato" },
  subtitle: { color: "tan", marginBottom: "3rem" },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    width: "100%",
    textAlign: "center",
    zIndex: "1",
    border: "2px solid yellow"
  }
}));

const Header = () => {
  const classes = useStyles();
  console.log(classes.avatar);
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Avatar className={classes.avatar} src={avatar} alt="Adrian Wysocki" />
      </Grid>

      <Typography className={classes.title} variant="h4">
        <Typed strings={["Adrian Wysocki"]} typeSpeed={50} />
      </Typography>
      <br />
      <Typography className={classes.subtitle} variant="h5">
        <Typed
          strings={[
            "Junior Full Stack Web Developer",
            "HTML, CSS, jQuery, Java Script, React, express, handlebars"
          ]}
          typeSpeed={80}
          backSpeed={90}
          loop
        />
      </Typography>
    </Box>
  );
};

export default Header;
