import { FC } from 'react';
import {
  Configuration,
  Perfomance,
  Build,
  Heading,
  ConfigurationCards,
  Partners,
  Gallery,
  Footer,
} from './sections/sections';
import { Parts } from './sections/parts';
import { Reviews } from './sections/reviews';
import styles from './build-a-custom-pc.module.scss';

export const BuildACustomPC: FC<{}> = () => {
  return (
    <div className={styles['wrapper']}>
      <div className={styles['inner-wrapper']}>
        <Heading />
        <Build />
        <Perfomance />
        <Configuration />
        <ConfigurationCards />
        <Partners />
        <Parts />
        <Gallery />
        <Reviews />
        <Footer />
      </div>
    </div>
  );
};
