import { FC } from 'react';
import styles from './logo.module.scss';

export const Logo: FC<{}> = () => {
  return (
    <>
      <div className={`${styles.logo} ${styles.left}`}>OBERON</div>
      <div className={`${styles.logo} ${styles.right}`}>LAB`S</div>
    </>
  );
};
