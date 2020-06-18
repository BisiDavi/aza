import React from 'react';
import { Layout, Image, SEO } from '../components/imports';
import { makeStyles } from "@material-ui/core/styles"
import { Paper, TextField, Typography, Grid } from "@material-ui/core"


const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  }
}))

const Signup = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="Home" />
      <div className="signup">
        <Paper className="login container">
          <Grid container direction="row">
            <Grid item >
              <Typography variant="h3">Signup</Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6">Login</Typography>
            </Grid>
          </Grid>

          <Grid container direction="vertical">
            <Grid item>
              <div className="avatar-icon">
              </div>
            </Grid>
            <Grid item>
              <form className={classes.root} noValidate autoComplete="off">
                <TextField id="standard-basic" label="Standard" />
                <TextField
                  id="standard-password-input"
                  label="Password"
                  type="password"
                  autoComplete="current-password" />
              </form>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </Layout>
  );
}

export default Signup
