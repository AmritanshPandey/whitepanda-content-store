import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Facebook from '@material-ui/icons/Facebook';
import Twitter from '@material-ui/icons/Twitter';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';


const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(2),
  },
  padding: {
    padding: theme.spacing(0, 2),
  },
  text: {
    textAlign: "center"
  }
}));

function SocialMedia() {
  const classes = useStyles();

  return (
    <div className={classes.text}>
        <IconButton  className={classes.margin}>
        <Twitter className="big-icon" />    
        </IconButton>
        <IconButton  className={classes.margin}>
        <LinkedIn  className="big-icon" />
        </IconButton>
        <IconButton  className={classes.margin}>
        <Instagram className="big-icon" />
        </IconButton>
        
        <IconButton  className={classes.margin}>
        <Facebook className="big-icon" />
        </IconButton>
         
      </div>
      
  );
}

export default SocialMedia