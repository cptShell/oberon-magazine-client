import { FC } from 'react';
import styles from './modal.module.scss';

type PointItem = {
  title: string;
  description: string;
};

export const PointGrid: FC<{}> = () => {
  const pointItems: Array<PointItem> = [
    { title: 'Standard PC', description: 'Prebuilt Gaming PC' },
    { title: 'Premium + PC', description: 'Prebuilt Gaming PC' },
    { title: 'High PC', description: 'Prebuilt Gaming PC' },
    { title: 'Core series', description: 'Prebuilt Gaming PC “all in one”' },
    { title: 'Premium PC', description: 'Prebuilt Gaming PC' },
    { title: 'BLD', description: 'Build your first gaming PC' },
  ];

  return (
    <ul className={styles['point-grid']}>
      {pointItems.map(({ title, description }) => (
        <li key={title} className={styles['point-item']}>
          <h4>{title}</h4>
          <span>{description}</span>
        </li>
      ))}
    </ul>
  );
};
