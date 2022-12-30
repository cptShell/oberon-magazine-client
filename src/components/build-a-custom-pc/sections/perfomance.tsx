import { FC } from 'react';
import pcPurple from '~/assets/img/common/boot-your-perfomance.png';
import gpu from '~/assets/img/icon/gpu.svg';
import cpu from '~/assets/img/icon/cpu.svg';
import ram from '~/assets/img/icon/ram.svg';
import styles from '../build-a-custom-pc.module.scss';

export const Perfomance: FC<{}> = () => {
  return (
    <div className={styles['perfomance-wrapper']}>
      <div className={styles['perfomance-container']}>
        <div className={styles['perfomance-description']}>
          <h2>Boost Your Performance</h2>
          <ul className={styles['perfomance-list']}>
            <li className={styles['perfomance-item']}>
              <img src={gpu} />
              <div className={styles['text-container']}>
                <h3>GPU</h3>
                <span>
                  The Graphics Processing Unit offers pure power to push
                  performance to new heights in the biggest games.
                </span>
              </div>
            </li>
            <li className={styles['perfomance-item']}>
              <img src={cpu} />
              <div className={styles['text-container']}>
                <h3>CPU</h3>
                <span>
                  The Central Processing Unit multitasks as well as increases
                  performance in CPU-intensive games and helps avoid
                  bottlenecks.
                </span>
              </div>
            </li>
            <li className={styles['perfomance-item']}>
              <img src={ram} />
              <div className={styles['text-container']}>
                <h3>RAM</h3>
                <span>
                  Random Access Memory enables you to run multiple programs at
                  once—the more RAM you have, the better you can multi-task.
                </span>
              </div>
            </li>
          </ul>
        </div>
        <img src={pcPurple} />
      </div>
    </div>
  );
};
