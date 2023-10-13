import React, { useEffect } from 'react';
import { Container, Box } from '@mui/material';
import { Message } from '../types/Message';
import { SendBar } from './SendBar';
import { MessageItem } from './MessageItem';
import { RootState } from '../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../fetch';

export const ChatWindow = () => {
  const dispatch = useDispatch();
  const messages = useSelector((state: RootState) => state.messages.messages);

  useEffect(() => {
    fetchMessages(dispatch);
  }, [dispatch]);


  return (
    <Container
      sx={{
        height: '95vh',
        width: '100%',
        backgroundColor: '#F9F9F9',
        borderRadius: '40px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
      }}
    >

      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column-reverse',
          padding: '64px',
          flexGrow: 1,
          overflowY: 'auto',
        }}
      >
        {messages.map((message: Message) => (
          <MessageItem
            key={message.id}
            message={message}/>
        ))}
      </Box>

      <SendBar />
    </Container>
  );
};

