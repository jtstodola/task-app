import React from 'react';
import logo from '../../images/logo.png';
import blue_yellow from '../../images/blue_yellow.png';
import Button from '@material-ui/core/Button';
import grey from '@material-ui/core/colors/grey';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

const primary = grey[900]; // #212121
const secondary = grey[50]; // #fafafa

function ForgotPassword() {
  return (
    <Typography 
      variant="caption" 
      color="textSecondary"
    >
      <Link color="inherit" href="https://material-ui.com/">
      FORGOT PASSWORD
      </Link>
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: `url(${blue_yellow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'right bottom',
  },
  logo: {
    size: '1000px'
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  cardMedia: {
    paddingTop: '56.25%',
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  signIn: {
    borderColor: primary,
    backgroundColor: primary,
    color: secondary,
    margin: theme.spacing(0, 0, 1)
  },
  create: {
    borderColor: primary,
    margin: theme.spacing(0, 0, 1)
  }
}));


export default function Login() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={0} square>
        <div className={classes.paper}>
          <img className={classes.logo} src={logo} alt="logo" />
          <Typography component="h1" variant="h5">
            Welcome to Birdseye!
          </Typography>
          <form className={classes.form} >
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color={secondary}
              size="small"
              className={classes.signIn}
            >
              Sign In
            </Button>
            <Button
              type="submit"
              fullWidth
              size="small"
              variant="outlined"
              color={primary}
              className={classes.create}
            >
              Create an Account
            </Button>
            <Box mt={1} align="center">
              <ForgotPassword />
            </Box>
          </form>
        </div>
      </Grid>

      <Grid item xs={false} sm={4} md={7} className={classes.image} />
    </Grid>

  );
}
