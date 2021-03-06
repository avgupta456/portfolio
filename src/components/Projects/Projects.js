import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  CardHeader,
  Typography,
  Paper,
  Chip,
  Button,
} from '@material-ui/core';

import styles from './Projects.module.css';

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
  },
}));

function ChipsArray({ array }) {
  const classes = useStyles();

  let newArray = array;
  if (!newArray) {
    newArray = [{ key: 0, label: 'Fill In' }];
  }

  const [chipData] = React.useState(newArray);

  return (
    <Paper component="ul" className={classes.root}>
      {chipData.map((data) => {
        return (
          <li key={data.key}>
            <Chip label={data.label} className={classes.chip} clickable />
          </li>
        );
      })}
    </Paper>
  );
}

ChipsArray.propTypes = {
  array: PropTypes.array.isRequired,
};

function FancyHeaderCard({ name, date, description, array, github }) {
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
          <Typography>{description}</Typography>
          <br />
          <div className={styles.chips}>
            <ChipsArray array={array} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

FancyHeaderCard.propTypes = {
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  array: PropTypes.array.isRequired,
  github: PropTypes.string.isRequired,
};

export default function Projects() {
  return (
    <div>
      <div className={styles.row}>
        <div className={styles.column}>
          <FancyHeaderCard
            name="QuickBites"
            date="October 2020 - January 2021"
            description={
              <p>
                Developed a Python Flask API, React Native mobile application to
                query Doordash, Uber Eats, and Grubhub for the best food
                delivery deals. Published to Google Play and the App Store (500+
                users, 4,000+ screen views). Visit{' '}
                <a
                  href="https://quickbites.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  quickbites.app
                </a>
                !
              </p>
            }
            array={[
              { key: 0, label: 'Python' },
              { key: 1, label: 'Flask' },
              { key: 2, label: 'REST APIs' },
              { key: 3, label: 'GraphQL' },
              { key: 4, label: 'React Native' },
              { key: 5, label: 'Expo' },
              { key: 6, label: 'HTML/CSS' },
              { key: 7, label: 'Google Cloud Platform' },
            ]}
            github="https://github.com/avgupta456/quickbites"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Statbotics.io"
            date="January 2020 - August 2020"
            description={
              <p>
                Established an open-source full-stack data analytics platform
                for the FIRST Robotics Competition. Developed Django REST API,
                ReactJS frontend (10,000+ page views), Python PIP package
                (10,000+ installs). Visit{' '}
                <a
                  href="https://statbotics.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  statbotics.io
                </a>
                !
              </p>
            }
            array={[
              { key: 0, label: 'Python' },
              { key: 1, label: 'NumPy' },
              { key: 2, label: 'Django' },
              { key: 3, label: 'REST APIs' },
              { key: 4, label: 'ReactJS' },
              { key: 5, label: 'HTML/CSS' },
              { key: 6, label: 'MySQL' },
              { key: 7, label: 'Google Cloud Platform' },
              { key: 8, label: 'Travis CI' },
            ]}
            github="https://github.com/statbotics/statbotics"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="DANTE (Deep Learning Research)"
            date="January 2020 - Present"
            description="Building an end-to-end deep learning pipeline analyzing social group phenomena for human-robot interaction. Optimizing custom data preprocessing, model architecture, and loss function to improve prior metrics by 14%"
            array={[
              { key: 0, label: 'Python' },
              { key: 1, label: 'PyTorch' },
              { key: 2, label: 'TensorFlow' },
              { key: 3, label: 'Deep Learning' },
            ]}
            github="https://github.com/avgupta456/cpsc290"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="YHack Website"
            date="March 2020 - Present"
            description="Manage six developers designing the YHack frontend, YHack application system serving 2,000+ candidates. Additionally develop standalone team formation, project juding tools."
            array={[
              { key: 0, label: 'ReactJS' },
              { key: 1, label: 'TailwindCSS' },
              { key: 2, label: 'Python' },
              { key: 3, label: 'Django' },
              { key: 5, label: 'Heroku' },
            ]}
            github="https://github.com/Y-Hack/django-yhack"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="CourseTable"
            date="July 2020 - Present"
            description="Contributing to team redesigning CourseTable, Yale’s leading course search website, with modern frameworks. Spearheading initiative using NLP on 10,000+ course descriptions to predict similarity, sentiment, keywords, etc."
            array={[
              { key: 0, label: 'Python' },
              { key: 1, label: 'GraphQL' },
              { key: 2, label: 'Hasura' },
              { key: 3, label: 'ReactJS' },
              { key: 4, label: 'Docker' },
              { key: 5, label: 'NLP' },
            ]}
            github="https://github.com/coursetable/coursetable"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Personal Website"
            date="May 2020"
            description="Built a personal website from scratch using React, HTML/CSS, and the Material-UI component library."
            array={[
              { key: 0, label: 'React' },
              { key: 1, label: 'HTML/CSS' },
              { key: 2, label: 'Material-UI' },
              { key: 3, label: 'CI/CD' },
            ]}
            github="https://github.com/avgupta456/personal_website"
          />
        </div>
        <div className={styles.column}>
          <FancyHeaderCard
            name="Project Horus"
            date="September 2019"
            description="Developed a receipt scanning app to detect healthy spending habits during the 2019 HackMIT event. Won the Instabase API sponsor award and the Financial Technology Track"
            array={[
              { key: 0, label: 'Python' },
              { key: 1, label: 'AWS Textract' },
              { key: 2, label: 'NLP' },
              { key: 3, label: 'OCR' },
              { key: 4, label: 'HTML/CSS' },
            ]}
            github="https://github.com/avgupta456/HackMIT-2019"
          />
        </div>
      </div>
    </div>
  );
}
