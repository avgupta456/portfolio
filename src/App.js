import React from 'react';
import styles from './App.module.css';

import {Button, Paper, Divider} from '@material-ui/core/';
import {Tabs, Background } from './components'

class App extends React.Component {
  render() {
    return (
      <div>

        <Paper
          className = {styles.main}
          children={
            <div>
            <Tabs/>
            <Button variant="contained" color="primary">
              Hello World
            </Button>
            <Divider />
            <h1>Abhijit Gupta</h1>
            </div>
          }
        />

        <Background/>
      </div>
    );
  }
}

export default App;
