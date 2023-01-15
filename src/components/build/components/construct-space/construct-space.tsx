import { FC } from 'react';
import { PCConfig } from '~/common/types/types';
import { WorkspaceAside } from './components/workspace-aside/workspace-aside';
import { WorkspaceMain } from './components/workspace-main/workspace-main';
import { WorkspaceTotal } from './components/workspace-total/workspace-total';
import styles from './construct-space.module.scss';

type Props = {
  config: PCConfig | null;
  saveConfig: (config: PCConfig) => void;
};

export const ConstructSpace: FC<Props> = ({ config, saveConfig }) => {
  return (
    <div className={styles['workspace-grid']}>
      <div className={styles['header']} />
      <WorkspaceMain config={config} saveConfig={saveConfig} />
      <WorkspaceAside
        config={config}
        currentSection={'case'}
        saveConfig={saveConfig}
      />
      <WorkspaceTotal config={config} />
      <div className={styles['next-container']}>
        <button className={styles['next-button']}>Next</button>
      </div>
    </div>
  );
};
