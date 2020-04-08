import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles(theme => ({

    container: {
        display: "flex",
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "Center",
        overflow: "hidden",
    },
    root: {
        padding: theme.spacing() * 3,
        maxWidth: 350,
        boxShadow: "none",
        borderRadius: theme.spacing() * 1,
    },
    avatar: {
        margin: "0 auto",
        height: 150,
        width: 150,
        marginBottom: theme.spacing() * 2
    },
    TextField: {
        marginTop: theme.spacing() * 3
    }



}))
export default useStyles;