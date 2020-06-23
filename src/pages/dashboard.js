import React from 'react';
import {
  Layout, SEO, WalletIcon, MaleIcon,
  PayfundsIcon, FemaleIcon, DashboardPaper
} from '../components/imports';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';




const useStyles = makeStyles({
  upperSection: {
    height: '25vh',
    backgroundColor: 'rgba(20,10,600,0.84)',
    borderTopRightRadius: '20px',
    color: 'white',
    marginTop: '10px !important',
    borderTopLeftRadius: '20px'
  },
  lowerSection: {
    backgroundColor: 'rgba(0,0,0,0.1)',
    display: 'grid',
    height: '65vh',
    gridTemplateColumns: 'repeat(2, 1fr)',
    marginTop: '-75px',
    gridGap: '20px',
    padding: '20px',
  },
  dashboardtext: {
    textAlign: 'center',
    color: 'black',
    marginTop: '-20px',
  }
})
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="get notified when you're merged" />
      <div className="notification">
        <Typography variant="h4" className={classes.dashboardtext}>Dashboard</Typography>
        <Grid container direction="column">
          <Grid item>
            <div className={classes.upperSection}>

            </div>
          </Grid>
          <Grid item>
            <div className={classes.lowerSection}>
              <DashboardPaper name="Wallet" icon={<WalletIcon />} />
              <DashboardPaper name="Pay Funds" icon={<PayfundsIcon />} />
              <DashboardPaper name="Profile" icon={<MaleIcon />} />
              <DashboardPaper name="News" icon={<FemaleIcon />} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default Dashboard;