import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MailIcon from '@material-ui/icons/Mail';
import { Link } from "gatsby"
import '../styles/bottomnav.css';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'sticky !important',
    bottom: 0,
    display: "flex",
    justifyContent: "space-between"
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const LinkBottomNav = (props) => {
    return (
      <Link to={props.linkto}>
        <BottomNavigationAction label={props.linkLabel} icon={props.navIcon} />
      </Link >
    )
  }

  return (
    <BottomNavigation value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
      <LinkBottomNav linkto="/" linkLabel="Home" navIcon={<HomeIcon />} />
      <LinkBottomNav linkto="/dashboard" linkLabel="Inbox" navIcon={<MailIcon />} />
      <LinkBottomNav linkto="/contact" linkLabel="More Data" navIcon={<MoreVertIcon />} />
    </BottomNavigation>
  );
}
