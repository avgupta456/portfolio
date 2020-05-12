import React from 'react';

import Typist from 'react-typist';
import TypistLoop from 'react-typist-loop'

import styles from './Typist.module.css'
import './main.scss';

export default function TypeLoop() {
  return (
    <TypistLoop interval={3000}>
      {[
        ' Programmer',
        ' DATA SCIENTIST',
        ' DANCER',
        ' PROBLEM SOLVER',
        ' ROCK CLIMBER',
        ' RESEARCHER',
      ].map(text =>
        <Typist
          key={text}
          cursor={{blink: true}}
          className={styles.subheader}
          //className={"TypistExample-header"}
        >
          {text}
          <Typist.Delay ms={200} />
          <Typist.Backspace count={text.length-1} delay={200} />
        </Typist>
      )}
    </TypistLoop>
  );
}
