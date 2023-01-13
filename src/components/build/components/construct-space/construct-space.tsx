import { FC } from 'react';
import { PCConfig } from '~/common/types/types';
import { WorkspaceMain } from './components/workspace-main/workspace-main';
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
      <div className={styles['aside']}></div>
      <div className={styles['footer']}></div>
      <div className={styles['next-button']}></div>
    </div>
  );
};
