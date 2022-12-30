import { FC } from 'react';
import { partners } from '~/common/constants/constants';
import styles from '../build-a-custom-pc.module.scss';

export const Partners: FC<{}> = () => {
  return (
    <div className={styles['partners']}>
      <div className={styles['partners-heading']}>
        <h3>Our Brand Partners</h3>
        <span>
          We partner closely with brands you know and love to get you access to
          high-quality parts and peripherals to complete your setup.
        </span>
      </div>
      <div className={styles['partners-grid']}>
        {partners.map(({ link, src }, index) => {
          return (
            <a key={index} href={link}>
              <img src={src} />
            </a>
          );
        })}
      </div>
    </div>
  );
};
