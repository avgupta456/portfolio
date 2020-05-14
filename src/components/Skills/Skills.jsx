import React from 'react';

import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { Typography, Paper } from "@material-ui/core";
import { ProgressBar } from 'react-bootstrap';
import styles from './Skills.module.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '50%',
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.common.white,
  },
}));

export default function Skills() {
  const classes = useStyles();

  return (
    <div>
      <ExpansionPanel expanded={true} className={classes.root}>
        <ExpansionPanelSummary className={classes.header}>
          <Typography variant="h6" className={classes.white}>Programming Languages</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  className={styles.row}>
        <div className={styles.left_column}>
          <Typography variant="h6">Python</Typography>
        </div>
        <div className={styles.right_column}>
          <ProgressBar animated now={90} className={styles.bar}/>
        </div>
        <div className={styles.left_column}>
          <Typography variant="h6">Java</Typography>
        </div>
        <div className={styles.right_column}>
          <ProgressBar animated now={60} className={styles.bar}/>
        </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
