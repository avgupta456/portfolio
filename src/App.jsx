import React from 'react';
import styles from './App.module.css';

import {Paper, Divider} from '@material-ui/core/';
import {Tabs, Background, Profile} from './components'

import 'typeface-roboto';

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
                Test 1
              </div>
              <div className={styles.right}>
                Test2
              </div>
            </div>
            <Divider />
            <Tabs/>
            <Divider />
            <h1>"Mindset is what separates the best from the rest" - Unknown</h1>
            </div>
          }
        />
        <Background/>
      </div>
    );
  }
}

export default App;
