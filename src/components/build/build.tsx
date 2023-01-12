import { FC } from 'react';
import { BuildModal } from './components/build-popup';
import styles from './build.module.scss';

export const Build: FC<{}> = () => {
  return (
    <div className={styles['build-wrapper']}>
      <div>
        <div>asdasdadad</div>
        <div></div>
      </div>
      <BuildModal />
    </div>
  );
};
