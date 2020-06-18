import React from 'react';
import { Paper, Typography, Grid, TextField } from "@material-ui/core"
import { makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles({
  root: {

  }
})

const Login = () => {
  const classes = useStyles();
  return (
    <Paper className="login container">
      <Grid container direction="row">
        <Grid item xs={6}>
          <Typography variant="h3">Login</Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography variant="h6">Signup</Typography>
        </Grid>
      </Grid>

      <Grid direction="vertical">
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
  )
}

export default Login;