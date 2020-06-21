import React from 'react';
import { Layout, SEO, DashboardCard, WalletIcon, MaleIcon, PayfundsIcon, FemaleIcon } from '../components/imports';
import { Grid } from '@material-ui/core';
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
    backgroundColor: 'rgba(0,0,0,0.2)',
    display: 'grid',
    height: '65vh',
    gridTemplateColumns: 'repeat(2, 2fr)',
    gridGap: '10px',
    padding: '20px',
  }
})
const Dashboard = () => {
  const classes = useStyles();
  return (
    <Layout>
      <SEO title="get notified when you're merged" />
      <div className="notification">
        <Grid container direction="column">
          <Grid item>
            <div className={classes.upperSection}>
              <h4>Dashboard</h4>

            </div>
          </Grid>
          <Grid item>
            <div className={classes.lowerSection}>
              <DashboardCard name="Wallet" icon={<WalletIcon />} />
              <DashboardCard name="Pay Funds" icon={<PayfundsIcon />} />
              <DashboardCard name="Profile" icon={<MaleIcon />} />
              <DashboardCard name="News" icon={<FemaleIcon />} />
            </div>
          </Grid>
        </Grid>
      </div>
    </Layout>
  );
}

export default Dashboard;