import { FC } from 'react';
import { PCConfig } from '~/common/types/pc-config';
import styles from './workspace-total.module.scss';

type Props = {
  config: PCConfig | null;
};

export const WorkspaceTotal: FC<Props> = ({ config }) => {
  return (
    <div className={styles['workspace-total']}>
      {config && (
        <>
          <div className={styles['estimate-container']}>
            <h3>Estimated Shipping</h3>
            <span>12/20/2022</span>
          </div>
          <div className={styles['total-container']}>
            <h3>Subtotal: $4,768.91</h3>
            <span>Monthly payments available. Learn More</span>
          </div>
        </>
      )}
    </div>
  );
};
