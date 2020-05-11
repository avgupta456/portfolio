import React from 'react';
import styles from './App.module.css';

import Particles from 'react-particles-js';

const particle_params = {
  "particles": {
      "number": {"value": 100},
      "size": {"value": 5},
  },
  "interactivity": {
      "events": {
          "onhover": {
              "enable": true,
              "mode": "repulse"
          }
      }
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Particles className={styles.particles} params={particle_params} />
      </div>
    );
  }
}

export default App;
