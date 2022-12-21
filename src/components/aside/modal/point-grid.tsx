import { FC } from 'react';
import { PointItem } from '~/common/types/types';
import styles from './modal.module.scss';

type Props = {
  pointItems: Array<PointItem>;
};

export const PointGrid: FC<Props> = ({ pointItems }) => {
  const columns = Math.ceil(pointItems.length / 4);

  return (
    <ul
      style={{ gridTemplateColumns: `repeat(${columns}, 1fr)` }}
      className={styles['point-grid']}
    >
      {pointItems.map(({ title, description }, index) => (
        <li key={index} className={styles['point-item']}>
          <h4>{title}</h4>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};
