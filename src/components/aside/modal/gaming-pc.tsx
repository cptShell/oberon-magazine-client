import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { PointGrid } from './point-grid';
import { gamingPC } from '~/common/constants/constants';
import specialOffersSRC from '~/assets/img/common/special-offers.png';
import arrowRightSRC from '~/assets/img/icon/arrow-right.svg';
import styles from './modal.module.scss';

type Props = {
  onClose: () => void;
};

export const GamingPC: FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const handleNavigate = (route: string) => {
    navigate(route);
    onClose();
  };

  const blockBubbling = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={blockBubbling} className={styles['modal-wrapper']}>
      <div className={styles['modal-menu']}>
        <ul className={styles['link-list']}>
          <li onClick={() => handleNavigate('/build-a-custom-pc')}>
            <h2>Build a custom PC</h2>
            <img src={arrowRightSRC} alt="arrow right" />
          </li>
          <li>
            <h2>Pre-built PCs</h2>
            <img src={arrowRightSRC} alt="arrow right" />
          </li>
        </ul>
        <PointGrid pointItems={gamingPC} />
      </div>
      <div className={styles['advertise-container']}>
        <h3>Special Offers</h3>
        <span>Shop Gaming PCs, PS, XBOX, components</span>
        <img src={specialOffersSRC} alt="Special Offers" />
      </div>
    </div>
  );
};
