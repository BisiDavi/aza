import React from 'react';
import { Paper, Typography, Grid, TextField, Avatar, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import FacebookIcon from '@material-ui/icons/Facebook';
import { Link } from 'gatsby';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
      marginLeft: '35px'
    },
  },
  paper: {
    margin: '20px !important',
    background: 'rgba(0,0,0,0.03)',
    height: '95vh'
  },
  signupHeader: {
    justifyContent: "space-around",
    padding: 20,
    paddingBottom: '40px'
  },
  signup: {
    paddingTop: 10,
    color: 'gray',
    fontWeight: 'bolder',
    '& > *': {
      textDecoration: 'none',
    }
  },
  large: {
    width: theme.spacing(11),
    height: theme.spacing(11),
    fontSize: 16,
    margin: 'auto',
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%)'
  },
  avatarIcon: {
    paddingBottom: 30
  },
  button: {
    justifyContent: 'center',
    margin: 'auto',
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%) !important',
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
  },
  login: {
    textAlign: 'center',
    padding: 20
  }
}))

const Login = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.signupHeader} direction="row">
        <Grid item>
          <Typography variant="h4">Login</Typography>
        </Grid>
        <Grid item className={classes.signup}>
          <Typography variant="h5">
            <Link to="/signup">Signup </Link>
          </Typography>
        </Grid>
      </Grid>

      <Grid container direction="column">
        <Grid item>
          <div className={classes.avatarIcon}>
            <Avatar className={classes.large}>Welcome</Avatar>
          </div>
        </Grid>
        <Grid item>
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="standard-basic" label="Phone Number" />
            <TextField
              id="standard-password-input"
              label="Password"
              type="password"
              autoComplete="current-password" />
          </form>
        </Grid>
        <Grid item>
          <Button variant="contained" className={classes.button}>
            LOGIN
          </Button>
        </Grid>
        <Grid item>
          <Typography className={classes.login}>Login with your social account</Typography>
          <div className="sociallogin">
            <FacebookIcon />
          </div>
        </Grid>
      </Grid>
    </Paper>
  )
}

export default Login;