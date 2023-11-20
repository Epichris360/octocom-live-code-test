import React from 'react';
import Conversation from './Conversation';
import ChatInput from './ChatInput';
import { TConversation, TChat } from '../../../../../types/Conversation';

type ChatProps = {
  currentChat: TConversation;
  setChat: (props: TChat) => void;
};

const Chat = ({ currentChat, setChat }: ChatProps) => {
  return (
    <div>
      <Conversation currentChat={currentChat} />
      <ChatInput setChat={setChat} />
    </div>
  );
};

export default Chat;
