import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  map: {
    marginTop: theme.spacing() * 5,
  },
  contactTitle: {
    marginTop: theme.spacing() * 5,
  },
  textfield: {
    marginTop: theme.spacing() * 5,
    [theme.breakpoints.only('xs')]: {
      marginTop: theme.spacing() * 2.5,
    },
    [theme.breakpoints.only('sm')]: {
      marginTop: theme.spacing() * 1.5,
    },
  },

  deatils: {
    marginLeft: theme.spacing() * 5,
  },
  deatil: {
    marginTop: theme.spacing() * 5,
    marginLeft: theme.spacing() * 5,
    [theme.breakpoints.only('xs')]: {
      marginLeft: theme.spacing() * 0,
    },
    [theme.breakpoints.only('sm')]: {
      marginLeft: theme.spacing() * 0,
    },
  },
  icon: {
    fontSize: '3rem',
  },
  typography: {
    fontSize: '1.5rem',
  },
  typography1: {
    marginLeft: theme.spacing() * 6,
  },
}));

export default useStyles;
