import React from 'react';

import { Typography, Divider } from '@material-ui/core';

import { Profile, TypeLoop } from './..'
import styles from './About.module.css'

export default function About() {
  return (
    <div>
    <div className={[styles.header, styles.border].join(' ')}>
      <p className={styles.name}>ABHIJIT GUPTA</p>
      <div className={styles.fix_height}>
        <TypeLoop />
      </div>
      <br/>
      <Divider/>
      <br/>
    </div>

    <div className={[styles.row, styles.border].join(' ')}>
      <div className={[styles.left_column, styles.border].join(' ')}>
        <div className={styles.float_left}>
          <Typography>
          Hello, and welcome to my website. My name is Abhijit Gupta, and I am a junior at Yale University, pursuing a double major in Computer Science and Applied Mathematics. I am a member of the Yale Interactive Machines Group, where I conduct research in the field of human-robot interaction using deep learning techniques. I am a developer for the Yale Computer Society, and help organize YHack, Yale’s largest undergraduate hackathon. This past summer, I interned at RTI international as a data warehouse intern, and worked on ___. In my free time, I enjoy dancing and rock climbing.
          </Typography>
          <br/>
          <Typography>
          I am actively seeking internship opportunities for Summer 2021. Feel free to explore the rest of my website, and please reach out to me if interested!
          </Typography>
        </div>
      </div>
      <div className={[styles.right_column, styles.border].join(' ')}>
        <div className={styles.float_right}>
          <Profile/>
        </div>
      </div>
    </div>
    </div>
    /*
    <div className={[styles.container, styles.border].join(' ')}>
      <div className={[styles.top, styles.border].join(' ')}>
        Test 1
      </div>
      <div className={[styles.bottom, styles.border].join(' ')}>
      <div className={[styles.left, styles.border].join(' ')}>
        <p className={styles.header}>ABHIJIT GUPTA</p>
        <div className={styles.fixHeight}>
          <TypeLoop />
        </div>


      </div>
      <div className={[styles.right, styles.border].join(' ')}>
        <Profile />
      </div>
      </div>
    </div>
    */
  );
}
