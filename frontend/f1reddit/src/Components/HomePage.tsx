import React from 'react';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { styles, theme } from './styles';
import TopBar from './TopBar';
import { Paper } from '@material-ui/core';

export default function ImgMediaCard() {
    const classes = styles();
  
    return (
        <Paper>
            <Paper className={classes.image}>
                <div className={classes.overlay}>
                <Typography variant="body2" color="textPrimary" component="p" className={classes.imageText}>
                    S🅱inalla
                </Typography>
                </div>
            </Paper>
        </Paper>
      
    );
    /*
    <Card className={classes.imageCard}>
                <CardMedia className={classes.image}
                    component="img"
                    alt="f1 Banner"
                    height="300"
                    image="https://cdn.discordapp.com/attachments/700790460335128696/753006119210975332/F1_2020_photo_superres_20200907_131636.png"
                />
                
            </Card>
    */
  }