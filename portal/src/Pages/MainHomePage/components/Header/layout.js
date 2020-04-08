import React, { useEffect, useState } from "react";

import {
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Link,
} from "@material-ui/core";
import useStyles from "./style";
import MenuIcon from "@material-ui/icons/Menu";

import SideBarComponent from "../SideDrawer.component";
import BackDrop from "../BackSide.component";

const Layout = (props) => {
  const classes = useStyles();
  const [openSide, SetOpenSide] = useState(false);
  const [showHeader, setShowHeader] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setShowHeader(true);
      } else {
        setShowHeader(false);
      }
    });
  }, []);

  const handleCLick = () => {
    SetOpenSide(true);
  };

  const hanldleClose = () => {
    SetOpenSide(false);
  };

  return (
    <AppBar
      position="fixed"
      className={classes.AppBar}
      style={{ background: showHeader ? "#F1F9FF" : "transparent" }}>
      {openSide && <BackDrop onClick={hanldleClose} />}
      <SideBarComponent show={openSide} onClick={hanldleClose}>
        <Link style={{ marginTop: "1rem", color: "#111" }}>About </Link>
        <Link style={{ marginTop: "1rem", color: "#111" }}>Home</Link>
        <Link style={{ marginTop: "1rem", color: "#111" }}>Contact</Link>
        <Link style={{ marginTop: "1rem", color: "#111" }}>footer</Link>
      </SideBarComponent>
      <IconButton edge="start" className={classes.menuButton} aria-label="menu">
        <MenuIcon className={classes.Menuicon} onClick={handleCLick} />
      </IconButton>
      <Toolbar>
        <Typography variant="h6" className={classes.textlogo}>
          <img src="./images/logo.png" alt="Logo" className={classes.logo} />
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Layout;
