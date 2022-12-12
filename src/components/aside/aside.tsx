import { FC } from 'react';
import gamingPC from '~/assets/img/aside/gaming-pc.svg';
import components from '~/assets/img/aside/components.svg';
import community from '~/assets/img/aside/community.svg';
import search from '~/assets/img/icon/search.svg';
import question from '~/assets/img/icon/question.svg';
import user from '~/assets/img/icon/user.svg';
import basket from '~/assets/img/icon/basket.svg';
import styles from './aside.module.scss';

type Props = {};

export const AsideBar: FC<Props> = () => {
  return (
    <div className={styles['aside-bar']}>
      <ul className={styles['navigation-list']}>
        <li>
          <img src={gamingPC} />
        </li>
        <li>
          <img src={components} />
        </li>
        <li>
          <img src={community} />
        </li>
      </ul>
      <ul className={styles['control-list']}>
        <li>
          <img src={search} />
        </li>
        <li>
          <img src={question} />
        </li>
        <li>
          <img src={user} />
        </li>
        <li>
          <img src={basket} />
        </li>
      </ul>
    </div>
  );
};
