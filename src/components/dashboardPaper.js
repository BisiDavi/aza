import React, { useEffect } from 'react';
import { Paper, Typography } from '@material-ui/core';
import AOS from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/dashboardcard.css';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'white'
  },
  media: {
    height: '150px !important'
  },
  cardlink: {
    textAlign: 'center'
  }
});

const DashboardPaper = (props) => {
  useEffect(() => {
    AOS.init();
  })
  const classes = useStyles();
  return (
    <Paper className={classes.card} elevation={4} data-aos="fade-up">      
      <span className={classes.media}>
        {props.icon}
      </span>        
      <Typography color="primary" className={classes.cardlink}>
        {props.name}
      </Typography>        
    </Paper>
  )
}

export default DashboardPaper;