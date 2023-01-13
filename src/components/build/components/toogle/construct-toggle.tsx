import clsx from 'clsx';
import { FC } from 'react';
import styles from './construct-toggle.module.scss';

type Props = {
  handleClick: () => void;
  value: boolean;
  names: {
    off: string;
    on: string;
  };
};

export const ConstructToggle: FC<Props> = ({ handleClick, value, names }) => {
  const { off, on } = names;

  return (
    <div onClick={handleClick} className={styles['construct-toggle']}>
      <div className={clsx({ [styles['active']]: !value })}>{off}</div>
      <div className={clsx({ [styles['active']]: value })}>{on}</div>
    </div>
  );
};
