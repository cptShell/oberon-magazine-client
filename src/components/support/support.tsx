import { FC } from 'react';
import chat from '~/assets/img/icon/chat.svg';

export const Support: FC<{}> = () => {
  return (
    <div className="chat-container">
      <img className="" src={chat} alt="support chat" />
      <span>support</span>
    </div>
  );
};
