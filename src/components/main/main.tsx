import { FC, useRef, useState } from 'react';
import { Support } from '../support/support';
import styles from './main.module.scss';

export const Main: FC<{}> = () => {
  return (
    <div className={styles['main']}>
      <h1 className={styles['title']}>oberon gaming pcs</h1>
      <button className={styles['main-button']}>Shop deals</button>
      <Support />
    </div>
  );
};
