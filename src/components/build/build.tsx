import { FC, useState } from 'react';
import { ConstructModal } from './components/construct-modal/construct-modal';
import styles from './build.module.scss';
import { PCConfig } from '~/common/types/pc-config';
import { ConstructSpace } from './components/construct-space/construct-space';

export const Build: FC<{}> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [config, setConfig] = useState<null | PCConfig>(null);

  const setOpen = () => setIsOpen(true);
  const saveConfig = (config: PCConfig) => {
    setConfig(config);
  };
  const setClose = (config: PCConfig) => {
    setIsOpen(false);
    saveConfig(config);
  };

  console.log(config);

  return (
    <div className={styles['build-wrapper']}>
      <ConstructSpace config={config} saveConfig={saveConfig} />
      <ConstructModal onClose={setClose} isOpen={isOpen} />
    </div>
  );
};
