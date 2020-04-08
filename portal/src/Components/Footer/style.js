import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  footer: {
    background: "#F3F6F7",
    marginTop: "8rem"
  },
  link_title_sec: {
    marginTop: "5rem",
    marginBottom: "5rem",
    [theme.breakpoints.only("sm")]: {
      marginTop: "0rem",
      marginBottom: "0rem",
      padding: 0,
      margin: 0
    }
  },
  link_title_tag: {
    marginBottom: "2rem",
    fontSize: theme.spacing() * 3,
    fontFamily: "Playfair Display,serif",
    fontWeight: "900",
    color: "#242429"
  },
  footer_small_text: {
    fontFamily: "Roboto,Sans-serif",
    lineHeight: 1.926,
    fontSize: "16px",
    marginBottom: "1rem"
  },
  linkIcon: {
    color: "#d3d3d3",
    marginRight: "1rem",
    "&:hover": {
      color: "#0A74FA"
    }
  },
  links_ui: {
    listStyleType: "none",
    textAlign: "Left"
  },
  list: {
    display: "flex",
    flexDirection: "column",
    marginTop: "1rem",
    color: "#7f7f7f",
    fontSize: "1rem",
    "&:hover": {
      color: "#0A74FA",
      textDecoration: "none"
    }
  },
  copyRightSec: {
    background: "#0d1820",
    padding: "2rem",
    textAlign: "Center"
  }
}));
export default useStyles;
