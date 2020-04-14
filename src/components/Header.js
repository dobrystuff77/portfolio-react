import React from "react";
import { Typography, Avatar, Grid, Box } from "@material-ui/core";
import avatar from "../avatar.png";

const Header = () => {
  return (
    <Box>
      <Avatar src={avatar} alt="Adrian Wysocki" />
    </Box>
  );
};

export default Header;
