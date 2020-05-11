import React from 'react';
import styles from './About.module.css'

import { Typography } from '@material-ui/core';
import { Profile } from './..'

import Typist from 'react-typist';

export default function About() {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Profile />
      </div>
      <div className={styles.right}>
        <Typist avgTypingDelay={100} stdTypingDelay={0} cursor={{show: false}}>
          <Typography>First Sentence
          <Typist.Backspace count={8} delay={200} />
          <Typist.Delay ms={1000} />
          Abhijit Gupta</Typography>
        </Typist>
      </div>
    </div>
  );
}
