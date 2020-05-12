import React from 'react';

import { Typography, Divider } from '@material-ui/core';

import { Profile, TypeLoop } from './..'
import styles from './About.module.css'

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <p className={styles.header}>ABHIJIT GUPTA</p>
        <div className={styles.fixHeight}>
          <TypeLoop />
        </div>
        <br/>
        <Divider/>
        <br/>

        <Typography>
          I am an aspiring software engineer and data scientist, pursuing a BS in Computer Science at Yale University.
          I am actively seeking research and internship opportunities. Please reach out to me!
        </Typography>
      </div>
      <div className={styles.right}>
        <Profile />
      </div>
    </div>
  );
}
