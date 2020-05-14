import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography, Divider, Paper, Chip, Button } from "@material-ui/core";
import styles from './Projects.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    listStyle: 'none',
    padding: theme.spacing(0.5),
    margin: 0,
    boxShadow: 'none',
  },
  chip: {
    margin: theme.spacing(0.5),
  },
  button: {
    float: 'right',
  }
}));

function ChipsArray() {
  const classes = useStyles();
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]);

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip
              label={data.label}
              className={classes.chip}
            />
          </li>
        );
      })}
    </Paper>
  );
}

function FancyHeaderCard() {
  const classes = useStyles();

  return (
    <Card className={styles.header}>
      <CardHeader
        className={styles.header_root}
        title={
          <div>
            Personal Website
            <Button variant="contained" className={classes.button}>
              Github
            </Button>
          </div>
        }
        subheader={"May 2020"}
        classes={{
          title: styles.title,
          subheader: styles.subheader,
        }}
      />
      <CardContent>
        <div className={styles.inner}>
          <Typography>
            This is test content blah blah blah This is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blah
          </Typography>
          <br/>
          <div className={styles.chips}>
            <ChipsArray/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <FancyHeaderCard/>
        </div>
        <div className={styles.column}>
          <FancyHeaderCard className={styles.column}/>
        </div>
        <div className={styles.column}>
          <FancyHeaderCard className={styles.column}/>
        </div>
        <div className={styles.column}>
          <FancyHeaderCard className={styles.column}/>
        </div>
      </div>
    </div>
  );
}
