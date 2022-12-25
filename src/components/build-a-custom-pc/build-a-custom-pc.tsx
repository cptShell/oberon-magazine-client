import headingIMG from '~/assets/img/background/custom-pc-bg.avif';
import styles from './build-a-custom-pc.module.scss';

export const BuildACustomPC = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['heading-container']}>
        <h2>Build A Custom PC</h2>
        <span>Custom PCs designed by you, built by us.</span>
        <button>Start Your PC Build</button>
      </div>
      <img src={headingIMG} />
    </div>
  );
};
