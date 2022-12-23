import { FC, useEffect } from 'react';
import clsx from 'clsx';
import { PointGrid } from './point-grid';
import specialOffersSRC from '~/assets/img/common/special-offers.png';
import arrowRightSRC from '~/assets/img/icon/arrow-right.svg';
import styles from './modal.module.scss';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: JSX.Element;
};

export const Modal: FC<Props> = ({ isOpen, onClose, children }) => {
  useEffect(() => {
    onClose();
  }, []);

  const modalShadowClass = clsx(styles['modal-shadow'], {
    [styles['active']]: isOpen,
  });

  const handleClose = () => onClose();

  return (
    <div onClick={handleClose} className={modalShadowClass}>
      {children}
    </div>
  );
};
