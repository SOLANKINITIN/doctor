import React from "react";
import CssBaseline from "@material-ui/core/CssBaseline";

import Map from "./component/Map";
import Hospitals from "./component/Table";

import useStyles from "./style";

export default function MiniDrawer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <main className={classes.content}>
        <div style={{ padding: 20, marginTop: "3rem" }}>
          <Map />
          <Hospitals name="Hospital Name" email="Hospital" address="address" no="Mobile-no" />
        </div>
      </main>
    </div>
  );
}
