import React from 'react';
import { 
  Avatar,
  Container,
  IconButton,
  List,
  ListItem,
  Typography
} from '@mui/material';
import axios from 'axios';

export const ClientBar = () => {
  const handleDelete = async () => {
    await axios.delete('http://localhost:3000/messages')
    
  };

  return (
    <Container sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems:'center',
    }}>
      <Typography variant="h1" sx={{
        fontFamily:'inherit',
        fontSize:'24px',
        marginBottom:'64px',
        alignSelf:'center'
      }}>
      Cloud Flow
      </Typography>

      <List>
        <ListItem sx={{
          display:'flex',
          listStyle:'none',
          alignItems:'center',
          cursor: 'pointer',
        }}>
          <Avatar  src="./images/heart.svg" alt="heart" sx={{
            height:'24px',
            width:'24px',
            marginRight:'12px'
          }}/>
          <Typography variant="body1" sx={{
            fontFamily:'inherit',
            fontSize:'18px',
          }}>AI Cloud Flow Coach</Typography>
        </ListItem>
      </List>

      <form 
      onSubmit={handleDelete} 
      style={{ width: '70%', display: 'flex', justifyContent: 'center' }}
    >
      <IconButton
        aria-label="Send"
        type="submit"
        sx={{
          height: '24px',
          width: '24px',
          marginRight: '12px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Avatar src="./images/cross.svg" alt="delete" sx={{ height: '24px', width: '24px' }} />
      </IconButton>
      <Typography variant="body1" sx={{ fontFamily: 'inherit', fontSize: '18px', marginLeft: '6px' }}>
          Clear History
        </Typography>
    </form>
    </Container>
  );
};