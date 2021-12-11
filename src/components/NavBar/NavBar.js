import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

import logo from "../../sol.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  palette: {
    primary: {
      main: "#ffecb3",
    },
    secondary: {
      main: "#b39ddb",
    },
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="Primary" colorPrimary={classes.palette}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <img className="App-logo" src={logo} alt=""></img>
          <h5 className="text-logo"> APP CLIMA</h5>
          <Typography variant="h5" className={classes.title}></Typography>
          <Button color="inherit">v 0.1</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
