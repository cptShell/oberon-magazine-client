import { FC } from 'react';
import clsx from 'clsx';
import { PCConfig } from '~/common/types/pc-config';
import chipsetImg from '~/assets/img/mock/build-workspace-parts/chipset.svg';
import coolingImg from '~/assets/img/mock/build-workspace-parts/cooling.png';
import motherboard from '~/assets/img/mock/build-workspace-parts/motherboard.png';
import gpuImg from '~/assets/img/mock/build-workspace-parts/gpu.png';
import cpuImg from '~/assets/img/mock/build-workspace-parts/cpu.png';
import powerSuppliesImg from '~/assets/img/mock/build-workspace-parts/power-supplies.png';
import ramImg from '~/assets/img/mock/build-workspace-parts/ram.png';
import storageImg from '~/assets/img/mock/build-workspace-parts/storage.png';
import styles from './workspace-display.module.scss';

type Props = {
  config: PCConfig;
};

export const WorkspaceDisplay: FC<Props> = ({ config }) => {
  const { imgSrc, title } = {
    imgSrc: config.case.colors[config.currentColorIndex].imgSrc,
    title: config.case.title,
  };
  const currentCaseImg = config.case.colors[config.currentColorIndex].imgSrc;

  return (
    <div className={styles['build-container']}>
      <div className={styles['build-display']}>
        <img src={imgSrc} alt={config.case.title} />
      </div>
      <div className={styles['build-controls']}>
        <div className={clsx(styles['control-item'], styles['chipset'])}>
          <div className={styles['img-container']}>
            <img src={chipsetImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>Chipset</h3>
            <span>{config.chipset}</span>
          </div>
        </div>
        <div
          className={clsx(
            styles['control-item'],
            styles['case'],
            styles['active']
          )}
        >
          <div className={styles['img-container']}>
            <img src={currentCaseImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>Case</h3>
            <span>{title}</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['cooling'])}>
          <div className={styles['img-container']}>
            <img src={coolingImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>Cooling</h3>
            <span>custom</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['motherboard'])}>
          <div className={styles['img-container']}>
            <img src={motherboard} />
          </div>
          <div className={styles['description-container']}>
            <h3>Motherboards</h3>
            <span>ASRock TRX40 Taichi</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['gpu'])}>
          <div className={styles['img-container']}>
            <img src={gpuImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>GPU</h3>
            <span>NVIDIA GEFORCE RTX™ 3090 - ZOTAC AMP EXTREME HOLO</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['cpu'])}>
          <div className={styles['img-container']}>
            <img src={cpuImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>CPU</h3>
            <span>AMD Ryzen™ Threadripper™ PRO 5995WX</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['power-supply'])}>
          <div className={styles['img-container']}>
            <img src={powerSuppliesImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>Power Supplies</h3>
            <span>XPG Cybercore 1300W Platinum</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['ram'])}>
          <div className={styles['img-container']}>
            <img src={ramImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>RAM</h3>
            <span>Team T-FORCE XTREEM ARGB 128GB (8 x 16GB) DDR4 4000MHz</span>
          </div>
        </div>
        <div className={clsx(styles['control-item'], styles['storage'])}>
          <div className={styles['img-container']}>
            <img src={storageImg} />
          </div>
          <div className={styles['description-container']}>
            <h3>Storage</h3>
            <span>Samsung 980 PRO 1000GB</span>
          </div>
        </div>
      </div>
    </div>
  );
};
