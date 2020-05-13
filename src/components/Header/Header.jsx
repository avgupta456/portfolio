import React from 'react';

import { Divider } from '@material-ui/core';
import { TypeLoop } from './..';

import styles from './Header.module.css';

export default function Header() {

  return (
    <div>
      <p className={styles.header}>ABHIJIT GUPTA</p>
      <div className={styles.fix_height}>
        <TypeLoop className={styles.subheader}/>
      </div>
      <br/>
      <Divider/>
      <br/>
    </div>
  );
}
