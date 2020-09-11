import {createMuiTheme, makeStyles, Theme, createStyles} from "@material-ui/core/styles";
import purple from '@material-ui/core/colors/purple';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';
import '../fonts/fontsCSS.css';
import image from '../fonts/photo.png';
import image2 from '../fonts/f12020.png';
import { blue } from "@material-ui/core/colors";

export const theme = createMuiTheme({
    palette: {
        background:{
            default:"#101010"
        },
        primary: {
        main: red[500],
        },
        secondary: {
        main: grey[900],
        },
        text:{
          primary: grey[900],
          secondary:green[900],
          disabled:blue[900]
        }
    },
  });

export const styles = makeStyles(theme =>{
    return {
    root: {
        flexGrow: 1,
    },
    image:{
        height:300,
        opacity: 1,
        position: 'relative',
        backgroundImage: `url(${image2})`,
        backgroundSize:"cover",
        backgroundColor: theme.palette.grey[800],
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
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
    button: {
        fontFamily: "Formula1",
        flexGrow: 1,
    },
    overlay:{
        position:'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.7)'
    },
    imageText:{
        color: "#ffffff",
        fontSize: '2em',
        position: 'relative',
        textAlign: 'center',
        top:"40%"
    }
}
}
);
