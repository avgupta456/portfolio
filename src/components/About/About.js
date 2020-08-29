import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import { Typography, Button, Avatar, Divider } from "@material-ui/core";

import styles from "./About.module.css";
import pic from "./../../static/images/avatar.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
  profile: {
    width: theme.spacing(30),
    height: theme.spacing(30),
  },
  button: {
    margin: theme.spacing(1),
    flex: "0 0 100px",
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
          href={process.env.PUBLIC_URL + "/resume.pdf"}
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
              Hello! My name is Abhijit Gupta, and I am a rising{" "}
              <b>junior at Yale University</b>, majoring in Computer Science and
              Applied Mathematics. I am currently on a gap semester, working as
              a <b>Software Engineer at Gatherly</b>. At Yale, I am a member of
              the Interactive Machines Group, where I conduct research in the
              field of human-robot interaction using deep learning. I also lead
              the tech team for YHack and contribute as developer for the Yale
              Computer Society. In my free time, I work on{" "}
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://statbotics.io"
              >
                statbotics.io
              </a>
              . I also enjoy rock climbing and dancing.
            </Typography>
            <br />
            <Typography>
              I am actively seeking internship opportunities for{" "}
              <b>Spring 2021 and Summer 2021</b>. Please reach out, I'd love to
              chat!
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
