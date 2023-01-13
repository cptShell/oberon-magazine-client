import { FC } from 'react';
import { PCConfig } from '~/common/types/types';
import styles from './construct-space.module.scss';

type Props = {
  config: PCConfig | null;
  saveConfig: (config: PCConfig) => void;
};

export const ConstructSpace: FC<Props> = ({ config, saveConfig }) => {
  return (
    <div>
      <div>asdasdadad</div>
      <div></div>
    </div>
  );
};
