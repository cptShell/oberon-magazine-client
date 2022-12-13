import { FC } from 'react';
import styles from './main.module.scss';

type Props = {};

export const Main: FC<Props> = () => {
  return (
    <div className={styles['main']}>
      <h1 className={styles['title']}>oberon gaming pcs</h1>
      <button className={styles['main-button']}>Shop deals</button>
    </div>
  );
};
