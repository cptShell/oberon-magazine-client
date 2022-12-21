import { FC } from 'react';
import { AsideBar } from '~/components/aside/aside';
import { Main } from '~/components/main/main';
import { Support } from '../support/support';
import styles from './App.module.scss';

export const App: FC<{}> = () => {
  return (
    <div className={styles['App']}>
      <AsideBar />
      <Main />
      <Support />
    </div>
  );
};

export default App;
