import { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import headingIMG from '~/assets/img/background/custom-pc-bg.avif';
import styles from '../build-a-custom-pc.module.scss';

export const Heading: FC<{}> = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate('/build');
  };

  return (
    <>
      <div className={styles['heading-container']}>
        <h2>Build A Custom PC</h2>
        <span>Custom PCs designed by you, built by us.</span>
        <button onClick={handleNavigate}>Start Your PC Build</button>
      </div>
      <img src={headingIMG} />
    </>
  );
};
