import { Container, TextField, IconButton, Avatar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { addMessage } from '../redux/MessagesSlice';
import axios from 'axios';

export const SendBar = () => {
  const [query, setQuery] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const messages = useSelector((state: RootState) => state.messages.messages);
  const dispatch = useDispatch();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (query.trim().length !== 0) {
      const newMessage = {
        id: messages.length + 1,
        text: query,
        sender: 'user',
      };
  
      try {
        await axios.post('http://localhost:3000/messages', newMessage);
      } catch (error) {
        console.log('Error sending message to http://localhost:3000/messages', error);
      }
  
      dispatch(addMessage(newMessage));
      setQuery('');
      setIsTyping(true);
  
      try {
        const response = await axios.post('http://localhost:3000/chat/sendMessage', { message: newMessage.text });
        console.log(response.data.response.message.content);
        if (response.data != null) {
          const responseText = response.data.response.message.content
          const sanitizedText = responseText;
          const botMessage = {
            id: messages.length + 2,
            text: sanitizedText,
            sender: 'bot',
          };

          await axios.post('http://localhost:3000/messages', botMessage);
          dispatch(addMessage(botMessage));
          setIsTyping(false);
        }
      } catch (error) {
        console.log('Error sending message to http://localhost:3000/chat/sendMessage', error);
      }
    }
  };

  return (
    <Container sx={{
      display:'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      padding: '16px',
      marginBottom: '60px',
      position: 'relative',
    }}>
      {isTyping && <Typography sx={{
        display: 'block',
        position: 'absolute',
        top: -10,
        left: '25%',
        transform: 'translateX(-50%)',
        alignSelf: 'center',
        color:'#686868',
        fontFamily:'inherit',
        fontSize:'16px',
        marginBottom: '16px',
      }}>
        Cloud Flow AI writing..
      </Typography>}
      <form onSubmit={handleSubmit} style={{width: '70%', alignSelf: 'center'}}>
        <TextField 
          variant='outlined'
          placeholder='Ask me anything that I can help you or your team..'
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          sx={{
            width:'70%', 
            '& .MuiOutlinedInput-root': {
              borderRadius: '20px',
              color:'#686868',
              fontFamily:'inherit',
              fontSize:'16px',
            },
          }}></TextField>

        <IconButton
          aria-label="Send"
          type='submit'
          sx={{
            marginLeft:'24px',

          }}
        >
          <Avatar  src="./images/send.svg" alt="heart" sx={{
            height:'32px',
            width:'32px',
          }}/>
        </IconButton>
      </form>
    </Container>
  );
};