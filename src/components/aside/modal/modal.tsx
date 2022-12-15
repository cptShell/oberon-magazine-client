import { FC, MouseEventHandler, useState } from 'react';
import clsx from 'clsx';
import { PointGrid } from './point-grid';
import specialOffersSRC from '~/assets/img/common/special-offers.png';
import arrowRightSRC from '~/assets/img/icon/arrow-right.svg';
import styles from './modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
};

export const GamingPCModal: FC<Props> = ({ isOpen, onClose }) => {
  const modalShadowClass = clsx(styles['modal-shadow'], {
    [styles['active']]: isOpen,
  });

  const handleClose = () => onClose();

  const blockBubbling = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div onClick={handleClose} className={modalShadowClass}>
      <div onClick={blockBubbling} className={styles['modal-wrapper']}>
        <div className={styles['modal-menu']}>
          <ul className={styles['link-list']}>
            <li>
              <h2>Build a custom PC</h2>
              <img src={arrowRightSRC} alt="arrow right" />
            </li>
            <li>
              <h2>Pre-built PCs</h2>
              <img src={arrowRightSRC} alt="arrow right" />
            </li>
          </ul>
          <PointGrid />
        </div>
        <div className={styles['advertise-container']}>
          <h3>Special Offers</h3>
          <span>Shop Gaming PCs, PS, XBOX, components</span>
          <img src={specialOffersSRC} alt="Special Offers" />
        </div>
      </div>
    </div>
  );
};
