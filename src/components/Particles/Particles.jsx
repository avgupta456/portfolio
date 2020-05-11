import React from 'react';
import Particles from 'react-particles-js';
import styles from './Particles.module.css'

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

export default function SimpleTabs() {
  return (
    <Particles className={styles.particles} params={particle_params} />
  );
}
