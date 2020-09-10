import {createMuiTheme, makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import '../fonts/fontsCSS.css';

export const theme = createMuiTheme({
    palette: {
        background:{
            default:"#000000"
        },
        primary: {
        main: red[500],
        },
        secondary: {
        main: grey[900],
        },
        text:{
          primary: grey[900],
          secondary:grey[900],
        }
    },
  });

export const styles = makeStyles(theme =>{
    return {
    root: {
        flexGrow: 1,
    },
    image:{
        opacity: 0.3,
        objectFit: "cover"
    },
    imageCard:{
        background: "#000000",
        position: 'relative'
    },
    menuButton: {
        color: theme.palette.text.primary,
        marginRight: theme.spacing(2),
    },
    title: {
        fontFamily: "Formula1",
        fontSize: '3em',
        color: theme.palette.text.primary,
        flexGrow: 1,
    },
    overlay:{
        color: "#ffffff",
        fontSize: '2em',
        position:'absolute',
        top:"45%",
        left:"45%"
    }
}
}
);
