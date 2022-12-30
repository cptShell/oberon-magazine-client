import { FC } from 'react';
import { parts } from '~/common/constants/constants';
import styles from '../build-a-custom-pc.module.scss';

export const Parts: FC<{}> = () => {
  return (
    <div className={styles['parts']}>
      <h2>Meet the Parts</h2>
      <div className={styles['part-list']}>
        {parts.map((part, index) => {
          const { img, title, subtitle, description } = part;
          return (
            <div key={index} className={styles['part-item']}>
              <img src={img} />
              <h3>{title}</h3>
              <i>{subtitle}</i>
              <span>{description}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
