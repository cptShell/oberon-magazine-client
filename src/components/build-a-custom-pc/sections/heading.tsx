import { FC } from 'react';
import headingIMG from '~/assets/img/background/custom-pc-bg.avif';
import styles from '../build-a-custom-pc.module.scss';

export const Heading: FC<{}> = () => {
  return (
    <>
      <div className={styles['heading-container']}>
        <h2>Build A Custom PC</h2>
        <span>Custom PCs designed by you, built by us.</span>
        <button>Start Your PC Build</button>
      </div>
      <img src={headingIMG} />
    </>
  );
};
