import { type TConversation } from 'types/Conversation';

const mockConversation = [
  { id: 1, text: 'lorem ipsum', currentUser: false },
  { id: 2, text: 'lorem ipsum 2', currentUser: false },
  { id: 3, text: 'lorem ipsum 3', currentUser: true },
];

type ConversationProps = {
  currentChat: TConversation;
};

const Conversation = ({ currentChat }: ConversationProps) => {
  return (
    <div className="d-flex flex-column">
      {currentChat.chat.map(c => (
        <div
          className={`m-3 p-3 ${
            c.currentUser ? 'ms-auto' : 'me-auto'
          } bg-info-subtle`}
          key={`conversation-${c.id}`}
          style={{ width: 'fit-content' }}
        >
          {c.text}
        </div>
      ))}
    </div>
  );
};

export default Conversation;
