import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button } from '@material-ui/core';

import { Profile } from './..'
import styles from './About.module.css'

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    flex: "0 0 100px",
  },
}));

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.left_column}>
          <div className={styles.text}>
            <Typography>
              Hello! My name is Abhijit Gupta, and I am a junior at Yale University, majoring in Computer Science and Applied Mathematics.
              I am a member of the Yale Interactive Machines Group, where I conduct research in the field of human-robot interaction using deep learning.
              I'm also a developer for the Yale Computer Society, and help organize YHack, Yale’s largest annual hackathon.
              This past summer, I interned at RTI International as a data warehouse intern, working on ___.
              In my free time, I enjoy dancing and climbing.
            </Typography>
            <br/>
            <Typography>
              I am actively seeking internship opportunities for <b>Summer 2021</b>. Please reach out to me if interested!
            </Typography>
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.picture}>
            <Profile/>
          </div>
        </div>
      </div>
      <div className={styles.buttons}>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="mailto:abhijit.gupta@yale.edu"
          target="_blank"
        >
          <Typography>Email</Typography>
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://github.com/avgupta456"
          target="_blank"
        >
          <Typography>Github</Typography>
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href="https://www.linkedin.com/in/avgupta456"
          target="_blank"
        >
          <Typography>LinkedIn</Typography>
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          className={classes.button}
          href={process.env.PUBLIC_URL + '/resume.pdf'}
          target='_blank'
        >
          <Typography>Resume</Typography>
        </Button>
      </div>
    </div>
  );
}
