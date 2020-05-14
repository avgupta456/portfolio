import React from 'react';

import {ExpansionPanel, ExpansionPanelSummary, ExpansionPanelDetails } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { ProgressBar } from 'react-bootstrap';
import styles from './Skills.module.css';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.common.white,
  },
}));

function Panel({header, array}) {
  const classes = useStyles();

  return (
    <div className={styles.column}>
      <ExpansionPanel expanded={true} className={classes.root}>
        <ExpansionPanelSummary className={classes.header}>
          <Typography variant="h6" className={classes.white}>{header}</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails  className={styles.row}>
          {array.map((data) => {
            return (
              <div className={styles.max_width}>
                <div className={styles.left_column}>
                  <Typography variant="h6">{data.name}</Typography>
                </div>
                <div className={styles.right_column}>
                  <ProgressBar striped now={data.score}/>
                </div>
              </div>
            );
          })}
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}

export default function Skills() {
  const array = [{name:"Python", score:90}, {name:"Java", score: 75}]
  const array2 = [{name:"Python", score:90}, {name:"Java", score: 75}, {name:"React", score: 50}]

  return (
    <div className={styles.row}>
      <Panel header="Programming Languages" array={array}/>
      <Panel header="Frameworks" array={array2}/>
      <Panel header="Tools" array={array}/>
    </div>
  );
}
