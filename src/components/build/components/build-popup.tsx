import { FC, useEffect, useState } from 'react';
import { gameDataList } from '~/common/constants/games';
import { GameItem } from './game-item';
import styles from '../build.module.scss';
import clsx from 'clsx';

type Props = {};

export const BuildModal: FC<Props> = ({}) => {
  const [isHighRes, setIsHighRes] = useState(false);
  const [isItnel, setIsIntel] = useState(false);
  const resolutionToogleStyle = clsx(
    styles['performance-toggle'],
    styles[isHighRes ? 'right' : 'left']
  );
  const chipsetToogleStyle = clsx(
    styles['performance-toggle'],
    styles[isItnel ? 'right' : 'left']
  );

  const handleTogglePerformance = () => {
    setIsHighRes(!isHighRes);
  };
  const handleToggleChipset = () => {
    setIsIntel(!isItnel);
  };

  return (
    <div className={styles['build-modal']}>
      {/* <button className={styles['exit-modal']}>x</button> */}
      <div className={styles['heading-container']}>
        <h2>Build your PC</h2>
        <span>Select your chipset and budget</span>
      </div>
      <div className={styles['controls-container']}>
        <div className={styles['performance-container']}>
          <h3 className={styles['controls-title']}>Performance</h3>
          <div className={styles['game-list']}>
            {gameDataList.map(({ title, fpsRatio, imgSrc }) => (
              <GameItem src={imgSrc} fps={fpsRatio} name={title} />
            ))}
          </div>
          <span className={styles['controls-description']}>Performance</span>
          <div
            onClick={handleTogglePerformance}
            className={resolutionToogleStyle}
          >
            <div className={clsx({ [styles['active']]: !isHighRes })}>1080</div>
            <div className={clsx({ [styles['active']]: isHighRes })}>1440</div>
          </div>
        </div>
        <div className={styles['budget-container']}></div>
      </div>
    </div>
  );
};
