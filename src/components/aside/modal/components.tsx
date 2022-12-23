import { FC } from 'react';
import { cases, components, cooling } from '~/common/constants/constants';
import styles from './modal.module.scss';
import { PointGrid } from './point-grid';

type Props = {
  onClose: () => void;
};

export const Components: FC<Props> = ({ onClose }) => {
  const blockBubbling = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={blockBubbling} className={styles['modal-wrapper']}>
      <ul className={styles['components-container']}>
        <li>
          <h2>CASES</h2>
          <PointGrid pointItems={cases} />
        </li>
        <li>
          <h2>COOLING</h2>
          <PointGrid pointItems={cooling} />
        </li>
        <li>
          <h2>COMPONENTS</h2>
          <PointGrid pointItems={components} />
        </li>
      </ul>
    </div>
  );
};
