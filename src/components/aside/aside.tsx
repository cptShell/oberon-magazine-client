import { FC, useState } from 'react';
import { Logo } from './logo/logo';
import gamingPC from '~/assets/img/aside/gaming-pc.svg';
import components from '~/assets/img/aside/components.svg';
import community from '~/assets/img/aside/community.svg';
import search from '~/assets/img/icon/search.svg';
import question from '~/assets/img/icon/question.svg';
import user from '~/assets/img/icon/user.svg';
import basket from '~/assets/img/icon/basket.svg';
import styles from './aside.module.scss';
import { GamingPCModal } from './modal/modal';

type Props = {};

export const AsideBar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => setIsOpen(false);
  const handleOpen = () => setIsOpen(true);

  return (
    <div className={styles['aside-bar']}>
      <Logo />
      <ul className={styles['navigation-list']}>
        <li>
          <img src={gamingPC} onClick={handleOpen} />
          <GamingPCModal isOpen={isOpen} onClose={handleClose} />
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
