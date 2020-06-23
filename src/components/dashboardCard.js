import React, { useEffect } from 'react';
import { Card, CardActionArea, CardMedia, CardContent, Typography } from '@material-ui/core';
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
          <Typography color="primary" className={classes.cardlink}>
            {props.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default DashboardCard;