import React from 'react';
import styles from './App.module.css';
import Particles from 'react-particles-js';

import {Button, Paper, Divider} from '@material-ui/core/';

import {Tabs} from './components'

const particle_params = {
  "particles": {
      "number": {"value": 100},
      "size": {"value": 4},
  },
  "interactivity": {
    "events": {
      "onhover": {
        "enable": true,
        "mode": ["grab", "bubble"]
      }
    },
    "modes": {
      "grab": {
        "distance": 200,
        "line_linked": {"opacity": 0.5}
      },
      "bubble": {
        "distance": 300,
        "size": 8,
        "duration": 1,
        "opacity": 0.5,
        "speed": 2
      },
    }
  },
}

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

        <Particles className={styles.particles} params={particle_params} />
      </div>
    );
  }
}

export default App;
