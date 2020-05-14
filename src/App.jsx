import React from 'react';
import styles from './App.module.css';

import {Tabs, Background} from './components';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'typeface-roboto';


class App extends React.Component {
  render() {
    return (
      <div>
        <Background />
        <div className={styles.main}>
          <Tabs />
        </div>
      </div>
    );
  }
}

export default App;
