import React from "react";

import useStyles from "./style";
import { Button } from "@material-ui/core";

const Index = props => {
  const classes = useStyles();
  return (
    <Button
      onClick={props.onClick}
      variant="contained"
      className={classes.Navbutton}
      style={props.style}>
      {props.children}
    </Button>
  );
};

export default Index;
