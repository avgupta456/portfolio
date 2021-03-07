import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import {
  ExpansionPanel,
  ExpansionPanelSummary,
  ExpansionPanelDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  panel: {
    backgroundColor: theme.palette.primary.main,
  },
  icon: {
    color: theme.palette.common.white,
  },
  date: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.white,
    marginRight: 0,
    marginLeft: 'auto',
  },
}));

export default function Education() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <ExpansionPanel
        expanded={expanded === 'panel1'}
        onChange={handleChange('panel1')}
      >
        <ExpansionPanelSummary
          className={classes.panel}
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="h6" className={classes.icon}>
            Yale University
          </Typography>
          <Typography className={classes.date}>Expected May 2023</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>
              Pursuing a major in <b>Computer Science</b> and Certificate in{' '}
              <b>Statistics and Data Science</b>
            </Typography>
            <br />
            <Typography>
              <b>Relavant Coursework:</b> CPSC 223: Data Structures, CPSC 290
              Directed Research, CPSC 323: Systems Programming, CPSC 366:
              Intensive Algorithms, CPSC 452: Deep Learning, MATH 230/231 Vector
              Calculus and Linear Algebra, MATH 244 Discrete Mathematics,
              S&amp;DS 230: R Programming
            </Typography>
            <br />
            <Typography>
              <b>Activities:</b> Yale Interactive Machines Group, YHack
              Organizing Team, Yale Computer Society, Yale Entrepreneurial
              Society Team
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel
        expanded={expanded === 'panel2'}
        onChange={handleChange('panel2')}
      >
        <ExpansionPanelSummary
          className={classes.panel}
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="h6" className={classes.icon}>
            North Carolina School of Science and Mathematics
          </Typography>
          <Typography className={classes.date}>
            August 2017 - May 2019
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>
              High School Education, focused in STEM fields
            </Typography>
            <br />
            <Typography>
              <b>Relavant Coursework:</b> Algorithms and Data Structures,
              Research in Physics, Numerical Analysis, Multivariable Calculus,
              Mathematical Modeling
            </Typography>
            <br />
            <Typography>
              <b>Activities:</b> FIRST Robotics Competition, Computer Science
              Club President, Math Modeling Competitions
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br />
      <ExpansionPanel
        expanded={expanded === 'panel3'}
        onChange={handleChange('panel3')}
      >
        <ExpansionPanelSummary
          className={classes.panel}
          expandIcon={<ExpandMoreIcon className={classes.icon} />}
        >
          <Typography variant="h6" className={classes.icon}>
            Panther Creek High School
          </Typography>
          <Typography className={classes.date}>
            August 2015 - June 2017
          </Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <div>
            <Typography>High School Education</Typography>
            <br />
            <Typography>
              <b>Relavant Coursework:</b> AP Computer Science Principles, AP
              Computer Science, AP Calculus, AP Statistics
            </Typography>
            <br />
            <Typography>
              <b>Activities:</b> FIRST Robotics Competition, Math Club
              President, Science Olympiad
            </Typography>
          </div>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
