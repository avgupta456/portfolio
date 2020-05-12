import React from 'react';
import styles from './App.module.css';

import {Divider} from '@material-ui/core/';
import {Tabs, Background} from './components';
import 'typeface-roboto';


class App extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.main}>
          <Tabs />
          <Divider />
        </div>
        <Background />
      </div>
    );
  }
}

export default App;
