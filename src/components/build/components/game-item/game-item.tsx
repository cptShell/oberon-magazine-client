import { FC } from 'react';
import styles from './game-item.module.scss';

type Props = {
  src: string;
  fps: number;
  name: string;
};

export const GameItem: FC<Props> = ({ src, name, fps }) => {
  return (
    <div className={styles['game-item']}>
      <img src={src} alt={name} />
      <div className={styles['fps-container']}>
        <span>{fps}</span>
        <span>FPS</span>
      </div>
    </div>
  );
};
