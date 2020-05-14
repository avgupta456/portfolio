import React from "react";

import { Card, CardContent, CardHeader, Typography, Divider, Chip } from "@material-ui/core";
import styles from './Projects.module.css'

function FancyHeaderCard() {
  return (
    <Card className={styles.header}>
      <CardHeader
        className={styles.header_root}
        title={"Personal Website"}
        subheader={"May 2020"}
        classes={{
          title: styles.title,
          subheader: styles.subheader,
        }}
      />
      <CardContent>
        <div className={styles.inner}>
          <Typography>
            This is test content blah blah blah This is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blahThis is test content blah blah blah
          </Typography>
          <br/>
          <Divider />
          <br/>
          <Chip label="Basic" variant="outlined" color="primary" clickable/>
        </div>
      </CardContent>
    </Card>
  );
}

export default function Projects() {
  return (
    <div>
    <br/>
    <FancyHeaderCard/>
    <br/>
    <FancyHeaderCard/>
    </div>
  );
}
