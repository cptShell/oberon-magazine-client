import { FC, useState } from 'react';
import { ConstructModal } from './components/construct-modal/construct-modal';
import styles from './build.module.scss';
import { PCConfig } from '~/common/types/pc-config';
import { ConstructSpace } from './components/construct-space/construct-space';

export const Build: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [config, setConfig] = useState<null | PCConfig>(null);

  const saveConfig = (config: PCConfig) => setConfig(config);
  const setClose = (config: PCConfig) => {
    setIsOpen(false);
    saveConfig(config);
  };

  return (
    <div className={styles['build-wrapper']}>
      <ConstructSpace config={config} saveConfig={saveConfig} />
      <ConstructModal onClose={setClose} isOpen={isOpen} />
    </div>
  );
};
