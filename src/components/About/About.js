import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography, Button, Avatar, Divider } from '@material-ui/core';

import styles from './About.module.css';
import pic from '../../static/images/avatar.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  profile: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  button: {
    margin: theme.spacing(1),
    flex: '0 0 100px',
  },
}));

export function ButtonBar() {
  const classes = useStyles();
  return (
    <div>
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
          href={`${process.env.PUBLIC_URL}/resume.pdf`}
          target="_blank"
        >
          <Typography>Resume</Typography>
        </Button>
      </div>
      <br />
    </div>
  );
}

export default function About() {
  const classes = useStyles();

  return (
    <div>
      <div className={styles.row}>
        <div className={styles.left_column}>
          <div className={styles.text}>
            <Typography>
              Hello! My name is Abhijit Gupta, and I am a{' '}
              <b>sophomore at Yale University</b>, majoring in Computer Science
              with a certificate in Statistics and Data Science. At Yale, I am a
              member of the Interactive Machines Group, where I conduct research
              in the field of human-robot interaction using deep learning. I
              also lead the tech team for YHack and contribute to the Yale
              Computer Society and Yale Entrepreneurial Society. I have
              previously interned with RTI International and Gatherly, and will
              be interning with Jane Street in Summer 2021, and Sentry.io in
              Fall 2021. In my free time, I work on side projects such as{' '}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://statbotics.io"
              >
                statbotics.io
              </a>{' '}
              and QuickBites. I also enjoy dancing and rock climbing. Please
              feel free to reach out!
            </Typography>
            <br />
            <Divider />
            <br />
            <ButtonBar />
          </div>
        </div>
        <div className={styles.right_column}>
          <div className={styles.picture}>
            <Avatar
              alt="Abhijit Gupta"
              src={pic}
              className={classes.profile}
              variant="rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
