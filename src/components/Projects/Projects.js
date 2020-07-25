import React from "react";

import { makeStyles } from '@material-ui/core/styles';
import { Card, CardContent, CardHeader } from "@material-ui/core";
import { Typography, Paper, Chip, Button } from "@material-ui/core";
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
              color="primary-dark"
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
            name="Statbotics.io"
            date="January 2020 - Present"
            description=<p>Developing a full-stack open-source data analytics platform for the FIRST Robotics Competition. Implemented Django REST API, ReactJS frontend (1500+ visitors), Python PIP package (1000+ downloads). Visit <a href='https://statbotics.io' target="_blank" rel="noopener noreferrer">statbotics.io</a>!</p>
            array={[{key:0, label:'Python'}, {key:1, label:'NumPy'}, {key:2, label:'Django'}, {key:3, label:'REST APIs'}, {key:4, label:'ReactJS'}, {key:5, label: 'HTML/CSS'}, {key:6, label:'MySQL'}, {key:7, label:'Google Cloud Platform'}, {key:8, label:'Travis CI'}]}
            github="https://github.com/avgupta456/Statbotics"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="DANTE (Deep Learning Research)"
            date="January 2020 - Present"
            description="Developing an end-to-end deep learning pipeline studying social group phenomena in the context of human-robot interaction with custom data preprocessing, model architecture, loss function, and metrics."
            array={[{key:0, label:'Python'}, {key:1, label:'PyTorch'}, {key:2, label:'TensorFlow'}, {key:3,label:'Deep Learning'}]}
            github="https://github.com/avgupta456/cpsc290"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="YHack Website"
            date="March 2020 - Present"
            description="Lead the YHack Tech Team in developing YHack website, registration, and judging process for 2020 hackathon. Emphasis on updating the tech stack to modern frameworks without sacrificing functionality."
            array={[{key:0,label:'Django'}, {key:1,label:'HTML/CSS'}, {key:2,label:'Postgres'}, {key:3,label:'Heroku'}]}
            github="https://github.com/Y-Hack/django-yhack"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Personal Website"
            date="May 2020"
            description="Built a personal website from scratch using React, HTML/CSS, and the Material-UI component library."
            array={[{key:0,label:'React'}, {key:1,label:'HTML/CSS'}, {key:2,label:'Material-UI'}, {key:3,label:'CI/CD'}]}
            github="https://github.com/avgupta456/personal_website"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Project Horus"
            date="September 2019"
            description="Developed a receipt scanning app to detect healthy spending habits during the 2019 HackMIT event. Won the Instabase API sponsor award and the Financial Technology Track"
            array={[{key:0,label:'Python'}, {key:1,label:'AWS Textract'}, {key:2,label:'NLP'}, {key:3,label:'OCR'}, {key:4,label:'HTML/CSS'}]}
            github="https://github.com/avgupta456/HackMIT-2019"
          />
        </div>
      </div>
    </div>
  );
}
