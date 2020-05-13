import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import pic from "./../../static/images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex', '& > *': {
      margin: theme.spacing(1),
    },
  },
  profile: {
    width: theme.spacing(25),
    height: theme.spacing(25),
  },
}));

export default function ImageAvatars() {
  const classes = useStyles();

  return (
    <Avatar alt="Abhijit Gupta" src={pic} className={classes.profile} variant="rounded"/>
  );
}
