import React from "react";

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { ProgressBar } from "react-bootstrap";
import styles from "./Skills.module.css";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  header: {
    backgroundColor: theme.palette.primary.main,
  },
  white: {
    color: theme.palette.common.white,
  },
}));

function Panel({ header, array }) {
  const classes = useStyles();

  return (
    <div className={styles.column}>
      <ExpansionPanel expanded={true} className={classes.root}>
        <ExpansionPanelSummary className={classes.header}>
          <Typography variant="h6" className={classes.white}>
            {header}
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={styles.row}>
          {array.map((data) => {
            return (
              <div className={styles.max_width}>
                <div className={styles.left_column}>
                  <Typography variant="h6">{data.name}</Typography>
                </div>
                <div className={styles.right_column}>
                  <ProgressBar striped now={data.score} />
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
  const languages = [
    { name: "Python", score: 90 },
    { name: "JavaScript", score: 80 },
    { name: "SQL", score: 70 },
    { name: "HTML/CSS", score: 60 },
    { name: "C/C++", score: 60 },
    { name: "Java", score: 50 },
  ];
  const frameworks = [
    { name: "NumPy", score: 90 },
    { name: "ReactJS", score: 80 },
    { name: "Django", score: 70 },
    { name: "PyTorch", score: 60 },
    { name: "TensorFlow", score: 50 },
    { name: "NodeJS", score: 50 },
  ];
  const concepts = [
    { name: "Git", score: 90 },
    { name: "REST APIs", score: 80 },
    { name: "GCP", score: 70 },
    { name: "Databases", score: 60 },
    { name: "CI/CD", score: 50 },
  ];
  const ml = [
    { name: "Neural Networks", score: 80 },
    { name: "Visualization", score: 70 },
    { name: "NLP", score: 70 },
    { name: "PCA", score: 60 },
  ];

  return (
    <div className={styles.row}>
      <Panel header="Programming Languages" array={languages} />
      <Panel header="Libraries/Frameworks" array={frameworks} />
      <Panel header="Concepts" array={concepts} />
      <Panel header="Machine Learning" array={ml} />
    </div>
  );
}
