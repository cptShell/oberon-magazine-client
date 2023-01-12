import { FC } from 'react';
import { Routes, Route } from 'react-router-dom';
import { AsideBar } from '~/components/aside/aside';
import { Main } from '~/components/main/main';
import { BuildACustomPC } from '../build-a-custom-pc/build-a-custom-pc';
import { Build } from '../build/build';
import { Support } from '../support/support';
import styles from './App.module.scss';

export const App: FC<{}> = () => {
  return (
    <div className={styles['App']}>
      <AsideBar />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="/build-a-custom-pc" element={<BuildACustomPC />} />
        <Route path="/build" element={<Build />} />
      </Routes>
      <Support />
    </div>
  );
};

export default App;
