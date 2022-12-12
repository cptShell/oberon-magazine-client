import { FC } from 'react';
import styles from './main.module.scss';

type Props = {};

export const Main: FC<Props> = () => {
  return (
    <div className={styles['main']}>
      <h1 className={styles['title']}>oberon gaming</h1>
      <button>Shop deals</button>
    </div>
  );
};
