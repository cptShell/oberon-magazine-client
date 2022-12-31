import { FC } from 'react';
import nova1 from '~/assets/img/pcs/nova-1.webp';
import nova2 from '~/assets/img/pcs/nova-2.webp';
import nova3 from '~/assets/img/pcs/nova-3.webp';
import styles from '../build-a-custom-pc.module.scss';

export const Gallery: FC<{}> = () => {
  return (
    <div className={styles['gallery-wrapper']}>
      <div className={styles['inline-gallery']}>
        <img src={nova1} className={styles['gallery-item']} />
        <img src={nova2} className={styles['gallery-item']} />
        <img src={nova3} className={styles['gallery-item']} />
      </div>
    </div>
  );
};
