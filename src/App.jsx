import React from 'react';
import styles from './App.module.css';

import {Paper, Divider} from '@material-ui/core/';
import {Tabs, Background, Profile} from './components'

import 'typeface-roboto';

import Typist from 'react-typist';

class App extends React.Component {
  render() {
    return (
      <div>
        <Paper
          className = {styles.main}
          children={
            <div>
            <div className={styles.container}>
              <div className={styles.left}>
                <Profile />
              </div>
              <div className={styles.right}>
              <Typist>
                <span> First Sentence </span>
                <Typist.Backspace count={8} delay={200} />
                <Typist.Delay ms={5000} />
                <span> Abhijit Gupta </span>
              </Typist>
              </div>
            </div>
            <br/>
            <Tabs/>
            <Divider />
            <i>"Mindset is what separates the best from the rest" - Unknown</i>
            </div>
          }
        />
        <Background/>
      </div>
    );
  }
}

export default App;
