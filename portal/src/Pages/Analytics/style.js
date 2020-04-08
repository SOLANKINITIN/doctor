import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  cardContainer: {
    margin: "20px 0px",
    boxShadow: "none"
  },
  datePicker: {
    display: "flex",
    justifyContent: "flex-end",
    position: "relative"
  },
  dateRangePicker: {
    position: "absolute",
    zIndex: 1000,
    top: 40
  }
}));

export default useStyles;
