import { FC } from 'react';
import { PCConfig } from '~/common/types/pc-config';
import loadImg from '~/assets/img/icon/load1.svg';
import saveImg from '~/assets/img/icon/save1.svg';
import restartImg from '~/assets/img/icon/restart1.svg';
import shareImg from '~/assets/img/icon/share1.svg';

import styles from './workspace-main.module.scss';
import { WorkspaceDisplay } from '../workspace-display/workspace-display';

type Props = {
  config: PCConfig | null;
  saveConfig: (config: PCConfig) => void;
};

export const WorkspaceMain: FC<Props> = ({ config, saveConfig }) => {
  return (
    <div className={styles['workspace-main']}>
      <div className={styles['main-heading']}>
        <h2>{`${config ? config.case.title + ' ' : ''}Build`}</h2>
        <ul className={styles['state-list']}>
          <li className={styles['state-item']}>
            <div>
              <img src={saveImg} />
            </div>
            <span>Save</span>
          </li>
          <li className={styles['state-item']}>
            <div>
              <img src={loadImg} />
            </div>
            <span>Load</span>
          </li>
          <li className={styles['state-item']}>
            <div>
              <img src={restartImg} />
            </div>
            <span>Restart</span>
          </li>
          <li className={styles['state-item']}>
            <div>
              <img src={shareImg} />
            </div>
            <span>Share</span>
          </li>
        </ul>
      </div>
      {config && <WorkspaceDisplay config={config} />}
    </div>
  );
};
