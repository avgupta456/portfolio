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
              clickable
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
              color="secondary"
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
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <FancyHeaderCard
            name="DANTE Extension"
            date="January 2020 - Present"
            description="Researching the automated detection of conversation structures using computer vision and deep learning techniques. I am currently extending the DANTE algorithm to encorporate input features such as body pose and skeletal markers."
            array={[{key:0,label:'Python'}, {key:1,label:'TensorFlow'}, {key:2,label:'Deep Learning'}, {key:3,label:'ROS'}]}
            github="https://github.com/avgupta456/cpsc290"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Statbotics"
            date="August 2019 - Present"
            description="Developing a website delivering statistics and analysis for the high school FRC robotics competition. Data collection and analysis in Python, displayed with Django/React."
            array={[{key:0,label:'Python'}, {key:1,label:'Django'}, {key:2,label:'React'}, {key:3,label:'MySQL'}, {key:5,label:'Web APIs'}]}
            github="https://github.com/avgupta456/Statbotics"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="YHack Website"
            date="March 2020 - Present"
            description="Leading a team of developers revamping the YHack website, used to advertise and accept applications for Yale's largest annual hackathon. Emphasis on updating the tech stack to modern frameworks without sacrificing functionality."
            array={[{key:0,label:'Django'}, {key:1,label:'React'}, {key:2,label:'Postgres'}, {key:3,label:'Heroku'}]}
            github="https://github.com/Y-Hack/django-yhack"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Personal Website"
            date="May 2020"
            description="Built a personal website from scratch using React, HTML/CSS, and the Material-UI component library to display my portfolio and improve my web development skills."
            array={[{key:0,label:'React'}, {key:1,label:'HTML/CSS'}, {key:2,label:'Material-UI'}, {key:3,label:'CI/CD'}, {key:4,label:'Github Pages'}]}
            github="https://github.com/avgupta456/personal_website"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Project Horus"
            date="September 2019"
            description="Developed a receipt scanning app to detect healthy spending habits during the 2019 HackMIT event. Won the Instabase API sponsor award and the Financial Technology Track"
            array={[{key:0,label:'Python'}, {key:1,label:'AWS Textract'}, {key:2,label:'Machine Learning'}, {key:3,label:'NLP/OCR'}, {key:4,label:'HTML/CSS/JS'}]}
            github="https://github.com/avgupta456/HackMIT-2019"
          />
        </div>
      </div>
    </div>
  );
}
