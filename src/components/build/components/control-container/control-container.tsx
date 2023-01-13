import { FC } from 'react';
import styles from './control-container.module.scss';

type Props = {
  children: JSX.Element;
  title: string;
};

export const ControlContainer: FC<Props> = ({ children, title }) => {
  return (
    <div className={styles['control-container']}>
      <h3 className={styles['control-title']}>{title}</h3>
      {children}
    </div>
  );
};
