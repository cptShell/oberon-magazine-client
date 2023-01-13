import { FC, useState } from 'react';
import clsx from 'clsx';

import { BudgetInput } from '../budget-input/budget-input';
import { GameItem } from '../game-item/game-item';
import { ConstructToggle } from '../toogle/construct-toggle';
import { ControlContainer } from '../control-container/control-container';
import { Chipset, Resolution } from '~/common/enums/enums';
import { calculateFPS } from '~/common/helpers/calculateFPS';
import { PCConfig } from '~/common/types/pc-config';
import { gameDataList, PCCases } from '~/common/constants/constants';
import info from '~/assets/img/icon/info-purple.svg';
import exit from '~/assets/img/icon/cross.svg';
import styles from './construct-modal.module.scss';

type Props = {
  onClose: (config: PCConfig) => void;
  isOpen: boolean;
};

export const ConstructModal: FC<Props> = ({ onClose, isOpen }) => {
  const [isHighRes, setIsHighRes] = useState(false);
  const [isItnel, setIsIntel] = useState(false);
  const [budget, setBudget] = useState(2500);

  const handleClose = () => {
    const newConfig: PCConfig = {
      chipset: isItnel ? Chipset.INTEL : Chipset.AMD,
      case: PCCases[0],
    };

    onClose(newConfig);
  };

  return (
    <div
      className={clsx(styles['construct-wrapper'], {
        [styles['active']]: isOpen,
      })}
    >
      <div className={styles['construct-modal']}>
        <button onClick={handleClose} className={styles['exit-modal']}>
          <img src={exit} />
        </button>
        <div className={styles['heading-container']}>
          <h2>Build your PC</h2>
          <span>Select your chipset and budget</span>
        </div>
        <div className={styles['controls-container']}>
          <div className={styles['performance-container']}>
            <h3 className={styles['controls-title']}>Performance</h3>
            <div className={styles['game-list']}>
              {gameDataList.map(({ title, fpsRatio, imgSrc }) => {
                const resolution = isHighRes ? Resolution.QHD : Resolution.FHD;
                const chipset = isItnel ? Chipset.INTEL : Chipset.AMD;
                const fps = calculateFPS(fpsRatio, resolution, chipset, budget);

                return (
                  <GameItem key={title} src={imgSrc} fps={fps} name={title} />
                );
              })}
            </div>
            <span className={styles['controls-description']}>Performance</span>
            <ConstructToggle
              value={isHighRes}
              handleClick={() => setIsHighRes(!isHighRes)}
              names={{ off: Resolution.FHD, on: Resolution.QHD }}
            />
          </div>
          <div className={styles['budget-container']}>
            <ControlContainer title="chipset">
              <ConstructToggle
                value={isItnel}
                handleClick={() => setIsIntel(!isItnel)}
                names={{ off: Chipset.AMD, on: Chipset.INTEL }}
              />
            </ControlContainer>
            <div className={styles['help-container']}>
              <img src={info} />
              <span>Help me decide</span>
            </div>
            <ControlContainer title="budget">
              <BudgetInput
                setBudget={setBudget}
                value={budget}
                step={100}
                min={1000}
                max={5000}
              />
            </ControlContainer>
            <button onClick={handleClose} className={styles['continue-button']}>
              Continue to Build
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
