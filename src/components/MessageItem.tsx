import React from 'react';
import { Box, Typography } from '@mui/material';
import { Message } from '../types/Message';

interface Props {
  message: Message
}

export const MessageItem:React.FC<Props> = ({ message }) => {
  return (
    <Box
      sx={{
        position: 'relative',
        width: '50%',
        alignSelf: message.sender === 'user' ? 'end' : 'start',
        backgroundColor: message.sender === 'user' ? '#FEE2C5' : '#C4DDFF',
        borderRadius: '40px',
        marginTop: '28px',
        padding: '25px 44px',
        '::after': {
          content: '""',
          position: 'absolute',
          right: message.sender === 'user' ? '-10px' : 'auto',
          left: message.sender === 'bot' ? '-15px' : 'auto',
          top: message.sender === 'user' ? '35px' : '10px',
          width: '20px',
          height: '100%',
          background: message.sender === 'user' ? 'url(\'./images/Polygon.svg\')' : 'url(\'./images/polygonB.svg\')',
          transform: message.sender === 'user' ? 'rotate(115.295deg)' : 'rotate(-30deg)',
          backgroundSize: 'cover',
          borderBottomLeftRadius: '10px',
        }
      }}
    >
      <Typography
        sx={{
          fontFamily: 'inherit',
          fontSize: '16px',
          wordWrap: 'break-word',
          whiteSpace: 'pre-line',
        }}
      >
        {message.text}
      </Typography>
    </Box>
  );
};