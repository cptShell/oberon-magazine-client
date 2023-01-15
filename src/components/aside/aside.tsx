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
import { useNavigate } from 'react-router-dom';
const controlImgLIist = [user, question, search, basket];

type Props = {};

export const AsideBar: FC<Props> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const handleClose = () => setIsOpen(false);

  const [currentModal, setCurrentModal] = useState(
    <GamingPC onClose={handleClose} />
  );
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
            <img
              src={gamingPC}
              onClick={() => handleOpen(<GamingPC onClose={handleClose} />)}
            />
          </li>
          <li>
            <img
              src={components}
              onClick={() => handleOpen(<Components onClose={handleClose} />)}
            />
          </li>
          <li>
            <img src={community} onClick={() => navigate('/community')} />
          </li>
        </ul>
        <ul className={styles['control-list']}>
          {controlImgLIist.map((img) => (
            <li>
              <img src={img} />
            </li>
          ))}
        </ul>
      </div>
      <Modal isOpen={isOpen} onClose={handleClose} children={currentModal} />
    </>
  );
};
