import { FC } from 'react';
import {
  Configuration,
  Perfomance,
  Build,
  Heading,
  ConfigurationCards,
  Partners,
} from './sections/sections';
import styles from './build-a-custom-pc.module.scss';
import { Parts } from './sections/parts';

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
      </div>
    </div>
  );
};
