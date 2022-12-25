import clsx from 'clsx';
import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './logo.module.scss';

export const Logo: FC<{}> = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <>
      <div onClick={handleNavigate} className={clsx(styles.logo, styles.left)}>
        OBERON
      </div>
      <div onClick={handleNavigate} className={clsx(styles.logo, styles.right)}>
        LAB`S
      </div>
    </>
  );
};
