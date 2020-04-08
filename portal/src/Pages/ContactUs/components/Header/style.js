import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  AppBar: {
    background: "#fff",
    boxShadow: "none",
    padding: "0 5rem",
  },

  logoText: {
    [theme.breakpoints.only("xs")]: {
      display: "block",
      width: "100%",
      textAlign: "Center",
      margin: "0 auto",
    },
    [theme.breakpoints.only("sm")]: {
      display: "block",
      width: "100%",
      textAlign: "Center",
      margin: "0 auto",
    },
  },
  menuButton: {
    display: "none",
    [theme.breakpoints.only("xs")]: {
      display: "block",
      position: "absolute",
      top: 10,
      left: 15,
    },
  },
  textlogo: {
    [theme.breakpoints.only("xs")]: {
      margin: "0 auto",
    },
  },
  logo: {
    height: "70px",
    // width: "100%"
  },
}));

export default useStyles;
