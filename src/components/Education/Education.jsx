import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  tab: {
    backgroundColor: theme.palette.primary.light,
  },
  icon: {
    color: theme.palette.common.white,
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.common.white,
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
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
      <ExpansionPanel expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <ExpansionPanelSummary className={classes.tab} expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
          <Typography className={classes.heading}>Yale University</Typography>
          <Typography className={classes.secondaryHeading}>Expected May 2022</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Yale Content Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br/>
      <ExpansionPanel expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <ExpansionPanelSummary className={classes.tab} expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
          <Typography className={classes.heading}>North Carolina School of Science and Mathematics</Typography>
          <Typography className={classes.secondaryHeading}>August 2017 - May 2019</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            NCSSM Content Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <br/>
      <ExpansionPanel expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <ExpansionPanelSummary className={classes.tab} expandIcon={<ExpandMoreIcon className={classes.icon}/>}>
          <Typography className={classes.heading}>Panther Creek High School</Typography>
          <Typography className={classes.secondaryHeading}>August 2015 - June 2017</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            Panther Creek Content Here
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
