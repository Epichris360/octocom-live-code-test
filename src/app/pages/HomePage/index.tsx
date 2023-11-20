import { Container, Row, Col } from 'react-bootstrap';
import Chat from './Components/Chat';
import { TConversation, TChat } from '../../../types/Conversation';

import { useState } from 'react';

export function HomePage() {
  const [convos, setConvos] = useState<Array<TConversation>>([
    { id: 1, otherUser: 'Bob', chat: [] },
  ] as TConversation[]);
  const [currentConvo, setCurrentConvo] = useState(0);

  const setCurrentConvoChat = async ({ text, id, currentUser }: TChat) => {
    console.log('text', text);
    const copyConvos = [...convos];
    if (!copyConvos[currentConvo]) {
      throw new Error('No current conversation found');
    }

    // gives us the current time in ms, will use as id
    copyConvos[currentConvo].chat.push({ id, text, currentUser });
    setConvos(copyConvos);

    await wait();
    const _id = +new Date();
    // copyConvos[currentConvo].chat.push({
    //   id: _id,
    //   text: 'this is the bot!',
    //   currentUser: false,
    // });
    setConvos(value => {
      value[currentConvo].chat.push({
        id: _id + 1,
        text: 'this is the bot!',
        currentUser: false,
      });
      return value;
    });
    console.log('get to here');
  };

  const wait = () => new Promise(resolve => setTimeout(resolve, 1000));
  const currentChat = convos[currentConvo];

  console.log(currentChat);
  return (
    <>
      <Container fluid className="px-4">
        <Row>
          <Col style={{ backgroundColor: 'red' }} lg={2}>
            Sidebar 1
          </Col>
          <Col style={{ backgroundColor: 'green' }} lg={2}>
            Sidebar 2
          </Col>
          <Col lg={6}>
            <Chat currentChat={currentChat} setChat={setCurrentConvoChat} />
          </Col>
          <Col style={{ backgroundColor: 'blue' }} lg={2}>
            Sidebar 2
          </Col>
        </Row>
      </Container>
    </>
  );
}
