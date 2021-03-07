import React from 'react';
import PropTypes from 'prop-types';

import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Tabs, Tab, Box, Typography } from '@material-ui/core';

import Header from '../Header/Header';
import About, { ButtonBar } from '../About/About';
import Education from '../Education/Education';
import Experience from '../Experience/Experience';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import Awards from '../Awards/Awards';
import styles from './Tabs.module.css';

function TabPanel({ children, value, index }) {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.any.isRequired,
  value: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab_root: {
    justifyContent: 'center',
  },
  scroller: {
    flexGrow: 0,
  },
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          classes={{ root: classes.tab_root, scroller: classes.scroller }}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="About" id="scrollable-auto-tab-0" />
          <Tab label="Experience" id="scrollable-auto-tab-1" />
          <Tab label="Education" id="scrollable-auto-tab-2" />
          <Tab label="Projects" id="scrollable-auto-tab-3" />
          <Tab label="Skills" id="scrollable-auto-tab-4" />
          <Tab label="Awards" id="scrollable-auto-tab-5" />
          <Tab label="Contact" id="scrollable-auto-tab-6" />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Header />
        <About />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Header />
        <Experience />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Header />
        <Education />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Header />
        <Projects />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Header />
        <Skills />
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Header />
        <Awards />
      </TabPanel>
      <TabPanel value={value} index={6}>
        <Header />
        <Typography className={styles.center}>
          If you are interested in working with me, please contact me via email,
          at{' '}
          <a
            href="mailto:abhijit.gupta@yale.edu"
            target="_blank"
            rel="noopener noreferrer"
          >
            abhijit.gupta@yale.edu
          </a>
          . I look forward to discussing, thank you!
        </Typography>
        <br />
        <ButtonBar />
      </TabPanel>
    </div>
  );
}
