import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader, Typography, Paper, Chip, Button } from "@material-ui/core";
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

function ChipsArray({array}) {
  const classes = useStyles();

  let new_array = array;
  if (!new_array) {
    new_array = [{key:0, label:'Fill In'}];
  }

  const [chipData] = React.useState(new_array);

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

function FancyHeaderCard({name, date, description, array, github}) {
  const classes = useStyles();

  return (
    <Card className={styles.header}>
      <CardHeader
        className={styles.header_root}
        title={
          <div>
            {name}
            <Button
              variant="contained"
              className={classes.button}
              href={github}
              target="_blank"
            >
              Github
            </Button>
          </div>
        }
        subheader={date}
        classes={{
          title: styles.title,
          subheader: styles.subheader,
        }}
      />
      <CardContent>
        <div className={styles.inner}>
          <Typography>
            {description}
          </Typography>
          <br/>
          <div className={styles.chips}>
            <ChipsArray array={array}/>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  const array = [
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' },
  ]

  const name = "Personal Website"
  const date = "May 2020"
  const description = "This is test content blah blah blah This is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blah"
  const github = "temp"

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <FancyHeaderCard
            name={name}
            date={date}
            description={description}
            array={array}
            github={github}
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name={name}
            date={date}
            description={description}
            array={array}
            github={github}
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name={name}
            date={date}
            description={description}
            array={array}
            github={github}
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name={name}
            date={date}
            description={description}
            array={array}
            github={github}
          />
        </div>
      </div>
    </div>
  );
}
