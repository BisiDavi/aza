import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import GroupAddIcon from '@material-ui/icons/GroupAdd';
import { Logo } from '../components/imports';
import { Link } from 'gatsby';
import { Paper, TextField, Typography, Grid, Avatar, Button } from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '30ch',
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
  login: {
    paddingTop: 10,
    color: 'gray',
    fontWeight: 'bolder'
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
  icon: {
    width: '60px !important',
    height: '60px !important'
  },
  button: {
    justifyContent: 'center',
    margin: 'auto',
    backgroundImage: 'linear-gradient( 136deg, rgb(242,113,33) 0%, rgb(233,64,87) 50%, rgb(138,35,135) 100%) !important',
    display: 'flex',
    color: 'white',
    fontWeight: 'bold',
  },
  logo: {
    padding: '10px 0px 0px 25px',
    height: '70px'
  },
  terms: {
    textAlign: 'center',
    padding: 20
  }
}))

const Signup = () => {
  const classes = useStyles();
  return (
    <div className="signup">
      <Paper className={classes.paper}>
        <Grid container>
          <Grid item className={classes.logo}>
            <Logo />
          </Grid>
        </Grid>
        <Grid container className={classes.signupHeader} direction="row">
          <Grid item >
            <Typography variant="h4">Signup</Typography>
          </Grid>
          <Grid className={classes.login} item>
            <Typography variant="h5">
              <Link to="/login"> Login</Link>
            </Typography>
          </Grid>
        </Grid>

        <Grid container direction="column">
          <Grid item>
            <div className={classes.avatarIcon}>
              <Avatar className={classes.large}><GroupAddIcon className={classes.icon} /></Avatar>
            </div>
          </Grid>
          <Grid item>
            <form className={classes.root} noValidate autoComplete="off">
              <TextField id="standard-basic" label="Phone Number" />
              <TextField id="standard-basic" label="Full Name" />
              <TextField
                id="standard-password-input"
                label="Password"
                type="password"
                autoComplete="current-password" />
              <TextField
                id="standard-password-input"
                label="Confirm Password"
                type="password"
                autoComplete="current-password" />
            </form>
          </Grid>
          <Grid item>
            <Button variant="contained" className={classes.button}>
              SIGN UP
           </Button>
          </Grid>
          <Grid item>
            <Typography className={classes.terms}>Terms of Service</Typography>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

export default Signup
