import React from 'react';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Link from '@material-ui/core/Link';
import Avatar from '@material-ui/core/Avatar';
import CardHeader from '@material-ui/core/CardHeader';
import SocialMedia from './SocialMedia';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}{new Date().getFullYear()}
      {'. '}
        White Panda Media Pvt. Ltd. <br />
      {' '} All rights reserved <br /><br />
      
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  bigAvatar: {
    margin: 10,
    width: 60,
    height: 60,
  },

  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function Body() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h3" align="left" color="textPrimary" gutterBottom>
              Content Store
            </Typography>
            <Typography variant="h4" align="left" paragraph className="TextTeal">
              Got bulk orders or almost similar orders? Fill the order brief in an excel sheet
            </Typography>
            <Typography variant="h6" align="left" paragraph>
              If you're wondering about an easy way to place orders large numbers, we provide a way customized just for that.
              Download our excel sheet, and fill the order brief in the prescribed format and submit. In case you need any help, <Link href="">we
              are just a click away to assist you in placing your order.</Link>
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="left">
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Order via Excel Sheet
                  </Button>
                </Grid>

              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map(card => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>

                  <CardContent className={classes.cardContent}>
                    <CardHeader
                      avatar={
                        <Avatar alt="Remy Sharp" src="https://i.ibb.co/PjnCNb2/placeholder.jpg" className={classes.bigAvatar} />
                      }

                      title="Blog / Article"
                      subheader="from ₹500"
                    />
                    <Typography>
                      Typically 400-450 words, ae ebook is perfect for your target audience ranging from prospective customers to users.
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" variant="outlined" color="primary">
                      Order
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <SocialMedia />
        <Copyright />
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
         <Link>Privacy Policy</Link>   |  <Link>Terms of Service</Link> |  <Link>Service Agreement</Link>  | <Link>Contact us</Link>
        </Typography>

      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}

export default Body