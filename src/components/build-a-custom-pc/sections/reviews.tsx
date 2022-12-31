import { FC } from 'react';
import { reviews } from '~/common/constants/reviews';
import styles from '../build-a-custom-pc.module.scss';

export const Reviews: FC<{}> = () => {
  return (
    <div className={styles['review-list']}>
      {reviews.map(({ img, text }, index) => {
        return (
          <div key={index} className={styles['review-item']}>
            <div className={styles['review-img-wrapper']}>
              <img src={img} />
            </div>
            <span>{text}</span>
          </div>
        );
      })}
    </div>
  );
};
