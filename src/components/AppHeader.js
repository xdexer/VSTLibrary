import React from "react";
import AppBar from "@material-ui/core/AppBar"
import MenuIcon from "@material-ui/icons/Menu";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

export default function AppHeader()
{
    return <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6">
          VST Library
        </Typography>
      </Toolbar>
    </AppBar>
}