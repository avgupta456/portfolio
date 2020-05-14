import React from 'react';

import { makeStyles, Theme } from '@material-ui/core/styles';
import {AppBar, Tabs, Tab, Box, Typography} from '@material-ui/core';

import { Header, About, Experience, Education, Projects } from './..'

interface TabPanelProps {
  children?: React.ReactNode;
  index: any;
  value: any;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          {children}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: any) {
  return {
    id: `scrollable-auto-tab-${index}`,
  };
}

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tab_root: {
    justifyContent: "center",
  },
  scroller: {
    flexGrow: 0,
  }
}));

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs
          classes={{root: classes.tab_root, scroller: classes.scroller}}
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
        >
          <Tab label="About" {...a11yProps(0)} />
          <Tab label="Experience" {...a11yProps(1)} />
          <Tab label="Education" {...a11yProps(2)} />
          <Tab label="Projects" {...a11yProps(3)} />
          <Tab label="Skills" {...a11yProps(4)} />
          <Tab label="Awards" {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Header/>
        <About/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Header/>
        <Experience/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Header/>
        <Education/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Header/>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Header/>
        <Typography>
          Unknown
        </Typography>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Header/>
        <Typography>
          Unknown
        </Typography>
      </TabPanel>
    </div>
  );
}
