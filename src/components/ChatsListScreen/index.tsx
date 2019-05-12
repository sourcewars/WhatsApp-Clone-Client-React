import React from 'react';
import styled from 'styled-components';
import AddChatButton from './AddChatButton';
import ChatsNavbar from './ChatsNavbar';
import ChatsList from './ChatsList';
import { History } from 'history';

const Container = styled.div `
  height: 100vh;
`;

interface ChildComponentProps {
  history : History
};

const ChatsListScreen: React.FC<ChildComponentProps> = ({ history }) => (
  <Container>
    <ChatsNavbar history={history} />
    <ChatsList history={history} />
    <AddChatButton history={history} />
  </Container>
);

export default ChatsListScreen;
