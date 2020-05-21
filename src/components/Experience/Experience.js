import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import WorkIcon from '@material-ui/icons/Work';
import {Typography} from '@material-ui/core';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from './Experience.module.css'

const useStyles = makeStyles((theme) => ({
  root: {
    ...theme.typography,
    padding: theme.spacing(1),
  },
}));

function TimelineElement({title, location, date, details, color}) {
  const classes = useStyles();

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ border: `3px solid ${color}`, color: '#000' }}
      contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
      date={date}
      dateClassName={classes.root}
      iconStyle={{ background: `${color}`, color: '#fff' }}
      icon={<WorkIcon />}
    >
      <Typography variant="h6" className="vertical-timeline-element-title">{title}</Typography>
      <Typography variant="subtitle2" className="vertical-timeline-element-subtitle">{location}</Typography>
      <Typography>{details}</Typography>
    </VerticalTimelineElement>
  )
}

export default function Timeline(props) {
  const primary = '#3f51b5'

  return (
    <VerticalTimeline
      animate={true}
      layout={'2-columns'}
      className={styles.line}
    >
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Undergraduate Researcher | Yale University (<a href='http://interactive-machines.com/' target="_blank" rel="noopener noreferrer">Interactive Machines Group</a>)</Typography>
        location = "New Haven, Connecticut"
        date = "January 2020 - Present"
        details = "Developing a deep learning pipeline studying social group phenomena in the context of human-robot interaction (HRI); to be implemented on the Yale IMG Shutter Robot. Using Python, TensorFlow, and ROS."
        color = {primary}
      />
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Data Warehouse Intern | <a href='https://www.rti.org/' target="_blank" rel="noopener noreferrer">RTI International</a></Typography>
        location = "Raleigh, North Carolina"
        date = "May 2020 - Present"
        details = "Incoming Data Warehouse Intern at RTI International"
        color = {primary}
      />
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Computer Science Instructor | <a href='https://junilearning.com/' target="_blank" rel="noopener noreferrer">Juni Learning</a></Typography>
        location = "Remote"
        date = "February 2020 - Present"
        details = "Teach middle school and high school students computer science fundamentals (in Java and Python) through the online Juni Learning platform."
        color = {primary}
      />
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Undergraduate Researcher | Yale University (<a href='https://yale-lily.github.io/' target="_blank" rel="noopener noreferrer">LILY Lab</a>)</Typography>
        location = "New Haven, Connecticut"
        date = "August 2019 - December 2019"
        details = <p>Developed machine learning models classifying salient events in physics simulations as part of a larger project studying implicit physical reasoning in natural language processing.
          Paper available <a href='https://arxiv.org/abs/2005.00730' target="_blank" rel="noopener noreferrer">here</a></p>
        color = {primary}
      />
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Captain | <a href='https://cortechsrobotics.com/' target="_blank" rel="noopener noreferrer">FRC 5511 Cortechs Robotics</a></Typography>
        location = "Cary, North Carolina"
        date = "August 2015 - July 2019"
        details = "Led team of forty members, handled budget of over $50,000, built and programmed 100+ pound robots, competed locally and internationally in the FIRST Robotics Competition, spread STEM education to underserved communities."
        color = {primary}
      />
      <TimelineElement
        title = <Typography variant="h6" className="vertical-timeline-element-title">Student Researcher | UNC-Chapel Hill</Typography>
        location = "Durham, North Carolina"
        date = "November 2017 - May 2019"
        details = "Analyzed the Effects of Relativity on the Quadrupole Oscillation of Compact Objects using computational methods."
        color = {primary}
      />
      <VerticalTimelineElement
        iconStyle={{ background: `${primary}`, color: '#fff' }}
        icon={<StarIcon />}
      />
    </VerticalTimeline>
  );
}
