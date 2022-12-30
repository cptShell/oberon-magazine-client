import { FC } from 'react';
import clsx from 'clsx';
import oberonLabsScreenshot from '~/assets/img/oberon-labs-screenshot.png';
import wrench from '~/assets/img/icon/wrench.svg';
import clock from '~/assets/img/icon/clock.svg';
import gears from '~/assets/img/icon/gears.svg';
import styles from '../build-a-custom-pc.module.scss';

export const Configuration: FC<{}> = () => {
  return (
    <div className={styles['configuration-wrapper']}>
      <img src={oberonLabsScreenshot} />
      <div className={styles['configuration-container']}>
        <div className={styles['configuration-heading']}>
          <h2>Our BLD Configurator</h2>
          <span>
            Select parts and peripherals for any build easily and intuitively in
            our one-stop-shop for all your custom PC building needs.
          </span>
        </div>
        <ul className={styles['configuration-list']}>
          <li className={clsx(styles['configuration-item'], styles['light'])}>
            <img src={wrench} />
            <div className={styles['text-container']}>
              <h3>Curated Parts</h3>
              <span>
                Take your pick of top-of-the-line components like the latest
                GPUs, motherboards, and more.
              </span>
            </div>
          </li>
          <li className={clsx(styles['configuration-item'], styles['light'])}>
            <img src={clock} />
            <div className={styles['text-container']}>
              <h3>FPS Guaranteed</h3>
              <span>
                Never wonder how your favorite game will run! We showcase
                popular games and their FPS performance alongside your build.
              </span>
            </div>
          </li>
          <li className={clsx(styles['configuration-item'], styles['light'])}>
            <img src={gears} />
            <div className={styles['text-container']}>
              <h3>Full Customization</h3>
              <span>
                Explore the PC performance possibilities with our range of parts
                and peripherals. Select your budget, form factor, and color.
              </span>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};
