import { FC, useRef, useState } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { AsideBar } from '~/components/aside/aside';
import { Main } from '~/components/main/main';
import { BuildACustomPC } from '../build-a-custom-pc/build-a-custom-pc';
import { Support } from '../support/support';
import styles from './App.module.scss';

export const App: FC<{}> = () => {
  return (
    <div className={styles['App']}>
      <AsideBar />
      <Routes>
        <Route index path="/" element={<Main />} />
        <Route path="build-custom-pc" element={<BuildACustomPC />} />
      </Routes>
      <Support />
    </div>
  );
};

export default App;
