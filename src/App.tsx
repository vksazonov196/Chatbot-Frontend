import React from 'react';
import { Grid } from '@mui/material';

import { ClientBar } from './components/ClientBar';
import { ChatWindow } from './components/ChatWindow';

function App() {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        boxSizing: 'border-box',
        height: '100vh',
      }}
    >
      <Grid item xs={12} sm={2} md={3} lg={2} xl={2} sx={{ margin: '54px 45px' }}>
        <ClientBar />
      </Grid>

      <Grid item xs={12} sm={8} md={6} lg={8} xl={8} sx={{ margin: '42px' }}>
        <ChatWindow />
      </Grid>
    </Grid>
  );
}

export default App;
