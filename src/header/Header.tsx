import React from "react";
import { Toolbar } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import { theme } from "../theme";

const useStyles = makeStyles({
  headerText: {
    color: theme.palette.primary.main,
  },
});

const Header = () => {
  const classes = useStyles({});
  return (
    <Toolbar>
      <header className="App-header">
        <h1 className={classes.headerText}>&#x0003C;Accelerant&#x0003E;</h1>
      </header>
    </Toolbar>
  );
};

export default Header;
