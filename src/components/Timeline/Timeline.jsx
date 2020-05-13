import React from 'react';

import {Typography} from '@material-ui/core';

import WorkIcon from '@material-ui/icons/Work';
import SchoolIcon from '@material-ui/icons/School';
import StarIcon from '@material-ui/icons/Star';

import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import styles from './Timeline.module.css'

function TimelineElement({title, location, date, details, color}) {

  return (
    <VerticalTimelineElement
      className="vertical-timeline-element--work"
      contentStyle={{ background: `${color}`, color: '#fff' }}
      contentArrowStyle={{ borderRight: `7px solid  ${color}` }}
      date={<Typography>{date}</Typography>}
      iconStyle={{ background: `${color}`, color: '#fff' }}
      icon={<WorkIcon />}
    >
      <Typography variant="h6" className="vertical-timeline-element-title">{title}</Typography>
      <Typography variant="subtitle2" className="vertical-timeline-element-subtitle">{date}</Typography>
      <Typography>
        {details}
      </Typography>
    </VerticalTimelineElement>
  )
}

export default function Timeline(props) {
  const primary_light = '#7986cb'

  return (
    <VerticalTimeline
      animate={true}
      layout={'1-column'}
      className={styles.line}
    >
      <TimelineElement
        title = "Data Warehouse Intern, RTI International"
        location = "Raleigh, North Carolina"
        date = "May 2020 - August 2020"
        details = "Data Visualization, Data Warehousing, SQL, Python, Power BI"
        color = '#7986cb'
      />
      <TimelineElement
        title = "Data Warehouse Intern, RTI International"
        location = "Raleigh, North Carolina"
        date = "May 2020 - August 2020"
        details = "Data Visualization, Data Warehousing, SQL, Python, Power BI"
        color = {primary_light}
      />
    </VerticalTimeline>
  );
}
