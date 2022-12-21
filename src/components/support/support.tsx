import { FC } from 'react';
import chat from '~/assets/img/icon/chat.svg';
import styles from './support.module.scss';

export const Support: FC<{}> = () => {
  return (
    <div className={styles['chat-container']}>
      <img src={chat} alt="support chat" />
      <span>support</span>
    </div>
  );
};
