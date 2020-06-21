import React, { useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
import AOS from 'aos';
import { makeStyles } from '@material-ui/core/styles';
import '../styles/dashboardcard.css';

const useStyles = makeStyles({
  card: {
    backgroundColor: 'rgba(0,0,0,0.4)'
  },
  media: {
    height: '150px !important'
  }
});

const DashboardCard = (props) => {
  useEffect(() => {
    AOS.init();
  })
  const classes = useStyles();
  return (
    <Card className={classes.card} elevation={3} data-aos="fade-up">
      <CardActionArea>
        <CardMedia >
          <span className={classes.media}>
            {props.icon}
          </span>
        </CardMedia>
        <CardContent>
          <Typography>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DashboardCard;