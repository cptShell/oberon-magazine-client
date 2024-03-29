import { FC } from 'react';
import { PCConfig } from '~/common/types/pc-config';
import { PCCases } from '~/common/constants/constants';
import arrowLeft from '~/assets/img/icon/arrow-left.svg';
import arrowRight from '~/assets/img/icon/arrow-right.svg';
import infoImg from '~/assets/img/icon/info.svg';
import styles from './workspace-aside.module.scss';
import clsx from 'clsx';
import { Case } from '~/common/types/case';

type Props = {
  config: PCConfig | null;
  currentSection: keyof PCConfig;
  saveConfig: (config: PCConfig) => void;
};

export const WorkspaceAside: FC<Props> = ({
  config,
  currentSection,
  saveConfig,
}) => {
  const handleCaseChange = (colorIndex: number, PCCase: Case) => {
    if (config) {
      const updatedConfig = { ...config, currentColorIndex: colorIndex };
      if (PCCase !== config.case) updatedConfig.case = PCCase;

      saveConfig(updatedConfig);
    }
  };

  return (
    <div className={styles['workspace-aside']}>
      {config && (
        <>
          <ul className={styles['section-list']}>
            <li className={clsx(styles['section-item'], styles['active'])}>
              01 Base
            </li>
            <li className={styles['section-item']}>02 Add-ons</li>
            <li className={styles['section-item']}>03 Summary</li>
          </ul>
          <div className={styles['turn-container']}>
            <button className={styles['turn-item']}>
              <img src={arrowLeft} />
              <span>Chipset</span>
            </button>
            <button className={styles['turn-item']}>
              <span>Cooling</span>
              <img src={arrowRight} />
            </button>
          </div>
          <div className={styles['heading-container']}>
            <div className={styles['section-title']}>
              <h3>Case</h3>
              <img src={infoImg} />
            </div>
            <div className={styles['section-filter']}>
              <span>All</span>
              <img src={arrowRight} />
            </div>
          </div>
          <div className={styles['parts-wrapper']}>
            <ul className={styles['parts-container']}>
              {PCCases.map((PCCase) => {
                const { title, colors, type } = PCCase;
                const isCurrentCase = PCCase === config.case;
                const currentColor =
                  PCCase.colors[isCurrentCase ? config.currentColorIndex : 0];

                return (
                  <li
                    key={title}
                    className={clsx(styles['part-item'], {
                      [styles['active']]: isCurrentCase,
                    })}
                  >
                    <div className={styles['part-heading']}>
                      <div className={styles['heading-img']}>
                        <img src={currentColor.imgSrc} />
                      </div>
                      <div className={styles['part-title']}>
                        <h4>{title}</h4>
                        <span>{type}</span>
                      </div>
                    </div>
                    <div className={styles['part-color']}>
                      <span>Color:</span>
                      <span>{currentColor.title}</span>
                    </div>
                    <ul className={styles['color-list']}>
                      {colors.map(({ hex, title }, index) => {
                        const isChoosedColor =
                          config.currentColorIndex === index && isCurrentCase;
                        return (
                          <li
                            onClick={() => handleCaseChange(index, PCCase)}
                            key={title}
                            className={clsx(styles['color-item'], {
                              [styles['active']]: isChoosedColor,
                            })}
                          >
                            <div style={{ background: 'black' }}></div>
                            <div style={{ background: hex }}></div>
                          </li>
                        );
                      })}
                    </ul>
                    <div className={styles['control-container']}>
                      <button>info</button>
                      <button
                        onClick={() => handleCaseChange(0, PCCase)}
                        className={clsx({ [styles['active']]: isCurrentCase })}
                      >
                        {isCurrentCase ? 'added' : 'add'}
                      </button>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
