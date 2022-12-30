import { FC } from 'react';
import clsx from 'clsx';
import one from '~/assets/img/counts/one.svg';
import two from '~/assets/img/counts/two.svg';
import three from '~/assets/img/counts/three.svg';
import styles from '../build-a-custom-pc.module.scss';

export const ConfigurationCards: FC<{}> = () => {
  return (
    <div className={styles['configuration-cards']}>
      <div className={clsx(styles['configuration-card'], styles['first'])}>
        <img src={one} />
        <h3>Chipset & Budget</h3>
        <span>Select your budget and your choice of AMD or Intel CPUs.</span>
      </div>
      <div className={clsx(styles['configuration-card'], styles['second'])}>
        <img src={two} />
        <h3>Pick Parts & Peripherals</h3>
        <span>
          Pick your components and accessories based on your performance and
          aesthetic needs.
        </span>
      </div>
      <div className={clsx(styles['configuration-card'], styles['third'])}>
        <img src={three} />
        <h3>We Build & Ship</h3>
        <span>
          Our experts build and ship your product directly to you with a two-day
          build time.
        </span>
      </div>
    </div>
  );
};
