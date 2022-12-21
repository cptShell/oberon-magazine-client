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
import { Modal } from './modal/modal';
import { GamingPC } from './modal/gaming-pc';
import { Components } from './modal/components';

type Props = {};

export const AsideBar: FC<Props> = () => {
  const [currentModal, setCurrentModal] = useState(<GamingPC />);
  const [isOpen, setIsOpen] = useState(false);

  const handleClose = () => setIsOpen(false);
  const handleOpen = (modal: JSX.Element) => {
    setCurrentModal(modal);
    setIsOpen(true);
  };

  return (
    <>
      <div className={styles['aside-bar']}>
        <Logo />
        <ul className={styles['navigation-list']}>
          <li>
            <img src={gamingPC} onClick={() => handleOpen(<GamingPC />)} />
          </li>
          <li>
            <img src={components} onClick={() => handleOpen(<Components />)} />
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
      <Modal isOpen={isOpen} onClose={handleClose} children={currentModal} />
    </>
  );
};
