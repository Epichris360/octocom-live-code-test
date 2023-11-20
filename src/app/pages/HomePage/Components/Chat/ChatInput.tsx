import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { TChat } from 'types/Conversation';

type ChatInputProps = {
  setChat: ({ text }: TChat) => void;
};

function ChatInput({ setChat }: ChatInputProps) {
  const [text, setText] = useState('');
  const submitChat = () => {
    const id = +new Date();
    setChat({ currentUser: true, text, id });
    setText('');
  };

  return (
    <>
      <InputGroup className="mb-3">
        <Form.Control
          placeholder="Type...."
          aria-label="type-message"
          aria-describedby="type-message"
          onChange={e => setText(e.target.value)}
          value={text}
        />
        <Button variant="primary" id="type-message-btn" onClick={submitChat}>
          Button
        </Button>
      </InputGroup>
    </>
  );
}

export default ChatInput;
