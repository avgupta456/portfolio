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
    backgroundColor: theme.palette.primary.light,
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
                  <ProgressBar animated now={data.score}/>
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
  const languages = [{name:"Python", score:90}, {name:"Java", score: 70}, {name:"C/C++", score: 70}, {name: "Javascript", score: 60}, {name: "HTML/CSS", score: 50}, {name: "R", score: 30}]
  const frameworks = [{name:"NumPy", score:90}, {name:"TensorFlow", score: 70}, {name:"ReactJS", score: 60}, {name:"Pandas", score: 60}, {name:"Django", score: 50}]
  const ml = [{name:"Neural Network", score: 80}, {name: "Visualization", score: 70}, {name: "PCA", score: 60}, {name: "SVM", score: 50}]
  const concepts = [{name:"Git", score:90}, {name:"Web APIs", score:80}, {name:"Data Structures", score: 70}, {name:"Algorithms", score:70}]

  return (
    <div className={styles.row}>
      <Panel header="Programming Languages" array={languages}/>
      <Panel header="Libraries/Frameworks" array={frameworks}/>
      <Panel header="Machine Learning" array={ml}/>
      <Panel header="Concepts" array={concepts}/>
    </div>
  );
}
