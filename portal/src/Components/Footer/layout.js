import React from "react";

import useStyles from "./style";
import {
  Typography
} from "@material-ui/core";
// import FacebookIcon from "@material-ui/icons/Facebook";
// import TwitterIcon from "@material-ui/icons/Twitter";
// import LinkedInIcon from "@material-ui/icons/LinkedIn";
// import MailIcon from "@material-ui/icons/Mail";

const Layout = () => {
  const classes = useStyles();
  return (
    <footer className={classes.footer}>
      <div className={classes.copyRightSec}>
        <Typography>Copyright ©2020, DOCTOR_AI ,Made With ❤️ </Typography>
      </div>
    </footer>
  );
};

export default Layout;
