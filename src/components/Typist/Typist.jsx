import React from 'react';

import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

import styles from './Typist.module.css'
import './main.scss';

export default function TypeLoop() {
  return (
    <TypistLoop interval={1500}>
      {[
        'Computer Scientist',
        'Bhangra Dancer',
        'Data Scientist',
        'Rock Climber',
        'Researcher',
      ].map(text =>
        <Typist
          key={text}
          cursor={{blink: true}}
          className={styles.subheader}
        >
          {text}
          <Typist.Delay ms={1000} />
          <Typist.Backspace count={text.length} delay={200} />
        </Typist>
      )}
    </TypistLoop>
  );
}
